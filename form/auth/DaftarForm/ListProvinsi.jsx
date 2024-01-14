import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient()

export default function ListProvinsi() {
    function GetProvinsi() {
        const {isLoading, error, data, isFetching} = useQuery({
            queryKey: ['repoDataProvinsi'],
            queryFn: () =>
                axios
                    .get('https://api-nub.friandy.web.id/api/get-province')
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
            <GetProvinsi/>
        </>
    )
}