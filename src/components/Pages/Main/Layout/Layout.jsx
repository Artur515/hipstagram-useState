import React from "react";
import Profile from "../Profile/Profile";
import Header from "../../../Header/Header";
import Setting from "../SettingPage/Setting";
import {Route, Switch} from "react-router-dom";
import Users from "../Users/Users";
import style from './layout.module.css'
import Posts from "../Posts/Posts";
import UserProfile from "../Users/UserProfile";


const Layout = () => {
    return (
        <div className={style.layout}>
            <Header/>
            <div className={style.content}>
                <Switch>
                    <Route exact path='/users' component={Users}></Route>
                    <Route exact path='/users/posts' component={Posts}></Route>
                    <Route exact path='/users/current' component={Profile}></Route>
                    <Route exact path='/users/setting' component={Setting}></Route>
                    <Route path='/users/:id' component={UserProfile}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Layout