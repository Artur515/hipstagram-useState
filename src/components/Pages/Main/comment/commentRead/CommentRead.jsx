import React, {useState} from 'react';
import {Link} from "react-router-dom";
import style from './commentRead.module.css'
import {deleteCommentByCommentId} from "../../../../../services/hipstagramService";

const btnStyle = {
    background: 'transparent',
    color: 'black',
    border: '0'
}

const CommentRead = ({commentById, id}) => {
    const [comments, setComments] = useState([])
    const [toggle, setToggle] = useState(false)
    console.log(comments)

    const handleModal = (id) => {
        setComments(commentById.filter((com => com.postId === id)))
        setToggle(!toggle)
    }

    const handleDeleteComment = (id) => {
        deleteCommentByCommentId(id)
            .then(setComments(commentById))
    }


    return (<div>
        <button onClick={() => handleModal(id)} className='waves-effect btn' style={btnStyle}>
            {toggle ? 'Close' : 'Read comments'}
        </button>
        <div className={toggle ? 'show-on-medium' : 'hide-on-med-and-up hide-on-med-and-down'}>
            {comments.map((comment) => {
                console.log(comment)
                return (
                    <div key={comment.id}>
                        <i className='material-icons' onClick={()=>handleDeleteComment(comment.id)}>delete</i>
                        <div className={style.content}>
                            <div className={style.title}>
                                <Link to={'/users/' + comment.owner.id}>
                                    <img className={style.avatar} src={comment.owner.avatar}
                                         alt={comment.owner.login}/>
                                </Link>
                                <h4 className={style.login}>{comment.owner.login}</h4>
                            </div>
                            <span className={style.text}>comment:{comment.text}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>);
};

export default CommentRead;