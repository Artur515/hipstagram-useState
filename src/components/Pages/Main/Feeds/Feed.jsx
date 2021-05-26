import React, {useEffect, useState} from 'react';
import './feed.css'
import M from 'materialize-css'
import {likePost} from "../../../../services/hipstagramService";
import Comment from "../comment/Comment";


const Feed = ({post}) => {
        // for likes color 'red' or 'black'
        // console.log(post)

        //my custom state for origin user posts
        const [watchLikes, setWatchLikes] = useState(post.likes.length)
        const [myLike, setMyLike] = useState('')


        const handleLikePost = (id) => {
            likePost(id)
                .then(response => response.data.status === 'liked' ? setMyLike('liked') ||
                    setWatchLikes((watchLikes) => watchLikes + 1)
                    : setMyLike('unliked')
                    || setWatchLikes((watchLikes) => watchLikes - 1))
                .catch(error => {
                    M.toast({html: error, classes: '#c628282 red darken-3'})
                })
        }


        useEffect(() => {
            M.AutoInit();
        });

        const handleImage = () => {
            const elem = document.querySelector('#image')
            M.Materialbox.getInstance(elem);
        }
        const likedStyle = {
            color: 'red'
        }
        const unLikedStyle = {
            color: 'black'
        }

        return (
            <div key={post._id} className='feed'>
                <div className='card feed_card'>
                    <h6>{post.ownerId}</h6>
                    <div className="card-image">
                        <img className="materialboxed"
                             id='image'
                             onClick={handleImage}
                             src={post.imgUrl}
                             alt="post"/>
                    </div>
                    <div className="card-content">
                        <i className="material-icons"
                           onClick={() => handleLikePost(post._id)}
                           style={watchLikes !== 0 ? likedStyle : unLikedStyle}>favorite_border</i>
                        {watchLikes}
                        {myLike === 'liked' ? <i className="material-icons">thumb_up</i> :
                            <i className="material-icons">thumb_down</i>}
                        <p>{post.title}</p>
                        <Comment id={post._id}/>
                    </div>
                </div>
            </div>
        );
    }
;

export default Feed;