import style from './headerStyle.module.css'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={style.header}>
            <Link to="/auth/login">
                <button className={style.button}>Sign in</button>
            </Link>
            <Link to="/auth/registration">
                <button className={style.button}>Sign up</button>
            </Link>
        </div>
    )
}

export default Header