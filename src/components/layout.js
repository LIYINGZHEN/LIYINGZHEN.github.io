import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components';

import Nav from './nav';

injectGlobal`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('../../static/fonts/Roboto-Regular.ttf');
  }

  body {
    margin: 0;
    background: papayawhip;
    width:100vw;
    height:100vh;
  }
`;

const Wrapper = styled.nav`
  
`;

const withLayout = ComposedComponent => {
  return class Layout extends Component {
    render() {
      return (
        <Wrapper>
          <Nav />
          <ComposedComponent />
        </Wrapper>
      )
    }
  }
}

export default withLayout