import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Nav from './nav'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'

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
    background: papayawhip;
    color: #333;
    height:100vh;
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
`

const Wrapper = styled.nav``

const withLayout = ComposedComponent => {
  return class Layout extends Component {
    render() {
      return (
        <Wrapper>
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
