import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
config.autoAddCss = false
library.add(fas, fab)

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}