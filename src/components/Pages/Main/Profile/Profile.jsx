import React, {useEffect, useState} from 'react';
import style from './profile.module.css'
import {Link} from "react-router-dom";
import Feed from "../Feeds/Feed";
import M from "materialize-css";
import Loader from "../../../../helpers/loader/Loader";
import {getCurrentUser} from "../../../../services/hipstagramService";

const defaultAvatar = "https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png"


const Profile = () => {
    const [currentUser, setCurrentUser] = useState([])


    useEffect(() => {
        M.AutoInit();
    });

    const handleModal = () => {
        const modal = document.querySelector('#modal')
        M.Modal.getInstance(modal).open()
    }


    //get current user every click
    useEffect(() => {
        getCurrentUser()
            .then(response => setCurrentUser(response.data))
            .catch(error => M.toast({html: error, classes: '#c628282 red darken-3'}))
    }, [])


    const handleModalFollowers = () => {
        const modal = document.querySelector('#modal_follow')
        M.Modal.getInstance(modal).open()
    }

    // console.log(currentUser)
    if (currentUser.length !== 0) {
        const {login, email, avatar, posts, followers, firstName, lastName} = currentUser

        return (
            <div className={style.profile}>
                <div className={style.profile_header}>
                    <div>
                        <div onClick={handleModal} className="waves-effect waves-light">
                            <img className={style.avatar}
                                 src={avatar ? avatar : defaultAvatar}
                                 alt="avatar"/>
                        </div>
                    </div>
                    <div className="modal" id='modal'>
                        <div className="modal-content">
                            <h4>{firstName ? firstName : 'First name'}</h4>
                            <h4>{lastName ? lastName : 'Last name'}</h4>
                            <h6>{email ? email : 'Email'}</h6>
                        </div>
                        <div className="modal-footer">
                            <div className="modal-close waves-effect  btn-flat">Close</div>
                        </div>
                    </div>
                    <div>
                        <h3 className={style.login} onClick={handleModal}>
                            {login}
                        </h3>
                        <div className={style.posts}>
                            <h5>{posts.length}:posts</h5>
                            <h5 onClick={() => handleModalFollowers()}
                                className={style.posts_item}>{followers.length}:followers</h5>
                        </div>
                        {/*modal followers*/}
                        <div id="modal_follow" className="modal">
                            <div className="modal-content">
                                {currentUser.followers.map((follower) => {
                                    return (
                                        <div key={follower.id} className={style.follower_title}>
                                            <h5>{follower.login}</h5>
                                            <h5>{follower.email}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/*modal followers end*/}
                    </div>
                </div>
                <div className={style.create_post}>
                    <Link to='/users/posts'>Create Post</Link>
                </div>
                <div className={style.feed_gallery}>
                    {posts.map((post) => {
                        return <Feed key={post._id} post={post}/>
                    })}
                </div>
            </div>
        )
    } else {
        return <Loader/>
    }

};

export default Profile;