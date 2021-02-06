import { h } from 'preact'
import { setup } from 'goober'
import { render } from '@testing-library/preact'
import chai, { expect } from 'chai'
import spies from 'chai-spies'
import App from './App'

setup(h)
chai.use(spies)

describe('<App>', () => {
  it('requests notification permission only when enabled by user', () => {
    const requestPermission = chai.spy.on(
      window.Notification,
      'requestPermission',
    )

    const { getByTestId } = render(<App />)
    const checkbox = getByTestId('CONTROL_NOTIFY') as HTMLInputElement

    expect(checkbox.checked).to.equal(false)
    expect(requestPermission).to.have.not.been.called()

    checkbox.click()

    expect(checkbox.checked).to.equal(true)
    expect(requestPermission).to.have.been.called()
  })

  it('flips checkbox to enabled and saves to localStorage when sound is enabled', () => {
    chai.spy.on(window.localStorage, 'getItem', () => 'false')
    const { getByTestId } = render(<App />)
    chai.spy.restore()
    const checkbox = getByTestId('CONTROL_SOUND') as HTMLInputElement

    expect(checkbox.checked).to.equal(false)

    checkbox.click()

    expect(checkbox.checked).to.equal(true)
    expect(localStorage.getItem('isSoundEnabled')).to.equal('true')
  })

  it('enables features by default if localStorage entry exists', () => {
    chai.spy.on(window.localStorage, 'getItem', () => 'true')
    const { getByTestId } = render(<App />)
    const checkbox1 = getByTestId('CONTROL_SOUND') as HTMLInputElement
    const checkbox2 = getByTestId(
      'CONTROL_NOTIFY',
    ) as HTMLInputElement

    expect(checkbox1.checked).to.equal(true)
    expect(checkbox2.checked).to.equal(true)
  })
})
