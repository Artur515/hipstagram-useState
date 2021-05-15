import React, {useEffect, useState} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import style from './profileForm.module.css'
import M from "materialize-css";
import {getCurrentUser, updateCurrentUser} from "../../../../../services/hipstagramService";

//schema.yup по прикольнее будет

//formik required validation
let schema = yup.object().shape({
    login: yup.string().required().min(4, 'Login is too short!').max(20, 'Login is too long!'),
    firstName: yup.string().required().min(4, 'First name is too short!').max(20, 'First name is too long!'),
    lastName: yup.string().required().min(4, 'Last name is too short!').max(20, 'Last name is too long!'),
    email: yup.string().required("Please enter email").email(),
});

// const defaultImage = 'https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png'

const ProfileForm = () => {
    const [avatar, setAvatar] = useState('')
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
        getCurrentUser()
            .then(response => setCurrentUser(response.data))
    }, [])


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(avatar)
        const {login, firstName, lastName, email} = data

        const requestBody = {
            login: login,
            firstName: firstName,
            lastName: lastName,
            email: email,
            avatar: avatar.imagePreview
        }
        if (login && firstName && lastName && email && avatar) {
            updateCurrentUser(requestBody)
                .then(response => setCurrentUser(response))
                .then(M.toast({html: "ALl CHANGED", classes: '#c628282 green darken-3'}))
                .catch(error => {
                    M.toast({html: 'Request entity too large', classes: '#c628282 red darken-3'})
                })
        } else {
            M.toast({html: "NEED FILL ALL INPUTS ", classes: '#c628282 orange darken-3'})
        }
    }


    const onHandleChangePhoto = (event) => {
        const reader = new FileReader()
        let imageFromInput = event.target.files[0]
        console.log(imageFromInput)
        setAvatar(imageFromInput)
        if (imageFromInput !== null) {
            reader.onloadend = () => {
                setAvatar({
                    imagePreview: reader.result
                })
            }
            reader.readAsDataURL(imageFromInput)
        } else {
            return setAvatar({
                imagePreview: avatar
            })

        }
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.upload_file}>
                <div className="file-field input-field ">
                    <div className="btn  grey darken-4">
                        <span>File</span>
                        <input onChange={onHandleChangePhoto} type="file"/>
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path " type="text" placeholder='add photo .png'/>
                    </div>
                </div>
                <img className={style.avatar}
                     src={avatar ? avatar.imagePreview : currentUser.avatar}
                     alt="avatar"/>
            </div>
            <label>Login</label>
            <input type='text' name='login' placeholder='Login'  {...register("login", {required: true})}/>
            <div className={style.p}>
                {errors.login && errors.message}
            </div>
            <label>First name</label>
            <input type='text' placeholder='First name' name='firstName'{...register("firstName", {required: true})}/>
            <div className={style.p}>
                {errors.firstName && errors.message}
            </div>
            <label>Last name</label>
            <input type='text' placeholder='Last name' name='lastName' {...register("Last name", {required: true})}/>
            <div className={style.p}>
                {errors.lastName &&  errors.message}
            </div>
            <label>Email</label>
            <input type='email' placeholder='Email' name='email' {...register("Email", {required: true})}/>
            <div className={style.p}>
                {errors.email &&  errors.message}
            </div>
            <button className={style.button}>Save</button>
        </form>
    )
}

export default ProfileForm