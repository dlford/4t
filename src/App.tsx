import { h, JSX } from 'preact'
import { styled } from 'goober'
import { useState, useEffect } from 'preact/hooks'

import Header from '~/components/Header'
import Timer from '~/components/Timer'
import Control from '~/components/Control'
import Footer from '~/components/Footer'
import playSound, { audioCtx } from '~/lib/playSound'

const hasNotificationSupport = 'Notification' in window

export interface AppSettingsProps {
  isSoundEnabled: boolean
  isNotifyEnabled: boolean
}

export default function App(): JSX.Element {
  const [count, setCount] = useState(1200)

  const [settings, setSettings] = useState<AppSettingsProps>({
    isSoundEnabled: localStorage.getItem('isSoundEnabled') === 'true',
    isNotifyEnabled:
      localStorage.getItem('isNotifyEnabled') === 'true',
  })

  function changeSettings(
    event: JSX.TargetedEvent<HTMLInputElement, Event>,
  ) {
    const target = event?.target as HTMLInputElement
    const name = target?.name
    const value = target?.checked

    function save() {
      localStorage.setItem(name, `${value}`)
      setSettings((prev) => {
        return {
          ...prev,
          [name]: value,
        }
      })
    }

    if (name === 'isNotifyEnabled' && value) {
      if (Notification?.permission === 'granted') {
        save()
        return
      }
      try {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            save()
          }
        })
      } catch {
        Notification.requestPermission()
      }
    } else {
      audioCtx.resume()
      save()
    }
  }

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setCount((prev) => {
          if (prev > 1) {
            return prev - 1
          }

          if (settings.isNotifyEnabled) {
            new Notification('Rest your Eyes!', {
              body: 'Focus on something 20 feet away for 20 seconds.',
              icon: '/favicon.ico',
            })
          }

          if (settings.isSoundEnabled) {
            playSound()
          }

          return 1200
        }),
      1000,
    )
    return () => clearTimeout(timer)
  }, [count, setCount, settings])

  return (
    <div className='App'>
      <StyledBody>
        <Header />
        <Timer time={count} />
        <div>
          <Control
            name='isSoundEnabled'
            labelOn='Sound On'
            labelOff='Sound Off'
            testId='CONTROL_SOUND'
            isEnabled={settings.isSoundEnabled}
            changeSettings={changeSettings}
          />
          {hasNotificationSupport && (
            <Control
              name='isNotifyEnabled'
              labelOn='Notifications On'
              labelOff='Notifications Off'
              testId='CONTROL_NOTIFY'
              isEnabled={settings.isNotifyEnabled}
              changeSettings={changeSettings}
            />
          )}
        </div>
        {audioCtx.state !== 'running' && settings.isSoundEnabled && (
          <div className='audio-disabled'>
            <h3>Audio Disabled!</h3>
            <p>
              Your browser requires user interaction before allowing
              this page to play audio, please click the button below
              to enable sound for this session.
            </p>
            <button onClick={() => audioCtx.resume()}>
              Enable Audio
            </button>
          </div>
        )}
        {!hasNotificationSupport && (
          <SmallP>
            This browser does not support notifications.
          </SmallP>
        )}
        <Footer />
      </StyledBody>
    </div>
  )
}

const StyledBody = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: white;
  .audio-disabled {
    border: 2px solid #ddd;
    border-radius: 0.5rem;
    h3 {
      line-height: 0.8;
      color: #eb7d75;
    }
    text-align: center;
    padding: 0 1rem 1rem;
    margin: 1rem;
    max-width: 400px;
    font-size: 0.8rem;
  }
`

const SmallP = styled('p')`
  font-size: 0.8rem;
`
