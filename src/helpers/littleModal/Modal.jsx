import React, {useEffect} from 'react';
import M from "materialize-css";

const Modal = ({props}) => {


    useEffect(() => {
        M.AutoInit();
    });

    if (props !== null) {
        props.map((follow) => {
            return (<div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>{follow.login}</h4>
                        <p>{follow.email}</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            )
        })
    }
};

export default Modal;