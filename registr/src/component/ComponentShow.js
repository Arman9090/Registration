import React, { Component } from 'react'
import { postShow } from '../actions/auth'


class ComponentShow extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        postShow(this.props.match.params.id).then(res => {
            if (res.statusText === 'OK') {
                this.setState({ post: res.data[0] })
            }
        }
        )

    }
    render() {


        const { title, author, text } = this.state.post

        return (
            <div className='showClass'>

                <h6>SHOW POST</h6>
                <div className='showList'>
                    <div className='showItem'>
                        <b>title</b>
                        <p>{title}</p>
                    </div>
                    <div className='showItem'>
                        <b>author</b>
                        <p>{author}</p>
                    </div>
                    <div className='showItem'>
                        <b>text</b>
                        <p>{text}</p>
                    </div>


                </div>

            </div>
        )
    }
}
export default ComponentShow;