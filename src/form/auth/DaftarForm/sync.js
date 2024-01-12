import axios from "axios";

export function fstoreToken(token) {
    console.log(token)
}

export function flogoutAuth() {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    console.log(token)
    // axios
    //     .post('https://api-nub.friandy.web.id/api/customer/logout', {}, {headers: {'Authorization': 'Bearer ' + token}})
    //     .catch((e) => console.log(e))
    //     .then((resp) => {
    //         cookieStore.set('token', null)
    //         // console.log(resp)
    //     })
}