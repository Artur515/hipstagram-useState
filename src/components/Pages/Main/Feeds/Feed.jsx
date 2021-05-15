import React, {useEffect, useState} from 'react';
import './feed.css'
import M from 'materialize-css'
import {likePost} from "../../../../services/hipstagramService";


const Feed = ({post}) => {
    const [liked, setLiked] = useState(post.likes !== [] ? true : false)


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

    const handleLikePost = (id) => {
        likePost(id)
            .then(response => response.data.status === 'liked' ? setLiked(true) : setLiked(false))
            .catch(error => {
                M.toast({html: error, classes: '#c628282 red darken-3'})
            })
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
                    <i onClick={() => handleLikePost(post._id)} className="material-icons"
                       style={liked ? likedStyle : unLikedStyle}>favorite_border</i>
                    <p>{post.title}</p>
                    <input type="text" placeholder='add a comment'/>
                </div>
            </div>
        </div>
    );
};

export default Feed;