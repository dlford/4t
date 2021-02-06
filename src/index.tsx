import { h, render } from 'preact'
import { setup } from 'goober'
import 'preact/devtools'

import App from '~/App.js'
import '~/index.css'

setup(h)

const root = document.getElementById('root')

if (root) {
  render(<App />, root)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) =>
      // eslint-disable-next-line no-console
      console.log('service worker not registered', err),
    )
  })
}
