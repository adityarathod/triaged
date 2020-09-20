import '../styles/globals.css'
import { init } from '../firebase'

init()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
