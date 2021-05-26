import React, {useEffect, useState} from 'react';
import {createComment, deleteCommentByCommentId, getCommentsByPostId} from "../../../../services/hipstagramService";
import CommentRead from "./commentRead/CommentRead";
import M from "materialize-css";

//style
const btnStyle = {
    background: 'transparent',
    color: 'black',
    border: '0'
}

const Comment = ({id}) => {
        const [inputComment, setInputComment] = useState('')
        const [createdComment, setCreatedComment] = useState('')
        const [commentById, setCommentById] = useState([])
        const inputs = document.querySelectorAll('input')


        const handleSendComment = () => {
            if (inputComment === '') {
                M.toast({html: 'Need to write anything', classes: '#c628282 red darken-3'})
            } else {
                createComment({postId: id, text: inputComment})
                    .then(response => setCreatedComment(response.data))
                    .then(inputs.forEach(input => input.value = ''))
                    .then(M.toast({html: "YOUR ARE ADDED COMMENT ", classes: '#c628282 green darken-3'}))
                    .catch(error => {
                        M.toast({html: error, classes: '#c628282 red darken-3'})
                    })
            }
        }
        //to delete comment
        const handleDeleteComment = (id) => {
            deleteCommentByCommentId(id)
                .then(setCommentById(commentById.filter(comment => comment.id !== id)))
                .catch(error => {
                    M.toast({html: error, classes: '#c628282 red darken-3'})
                })
        }


        useEffect(() => {
            getCommentsByPostId(id)
                .then(response => setCommentById(response.data))
                .catch(error => {
                    M.toast({html: error, classes: '#c628282 red darken-3'})
                })
            // eslint-disable-next-line
        }, [createdComment])

        return (
            <div>
                <input onChange={e => setInputComment(e.target.value)} type="text" placeholder='add a comment'/>
                <div>
                    <button onClick={handleSendComment} className='waves-effect btn' style={btnStyle}>Add comment</button>
                    {commentById.length ?
                        <CommentRead commentById={commentById} handleDeleteComment={handleDeleteComment} id={id}/> : ''}
                </div>
            </div>
        );
    }
;

export default Comment;