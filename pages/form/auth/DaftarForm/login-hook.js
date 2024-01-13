import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";

const loginPost = () => {
    function addTodo() {

    }

    useMutation({
        mutationFn: addTodo,
        onMutate: (variables) => {
            // A mutation is about to happen!

            // Optionally return a context containing data to use when for example rolling back
            return { id: 1 }
        },
        onError: (error, variables, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id ${context.id}`)
        },
        onSuccess: (data, variables, context) => {
            // Boom baby!
        },
        onSettled: (data, error, variables, context) => {
            // Error or success... doesn't matter!
        },
    })
}

export {
    loginPost
}