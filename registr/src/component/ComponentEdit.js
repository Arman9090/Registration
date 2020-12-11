import React, {Component} from 'react'
import {postEdit} from '../actions/auth' 


class ComponentEdit extends Component{
    state={
        post:{}
    }


     componentDidMount(){
         postEdit(this.props.match.params.id).then(res=>{
            if(res.statusText === 'OK'){
               this.setState({post: res.data[0]})}
            }
                )

    }
    render(){
        console.log(this.state.post)

        const {title, author, text}=this.state.post
        return(
            
            <div className='regEdit'>
                  <div className='registrEdit'>
                        <p>title</p>
                            <input className='text'value={title}  name='tiltle'  type='text' placeholder='title'></input>
                         <p>author</p>
                         <input className='text' value={author}  name='author' type="text" placeholder="auther"></input>
                         <p>text</p>
                        <textarea className='text'value={text}  name='text'  type="text" ></textarea>
                         <br></br>
                         <button className='textbtn' >Add the post</button>
                          </div>
                         </div>
        )
    }
}

export default ComponentEdit