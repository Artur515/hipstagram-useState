import React, {useEffect, useState} from 'react';
import style from './userProfile.module.css'
import Loader from "../../../../helpers/loader/Loader";
import Feed from "../Feeds/Feed";
import {getUserById} from "../../../../services/hipstagramService";

const defaultAvatar = 'https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png'


const UserProfile = (props) => {
    const id = props.match.params.id
    const [user, setUser] = useState(null)
    const back = props.history.goBack


    useEffect(() => {
        getUserById(id)
            .then(response => setUser(response.data))
    }, [id])

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
                            <h5 className={style.posts_item}>{user.followersCount ? user.followersCount : ''}:followers</h5>
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
};

export default UserProfile;