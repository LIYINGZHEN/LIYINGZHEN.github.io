import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import NProgress from 'nprogress'
import dynamic from 'next/dynamic'
import Router from 'next/router'
import Head from 'next/head'

import Nav from './nav'
import sketch from '../components/sketch'
import Footer from '../components/footer'

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
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    line-height: 1.15;
  }

  body {
    line-height: 1.6;
    font-size: 1.6rem;
    font-family: 'Inter UI', sans-serif;
    margin: 0;
    color: #333;
    letter-spacing: -.1px;
    font-weight: 400;
  }

  a {
    transition: color .2s ease;
    text-decoration: none;
    color: #1a9f60;
    cursor: pointer;
    &:hover {
      opacity: .6;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: .35em 0 .7em;
  }

  h2 {
    font-size: 1.75em;
  }

  h4 {
    font-size: 1.25em;
  }

  h6 {
    font-size: .85em;
  }

  hr {
    width: 100px;
    margin: 10px auto;
    display: block;
    border: 0;
    background-color: #d2d6dd;
    height: 1px;
  }

  p {
    margin-top: 0;
  }

  img {
    max-width: 100%;
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
          {/* <P5Wrapper sketch={sketch} /> */}
          <Head>
            <link
              rel="stylesheet"
              type="text/css"
              href="/static/nprogress.css"
            />
          </Head>
          <Nav />
          <ComposedComponent />
          <Footer />
        </Wrapper>
      )
    }
  }
}

export default withLayout
