import { h } from 'preact'
import { setup } from 'goober'
import { render } from '@testing-library/preact'
import { expect } from 'chai'
import Header from './Header'

setup(h)

describe('<Header>', () => {
  it('renders headings', () => {
    const { getByText } = render(<Header />)
    const h1 = getByText(/4T/i)
    const h2 = getByText(/Twenty Twenty Twenty Timer/i)
    expect(document.body.contains(h1)).to.equal(true)
    expect(document.body.contains(h2)).to.equal(true)
  })
})
