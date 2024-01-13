import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export const PostLogin = (data) => {
  axios.post('https://api-nub.friandy.web.id/api/customer/login', data)
      .then((resp) => {
        return resp
      })
}
export const loginHook = (data) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {mutation, isLoading, isError} = useMutation(postLogin,{
        onSuccess:(data) => {
            console.log(data)
        }
    });
}