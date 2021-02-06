import { h, JSX } from 'preact'
import { styled } from 'goober'

export default function FooterComponent(): JSX.Element {
  return (
    <StyledFooter>
      <p>
        To promote eye health and combat computer vision syndrome, use
        this timer to remind you to follow to 20-20-20 rule:
      </p>
      <p>
        Every 20 minutes focus on something 20 feet away for 20
        seconds.
      </p>
      <small>
        Copyleft DL Ford 2019 - {new Date(Date.now()).getFullYear()}
        <br />
        <a
          href='https://github.com/dlford/4t'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Source
        </a>
      </small>
    </StyledFooter>
  )
}

const StyledFooter = styled('div')`
  text-align: center;
  font-size: 1.2rem;
  max-width: 600px;
  padding: 1rem;
  color: #ddd;
  a,
  a:visited {
    color: #ddd;
  }
  a:hover {
    text-decoration: none;
  }
  small {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
    small {
      font-size: 0.6rem;
    }
  }
`
