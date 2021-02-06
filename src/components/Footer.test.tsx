import { h } from 'preact'
import { setup } from 'goober'
import { render } from '@testing-library/preact'
import { expect } from 'chai'
import Footer from './Footer'

setup(h)

describe('<Footer>', () => {
  it('renders headings', () => {
    const { getByText } = render(<Footer />)
    const text = getByText(/To promote eye health.*20 rule:/i)
    const text2 = getByText(/Every 20 minutes focus.*20 seconds./i)
    const text3 = getByText(/Copyleft DL Ford/i)
    const text4 = getByText(/View Source/i)
    expect(document.body.contains(text)).to.equal(true)
    expect(document.body.contains(text2)).to.equal(true)
    expect(document.body.contains(text3)).to.equal(true)
    expect(document.body.contains(text4)).to.equal(true)
  })
})
