import React, {useState} from "react";
import './post.css'
import M from "materialize-css";
import {createPost} from "../../../../services/hipstagramService";

const Posts = () => {
    const [titlePost, setTitlePost] = useState('')
    const [imagePost, setImagePost] = useState('')
    const [dataPost, setDataPost] = useState({})
    console.log(dataPost)

    const handleSubmitPost = () => {
        if (titlePost && imagePost) {
            const formImagePost = new FormData()
            formImagePost.append('image', imagePost)
            formImagePost.append('title', titlePost)
            createPost(formImagePost)
                .then((response) => setDataPost(response.data))
                .then(()=>M.toast({html: "YOUR ARE ADDED POST ", classes: '#c628282 green darken-3'}))
        } else {
            M.toast({html: "NEED  TO WRITE AND ADD SOMETHING", classes: '#c628282 red darken-3'})
        }
    }

    return (
        <div className='post'>
            <div className=" input_filed">
                <input onChange={(event) => setTitlePost(event.target.value)}
                       value={titlePost} type="text" placeholder='Title'/>
                <div className="file-field input-field">
                    <div className='btn grey darken-4'>
                        <span>File_upload</span>
                        <input onChange={(event) => setImagePost(event.target.files[0])}
                               type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
                </div>
            </div>
            <button onClick={handleSubmitPost} className='btn waves-effect waves-light  grey darken-4'>Add post
            </button>
        </div>
    )
}

export default Posts