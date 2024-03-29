import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import NextNProgress from 'nextjs-progressbar';
import './globals.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
config.autoAddCss = false
library.add(fas, fab)

export default function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
                <Component {...pageProps} />
            </QueryClientProvider>
        </>
    )
}