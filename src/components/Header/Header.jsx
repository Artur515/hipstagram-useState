import React from "react";
import {Link} from "react-router-dom";
import style from './style.module.css'
import {logOutCurrentUser} from "../../services/authentication_service ";

const Header = (props) => {

    const handleLogOut = () => {
        logOutCurrentUser()
        window.location.replace('/auth/login')
    }
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to='#' className="brand-logo left"><span className={style.logo_title}>Hipstagram</span></Link>
                <ul id="nav-mobile" className='right'>
                    <li className={style.link}><Link to='/users'>Users</Link></li>
                    <li className={style.link}><Link to='/users/current'>User Profile</Link></li>
                    <li className={style.link}><Link to='/users/setting'>Setting</Link></li>
                    <li className={style.link} onClick={() => handleLogOut()}>
                        <i style={{color: 'black', marginRight: '10px', cursor: "pointer"}} className="material-icons">
                            directions_run
                        </i>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header