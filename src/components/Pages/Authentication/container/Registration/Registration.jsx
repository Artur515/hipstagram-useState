import styles from "./registrationStyle.module.css";
import {registrationContent} from "../static";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Link, useHistory} from "react-router-dom";
import React from "react";
import M from 'materialize-css'
import {registrationCurrentUser} from "../../../../../services/authentication_service ";


let schema = yup.object().shape({
    name: yup.string().required().min(4),
    password: yup.string().required().min(8).max(16).matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$"),
    email: yup.string().required("Please enter email").email(),
});

const Registration = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    const history = useHistory()

    console.log(errors)


    const onSubmit = (data) => {
        console.log(data);
        const {name, email, password} = data;
        if (name && email && password) {
            registrationCurrentUser(name, email, password)
                .then(history.push("/auth/login"))
                .catch(error => {
                    M.toast({html: error, classes: '#c628282 red darken-3'})
                    history.push('/auth/registration')
                })
        }
    };

    return (
        <div className={styles.main}>
            <Link to="/">
                <h1>Hipstagram</h1>
            </Link>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {registrationContent.inputs.map((input, key) => {
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
                                <div className={styles.p}>
                                    {errors[input.name]?.message}
                                </div>
                            </div>
                        );
                    })}
                    <button className={styles.button}>
                        Submit
                    </button>
                    <div className={styles.login}>
                        If you have account you can
                        <Link to="/auth/login">
                            <h2>Login</h2>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;
