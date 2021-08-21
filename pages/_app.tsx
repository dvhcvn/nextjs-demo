import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import { FunctionComponent } from 'react'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
