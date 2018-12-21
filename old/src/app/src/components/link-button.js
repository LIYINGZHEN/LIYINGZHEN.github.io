import styled from 'styled-components'

const LinkButton = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: #555;
  padding-left: ${props => props.theme && props.theme.paddingLeft};
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

export default LinkButton
