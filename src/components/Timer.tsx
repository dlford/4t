import { h, JSX } from 'preact'
import { styled } from 'goober'

export interface TimerComponentProps {
  time: number
}

export default function TimerComponent({
  time,
}: TimerComponentProps): JSX.Element {
  function formatTime(time: number): string {
    const minutes = Math.floor(time / 60)
    const seconds = time - minutes * 60
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`
  }

  return <StyledTimer>{formatTime(time)}</StyledTimer>
}

const StyledTimer = styled('div')`
  text-align: center;
  font-size: 8rem;
  padding-bottom: 1rem;
  color: #ddd;
  @media screen and (max-width: 400px) {
    font-size: 4rem;
  }
`
