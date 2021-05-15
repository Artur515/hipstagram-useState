import React from 'react'
import ProfileForm from "./Save_profile/ProfileForm";
import Password from "./Save_Password_form/Password_Form";
import style from './setting.module.css'



const Setting = () => {


    return (
        <div className={style.setting}>
            <ProfileForm/>
            <Password/>
        </div>
    )
}


export default Setting