import React, { Component } from 'react'
import styled from 'styled-components'

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: #555;
  padding-left: ${props => props.theme && props.theme.paddingLeft};
`

export default LinkButton
