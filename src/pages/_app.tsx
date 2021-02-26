import '../styles/global.css';
import '../styles/global.css';

import { CountdownProvider } from '../contexts/CountdownContex';

function MyApp({ Component, pageProps }) {
  return (
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
  )
}

export default MyApp
