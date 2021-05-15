import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_URL} from "../../../../services/authentication_service ";
import {headers} from "../../../../services/currentUser";
import M from "materialize-css";
import User from "./user/User";
import Loader from "../../../../helpers/loader/Loader";


const Users = () => {
        const [userList, setUsersList] = useState(null)
        const [filterUsers, setFilterUsers] = useState([])
        const chooseUsersArray = filterUsers === [] ? userList : filterUsers



//get  all users to list
        useEffect(() => {
            axios.get(API_URL + '/users', {headers: headers})
                .then(response => setUsersList(response.data))
                .catch(error => M.toast({html: error, classes: '#c628282 red darken-3'}))
        }, [])



//search users with tab
        const handleSearch = (event) => {
            const {value} = event.target
            let user = userList.filter((user) => {
                return user.login.toLowerCase().includes(value.toLowerCase())
            })
            setFilterUsers(user)
        }


        if (userList !== null) {
            return (
                <>
                    <input type="text" placeholder='Tab to Search users...' onChange={handleSearch}/>
                    {
                        chooseUsersArray !== null && chooseUsersArray.length !== 0 ? chooseUsersArray.map((user) => {
                                return (
                                    <User key={user._id} user={user}/>
                                )
                            }
                        ) : <p>Sorry...User not found...</p>
                    }
                </>)
        } else {
            return <Loader/>
        }

    }
;

export default Users;