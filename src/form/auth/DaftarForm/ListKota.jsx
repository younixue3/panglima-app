import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient()

export function ListKota(provinsi) {
    function GetKota() {
        const {isLoading, error, data, isFetching} = useQuery({
            queryKey: ['repoData'],
            queryFn: () =>
                axios
                    .get(`https://api-nub.friandy.web.id/api/get-province/${provinsi.provinsi}`)
                    .then((resp) => resp.data),
        })

        if (isLoading) return 'Loading'

        if (error) return 'An error has occurred: ' + error.message

        return (
            <>
                {data.data.cities.map((item, key) => {
                    return (
                        <option value={item.id} key={key}>{item.name}</option>
                    )
                })}
            </>
        )
    }
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <GetKota/>
            </QueryClientProvider>
        </>
    )
}