import { h } from 'preact'
import { setup } from 'goober'
import { render } from '@testing-library/preact'
import chai, { expect } from 'chai'
import spies from 'chai-spies'
import Control from './Control'

setup(h)
chai.use(spies)

const defaultProps = {
  name: 'Controller',
  changeSettings: () => {
    return
  },
  isEnabled: true,
  labelOff: 'This is off',
  labelOn: 'This is on',
  testId: 'CONTROL_CHECKBOX',
}

const changeSettings = chai.spy.on(defaultProps, 'changeSettings')

describe('<Control>', () => {
  it('defaults to correct state', () => {
    const { getByTestId } = render(<Control {...defaultProps} />)
    const checkbox = getByTestId(
      'CONTROL_CHECKBOX',
    ) as HTMLInputElement
    expect(checkbox.checked).to.equal(true)
  })

  it('calls changeSettings function when changed', () => {
    const { getByTestId } = render(<Control {...defaultProps} />)
    const checkbox = getByTestId('CONTROL_CHECKBOX')

    expect(changeSettings).to.have.not.been.called()

    checkbox.click()

    expect(changeSettings).to.have.been.called()
  })
})
