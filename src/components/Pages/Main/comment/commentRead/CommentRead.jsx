import React, {useEffect} from 'react';
import M from "materialize-css";
import {Link} from "react-router-dom";

const btnStyle = {
    background: 'transparent',
    color: 'black',
    border: '0'
}
const style_div = {
    borderBottom: '1px solid black',
    alignItems: 'center',
    textAlign: 'center'
}

const CommentRead = ({commentById}) => {

    console.log(commentById)

    useEffect(() => {
        M.AutoInit();
    });


    const handleModal = () => {
        const modal = document.querySelector('#modal3')
        M.Modal.getInstance(modal).open()
    }


    return (<>
        <button onClick={handleModal} className='waves-effect btn' style={btnStyle}>Read comments</button>
        <div id="modal3" className="modal">
            <div className="modal-content">
                {commentById.map((comment) => {
                    return (
                        <div style={style_div} key={comment.id}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Link to={'/users/' + comment.owner.id}>
                                    <img style={{width: '100px', marginTop: '5px'}}
                                         src={comment.owner.avatar}
                                         alt={comment.owner.login}/>
                                </Link>
                                <h4>{comment.owner.login}</h4>
                            </div>
                            <span>comment:{comment.text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    </>);
};

export default CommentRead;