import React from 'react'
import styled from 'styled-components'

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  height: 200px;
  background: url(${props => props.style.image});
  background-size: cover;
`

const Description = styled.div`
  width: fit-content;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 0 10px rgba(0,0,0,.25);
  color: #fff;
  padding: .75rem 1rem;
  margin: 8px;
`

const Card = props => (
  <Warpper style={{ image: props.image }}>
    <Description>
      {props.children}
    </Description>
  </Warpper>
)

export default Card