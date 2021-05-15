import React, {useState} from 'react';
import style from './user.module.css'
import {NavLink} from "react-router-dom";
import {followUser} from "../../../../../services/hipstagramService";
import M from "materialize-css";


const defaultAvatar = 'https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png'


const User = ({user}) => {

        const [follow, setFollow] = useState(user.isFollow)


        const followStyle = {
            color: '#00e5ff',
            background: 'transparent'
        }
        const unFollowStyle = {
            color: '#bf0098',
            background: 'transparent'
        }


        const handleFollow = (id) => {
            followUser(id)
                .then(response => response.status === 200 ? setFollow(!follow) : '')
                .catch(error => {
                    M.toast({html: error, classes: '#c628282 red darken-3'})
                })
        }


        return (
            <div className={style.user_card}><NavLink to={'/users/' + user._id}>
                <div className={style.user_image}><img src={user.avatar ? user.avatar : defaultAvatar}
                                                       alt="avatar"/></div>
            </NavLink>
                <h5>{user.login}</h5>
                <h6>{user.email}</h6>
                <button onClick={() => handleFollow(user._id)} className={style.button}
                        style={follow ? unFollowStyle : followStyle}>
                    {follow ? 'UnFollow' : 'Follow'}
                </button>
            </div>
        );
    }
;

export default User;