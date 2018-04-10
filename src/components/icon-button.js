import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const IconButton = styled.div`
  width: ${props => props.style.width};
  height: ${props => props.style.height};
  background: url(${props => props.style.image});
  cursor: pointer;
`

export default IconButton
