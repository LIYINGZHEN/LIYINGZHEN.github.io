import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 120rem;
  padding: 0 1rem;
  margin: ${props => (props.theme && props.theme.margin) || '0 auto'};
  width: ${props => (props.theme && props.theme.width) || '96%'};
  display: ${props => (props.theme && props.theme.display) || 'flex'};
  height: ${props => props.theme && props.theme.height};
  min-height: ${props => props.theme && props.theme.minHeight};
  align-items: center;
  justify-content: ${props => props.theme && props.theme.justifyContent};
`

export default Container
