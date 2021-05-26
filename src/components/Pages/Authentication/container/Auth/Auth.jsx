import styles from "./authStyle.module.css";
import {authContent} from "../static";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {Link, Redirect} from "react-router-dom";
import React, {useState} from "react";
import {loginCurrentUser} from "../../../../../services/authentication_service ";
import Loader from "../../../../../helpers/loader/Loader";
import M from "materialize-css";

let schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required().min(6),
});


const Auth = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });
    ///надо добавить loader
    const [loading, setLoading] = useState(false);
    const [isLoggedIn] = useState(() => {
        const current = JSON.parse(localStorage.getItem('currentUserToken'))
        return current
    })

    const onSubmit = (data) => {
        console.log(data)
        const {name, password} = data
        setLoading(true)
        if (name && password) {
            loginCurrentUser(name, password)
                .then(() => {
                    props.history.push('/users/current')
                    window.location.reload()
                })
                .catch((error) => {
                    setLoading(false)
                    M.toast({html: error, classes: '#c628282 red darken-3'})
                })
        } else {
            setLoading(false)
        }
    };
//watch logged or no//
    if (isLoggedIn) {
        return <Redirect to="/users/current"/>
    }

    return (
        <div className={styles.main}>
            <Link to="/">
                <h1 style={{textDecoration: 'none'}}>Hipstagram</h1>
            </Link>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {authContent.inputs.map((input, key) => {
                        return (
                            <div key={key}>
                                <div>
                                    <label className={styles.input}>
                                        {input.label}
                                    </label>
                                </div>
                                <div>
                                    <input
                                        className={styles.input}
                                        name={input.name}
                                        type={input.type}
                                        {...register(input.name)}
                                    />
                                </div>
                                <p className={styles.p}>
                                    {errors[input.name]?.message}
                                </p>
                            </div>
                        );
                    })}
                    <button className={styles.button} disabled={loading}>
                        Submit
                    </button>
                    {loading && <Loader/>}
                </form>
                <div className={styles.registration}>
                    If you not have account you can
                    <Link to="/auth/registration">
                        <h2>Registration</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Auth
