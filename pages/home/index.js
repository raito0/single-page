import React from 'react'
import Head from 'next/head'

import { Home, Container } from './styled';
import Header from './Header'
import Main from './Main';
import ListFeature from './ListFeature';
import Video from './Video';
import Subcribe from './Subcribe';
import Partners from './Partners';
import Footer from './Footer';
export default () =>
  <Home>
    <div style={{ backgroundColor: "#FEF3EF" }}>
      <Container>
        <Head>
          <title>Page test</title>
        </Head>
        <Header />
        <Main />
      </Container>
    </div>
    <div style={{ backgroundColor: "#201C4F" }}>
      <ListFeature />
    </div>
    <div style={{ backgroundColor: "#F9A99E" }}>
      <Video />
    </div>
    <div style={{ backgroundColor: "#324099" }}>
      <Subcribe />
    </div>
    <div style={{ backgroundColor: "#ffffff" }}>
      <Partners />
    </div>
    <div style={{ backgroundColor: "#201C4F" }}>
      <Footer />
    </div>
  </Home>