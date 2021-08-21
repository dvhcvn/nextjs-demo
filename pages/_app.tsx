import { AppProps } from 'next/dist/shared/lib/router/router'
import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../store'

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const store = useStore()

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
