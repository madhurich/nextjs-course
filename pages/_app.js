import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>Events App</title>
      <meta name="description" content="all the events featured and non featured"/>
          <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          />
      </Head>
    <Component {...pageProps} />
    </Layout>
}

export default MyApp
