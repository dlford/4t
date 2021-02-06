import { h, JSX } from 'preact'
import { styled } from 'goober'

export default function HeaderComponent(): JSX.Element {
  return (
    <StyledHeader>
      <h1>4T</h1>
      <h2>Twenty Twenty Twenty Timer</h2>
    </StyledHeader>
  )
}

const StyledHeader = styled('div')`
  text-align: center;
  color: #ddd;
  h1,
  h2,
  h3 {
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  h1 {
    font-size: 6rem;
    text-decoration: underline;
  }
  h2 {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 0.8rem;
    }
  }
`
