import '../styles/globals.css'

import StoreProvider from '../store/store-context'

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <div>
        <Component {...pageProps} />{' '}
      </div>
    </StoreProvider>
  )
}

export default MyApp
