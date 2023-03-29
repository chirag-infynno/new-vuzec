import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import '@fontsource/montserrat/variable.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
