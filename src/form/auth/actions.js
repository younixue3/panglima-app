
import axios from "axios";
import cookies from "cookie-cutter";

export function storeToken(token) {
    cookies.set('token', token)
    console.log(cookies.get('token'))
}

export function logoutAuth() {
    console.log(cookies.get('token'))
    axios
        .post('https://api-nub.friandy.web.id/api/customer/logout', {}, {headers: {'Authorization': `Bearer ${cookies.get('token')}`}})
        .catch((e) => console.log(e))
        .then((resp) => {
            console.log(resp)
        })
}