import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: ${props => props.style && props.style.display};
  max-width: 80%;
  margin: 0 auto;
`

export default Container
