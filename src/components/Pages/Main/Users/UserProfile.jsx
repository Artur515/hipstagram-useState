import React, {useEffect, useState} from 'react';
import style from './userProfile.module.css'
import Loader from "../../../../helpers/loader/Loader";
import {getFollowersAndFollowingOfUserByUserId, getUserById} from "../../../../services/hipstagramService";
import M from "materialize-css";
import Feed from "../Feeds/Feed";


const defaultAvatar = 'https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png'


const UserProfile = (props) => {
        const id = props.match.params.id
        const [user, setUser] = useState(null)
        const [followers, setFollowers] = useState(null)


//router dom go back
        const back = props.history.goBack


        useEffect(() => {
            getUserById(id)
                .then(response => setUser(response.data))
        }, [id])


        useEffect(() => {
            M.AutoInit();
        });

        const handleFollowers = (id) => {
            getFollowersAndFollowingOfUserByUserId(id)
                .then(response => setFollowers(response.data.followers))
        }


        const handleModalFollowers = () => {
            const modal = document.querySelector('#modal1')
            M.Modal.getInstance(modal).open()
        }


        const handleGoBackPage = () => {
            back()
        }


        if (user !== null) {
            const {posts} = user
            return (<>
                <div className={style.profile}>
                    <div className={style.profile_header}>
                        <div>
                            <div>
                                <img className={style.avatar}
                                     src={user.avatar ? user.avatar : defaultAvatar}
                                     alt="avatar"/>
                            </div>
                        </div>
                        <div>
                            <h3 className={style.login}>
                                {user.login ? user.login : 'User'}
                            </h3>
                            <div className={style.posts}>
                                <h5>{user.posts.length ? user.posts.length : ''}:posts</h5>
                                <h5 className={style.posts_item} onClick={() => handleFollowers(id)}>
                                    {user.followersCount ? user.followersCount : ''}:followers
                                </h5>
                                <span onClick={() => handleModalFollowers()}
                                      style={{display: followers ? 'block' : 'none', cursor: 'pointer'}}>
                                    ?
                                </span>
                                {/*modal*/}


                                <div id="modal1" className="modal">
                                    <div className="modal-content">
                                        {/*watch followers*/}
                                        {followers ? followers.map((follower) => {
                                            return (
                                                <div key={follower.id} className={style.followers_title}>
                                                    <h5>{follower.login}</h5>
                                                    <h5>{follower.email}</h5>
                                                </div>
                                            )
                                        }) : ''}
                                    </div>
                                </div>


                                {/*  modal  */}
                            </div>
                        </div>
                    </div>
                </div>
                <span className={style.span} onClick={handleGoBackPage}>Go back</span>
                <div className={style.feed_gallery}>
                    {posts.map((post) => {
                        return <Feed key={post._id} post={post}/>
                    })}
                </div>
            </>);
        } else {
            return <Loader/>
        }
    }
;

export default UserProfile;