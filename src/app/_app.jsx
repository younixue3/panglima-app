import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import NextNProgress from 'nextjs-progressbar';
config.autoAddCss = false
library.add(fas, fab)

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress />
            <Component {...pageProps} />
        </>
    )
}