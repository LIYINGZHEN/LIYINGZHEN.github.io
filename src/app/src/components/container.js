import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1rem;
  width: ${props => (props.theme && props.theme.width) || '96%'};
  display: ${props => (props.theme && props.theme.display) || 'flex'};
  height: ${props => props.theme && props.theme.height};
  min-height: ${props => props.theme && props.theme.minHeight};
`

export default Container
