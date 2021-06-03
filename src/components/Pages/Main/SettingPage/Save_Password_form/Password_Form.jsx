import React, {useRef} from "react";
import {useForm} from 'react-hook-form';
import style from './password.module.css'
import M from "materialize-css";
import {updatePassword} from "../../../../../services/hipstagramService";

const Password = () => {


    const {register, handleSubmit, formState: {errors}, watch} = useForm({});
    const password = useRef({});
    password.current = watch("password", "");//наблюдаем за первым input

    // console.log(password)
    const onSubmit = (data) => {
        // const {password, confirmPassword} = data

        updatePassword(data)
            .then(response => console.log(response))
            .then(()=>M.toast({html: "YOUR ARE ADDED NEW PASSWORD ", classes: '#c628282 green darken-3'}))
            .catch(error => {
                M.toast({html: "SOMETHING WRONG", classes: '#c628282 red darken-3'})
            })
    }

    return (
        <form className={style.form_password} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form_div}>
                <div className={style.div_input}>
                    <label>Password</label>
                    <input name='password' type='password' placeholder='Password'
                           className={style.input}
                           {...register("password", {required: "You must specify a password", maxLength: 20})}
                    />
                    {errors.password && <p className={style.p}>Password must have at least 8 characters</p>}
                </div>
                <div className={style.div_input}>
                    <label>Confirm Password</label>
                    <input name='confirmPassword' type='password' placeholder='Confirm password'
                           {...register('confirmPassword', {
                               validate: value =>
                                   value === password.current || "The passwords do not match"
                           })}
                           className={style.input}/>
                    {errors.confirmPassword && <p className={style.p}> The passwords do not match</p>}
                </div>
            </div>
            <button className={style.button}>Save</button>
        </form>
    )
}


export default Password