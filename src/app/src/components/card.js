import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'

const A = styled.a`
  display: block;
  transition: color 0.2s ease;
  &:hover {
    opacity: 1;
  }
`

const Figure = styled.figure`
  margin: 0;
  border-radius: 1rem;
  overflow: hidden;
`

const Img = styled.img`
  width: 100%;
  display: block;
  transition: all 0.3s ease;
  margin: auto;
  max-width: 100%;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  padding: 0.75rem 1rem;
  transform: translateZ(3rem);
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  max-width: 85%;
`

const H4 = styled.h4`
  margin: 0;
  line-height: 1.2;
  color: #fff;
  font-weight: 400;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4), 0 0 40px #000;
`

const Small = styled.small`
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #eee;
  font-weight: 700;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3), 0 1px 40px #000;
`

const P = styled.p`
  color: #eee;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.4);
  width: 100%;
  margin-bottom: 0;
`

const Card = props => (
  <Tilt
    style={{
      padding: '0',
      backgroundColor: 'transparent',
      boxShadow: '0 2px 15px rgba(0,0,0,.3)',
      color: '#ddd',
      position: 'relative',
      borderRadius: '1rem',
      transform: 'translateZ(0)',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden',
      willChange: 'transform',
      marginBottom: '4rem'
    }}
    options={{
      max: 10,
      scale: 1.02,
      easing: 'cubic-bezier(.02,1.59,.74,1.06)'
    }}
  >
    <A href={props.url}>
      <Figure>
        <Img src={props.theme.img} />
      </Figure>
      <Footer>
        <H4>{props.theme.title}</H4>
        <Small>{props.theme.category}</Small>
        <P>{props.theme.description}</P>
      </Footer>
    </A>
  </Tilt>
)

export default Card
