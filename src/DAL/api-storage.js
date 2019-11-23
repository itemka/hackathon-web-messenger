export const storage = {
    saveToken(token) {
        console.log(token)
        return Promise.resolve(
            localStorage.setItem('token', token)
        )
    },
    loadToken() {
        return Promise.resolve(localStorage.getItem('token'))
    },
}
