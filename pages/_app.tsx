import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useHttps } from '../services/useHttps'

function MyApp({ Component, pageProps }: AppProps) {
  useHttps()
  return <Component {...pageProps} />
}

export default MyApp
