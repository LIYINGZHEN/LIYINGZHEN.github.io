import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 120rem;
  padding: 0 1rem;
  align-items: center;
  margin: ${props => (props.theme && props.theme.margin) || '0 auto'};
  width: ${props => (props.theme && props.theme.width) || '96%'};
  display: ${props => (props.theme && props.theme.display) || 'flex'};
  height: ${props => props.theme && props.theme.height};
  min-height: ${props => props.theme && props.theme.minHeight};
  justify-content: ${props => props.theme && props.theme.justifyContent};
  margin-top: ${props => props.theme && props.theme.marginTop};
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

export default Container
