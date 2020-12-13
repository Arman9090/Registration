import React, { useEffect, useState, useReducer, useCallback } from 'react';
import { getAllPost, createUser, postsDelete, } from 'actions/auth';
import { Link } from 'react-router-dom'

const initialState = {
  title: '',
  author: '',
  text: '',
  posts: [],
  call: []
}
export const testReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VALUES':
      return {
        ...state,
        ...action.payload
      };
    case 'CLEAR_VALUES':
      return {
        ...state,
        title: '',
        author: '',
        text: ''
      };
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload
      };

    case 'DEL_POSTS':
      return {
        ...state,
        ...action.payload

      };
    default:
      return state

    case 'SHOW_POST':
      return {
        ...state,
        title: 'title',
        author: 'author',
        text: 'text'

      };


  }

};
const ComponentReg = () => {
  const [state, dispatch] = useReducer(testReducer, initialState);
  const { title, author, text, posts } = state

  useEffect(() => {
    getPosts();
  }, [])

  const getPosts = () => {
    getAllPost().then(res => {
      if (res.statusText === 'OK') {
        dispatch({ type: 'GET_POSTS', payload: res.data });
      }
    })
  }

  const handleChange = useCallback((e) => {
    dispatch({ type: 'ADD_VALUES', payload: { [e.currentTarget.name]: e.currentTarget.value } })
  }, [])

  const addFun = () => {
    if (title !== "" && author !== "" && text !== "") {
      createUser({ title, author, text }).then(res => {
        if (res.statusText === 'OK') {
          dispatch({ type: 'CLEAR_VALUES' })
          getPosts();
        }
      })
        .catch(err => console.error(err))
    }
  }


  const delFun = (id) => {
    postsDelete({ id }).then(res => {
      if (res.statusText === 'OK') {
        dispatch({ type: 'DEL_POSTS' })
        getPosts();
      }
    })
      .catch(err => console.error(err))
  }




  return (

    <div className='box' >
      <div className='regClass'>
        <div className='registr'>
          <p>title</p>
          <input className='text' type='text' placeholder='title' onChange={e => handleChange(e)} value={state.title} name='title' />
          <p>author</p>
          <input className='text' type="text" placeholder="auther" onChange={e => handleChange(e)} value={state.author} name='author' />
          <p>text</p>
          <textarea className='text' type="text" onChange={e => handleChange(e)} value={state.text} name='text' />
          <br></br>
          <button className='textbtn' onClick={addFun}>Add the post</button>
        </div>
      </div>

      <div className="tableDiv">
        <thead className="classThead">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>text</th>
            <th>Tools</th>
          </tr>
          <tr>
            <td colSpan="4">There are no posts to show. Create one!</td>
          </tr>

        </thead>
        <tbody>
          {posts.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.text}</td>
                <td style={{ cursor: 'pointer' }} onClick={(e) => delFun(item.id)}>Delete</td>
                <td><Link to={`/show/${item.id}`} >show</Link></td>
                <td><Link to={`/edit/${item.id}`} >edit</Link></td>
              </tr>
            )

          })}
        </tbody>
      </div>

    </div>
  )
}


export default ComponentReg;