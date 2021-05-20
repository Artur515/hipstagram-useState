import axios from "axios";
import {API_URL} from "./authentication_service ";
import {headers} from "./currentUser";

export const getCurrentUser = () => {
    return axios.get(API_URL + '/users/current', {headers: headers})
}

export const updateCurrentUser = (data) => {
    return axios.patch(API_URL + '/users/current', data, {headers: headers})
}

export const getUserById = (id) => {
    return axios.get(API_URL + '/users/' + id, {headers: headers})
}

export const updatePassword = (data) => {
    return axios.post(API_URL + '/auth/updatePassword', data, {headers: headers})
}

export const followUser = (id) => {
    return axios.get(API_URL + '/users/follow/' + id, {headers: headers})
}

export const createPost = (data) => {
    return axios.post(API_URL + "/posts", data, {headers: headers})
}

export const likePost = (id) => {
    return axios.get(API_URL + '/posts/like/' + id, {headers: headers})
}

export const getFollowersAndFollowingOfUserByUserId = (id) => {
    return axios.get(API_URL + '/users/followersAndFollowing/' + id, {headers: headers})
}

export const createComment = (data) => {
    return axios.post(API_URL + '/comments', data, {headers: headers})
}


export const getCommentsByPostId = (id) => {
    return axios.get(API_URL + '/comments/' + id, {headers: headers})
}

export const updateCommentText = (id, data) => {
    return axios.patch(API_URL + '/comments/' + id, {data}, {headers: headers})
}