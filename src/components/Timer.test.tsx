import { h } from 'preact'
import { setup } from 'goober'
import { render } from '@testing-library/preact'
import { expect } from 'chai'
import Timer from './Timer'

setup(h)

describe('<Timer>', () => {
  it('renders the correct time remaining with leading zeros', () => {
    const { getByText } = render(<Timer time={182} />)
    const timer = getByText(/03:02/i)
    expect(document.body.contains(timer)).to.equal(true)
  })

  it('renders the correct time remaining without leading zeros', () => {
    const { getByText } = render(<Timer time={1234} />)
    const timer = getByText(/20:34/i)
    expect(document.body.contains(timer)).to.equal(true)
  })
})
