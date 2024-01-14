import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient()

export default function ListMarketing() {
    function GetMarketing() {
        const {isLoading, error, data, isFetching} = useQuery({
            queryKey: ['repoDataMarketing'],
            queryFn: () =>
                axios
                    .get('https://api-nub.friandy.web.id/api/get-marketings')
                    .then((resp) => resp.data),
        })

        if (isLoading) return 'Loading'

        if (error) return 'An error has occurred: ' + error.message

        return (
            <>
                {data.data.map((item, key) => {
                    return (
                        <option value={item.id} key={key}>{item.name}</option>
                    )
                })}
            </>
        )
    }
    return (
        <>
            <GetMarketing/>
        </>
    )
}