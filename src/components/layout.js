import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import NProgress from 'nprogress'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import Head from 'next/head'

import Nav from './nav'
import sketch from '../components/sketch'

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  ssr: false,
  loading: () => null
})

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  margin: '0 10px 0 0'
}

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

injectGlobal`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('../../static/fonts/Roboto-Regular.ttf');
  }

  body {
    margin: 0;
    color: #333;
    height:100vh;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: #555;
  }

  h2 {
    font-weight: 500;
    margin: .35em 0 .7em;
    font-size: 1.75em;
  }

  #defaultCanvas0 {
    position: fixed;
    top: 0;
    left: 0;
    opacity: .4;
    z-index: -2;
  }
`

const Wrapper = styled.nav``

const withLayout = ComposedComponent => {
  return class Layout extends Component {
    render() {
      return (
        <Wrapper>
          <P5Wrapper sketch={sketch} />
          <Head>
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/nprogress.css"
            />
          </Head>
          <Nav />
          <ComposedComponent />
        </Wrapper>
      )
    }
  }
}

export default withLayout
