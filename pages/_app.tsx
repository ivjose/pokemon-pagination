import type { AppProps /*, AppContext */ } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '@lib/apolloClient'
import { LoginAuthProvider } from '@contexts/LoginAuthContexts'

import '../src/styles/globals.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <LoginAuthProvider>
        <Component {...pageProps} />
      </LoginAuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
