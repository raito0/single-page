import React from 'react'
import { ThemeProvider } from 'styled-components'
import NextApp, { Container } from 'next/app'
import Head from 'next/head'

// Global styles
import GlobalStyles from '~/components/GlobalStyles'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return <Container>
      <GlobalStyles />

      <Head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>

      <ThemeProvider theme={{
        breakpoints: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px'
        }
      }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Container>
  }
}

export default App