export const authHeader = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUserToken'))
    if (currentUser) {
        return {access_token: 'Bearer' + currentUser}
    } else {
        return {}
    }
}


