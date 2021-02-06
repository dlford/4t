import { h, JSX } from 'preact'
import { styled } from 'goober'

export interface ControlComponentProps {
  name: string
  changeSettings(
    arg0: JSX.TargetedEvent<HTMLInputElement, Event>,
  ): void
  isEnabled: boolean
  labelOff: string
  labelOn: string
  testId: string
}

export default function ControlComponent({
  name,
  changeSettings,
  isEnabled,
  labelOff,
  labelOn,
  testId,
}: ControlComponentProps): JSX.Element {
  return (
    <StyledControl>
      <input
        type='checkbox'
        data-testId={testId}
        name={name}
        id={name}
        className='ios-toggle'
        onChange={(event) => changeSettings(event)}
        checked={isEnabled}
      />
      <label
        htmlFor={name}
        className='checkbox-label'
        data-off={labelOff}
        data-on={labelOn}
      />
    </StyledControl>
  )
}

const StyledControl = styled('div')`
  width: 60px;
  text-align: center;
  padding: 1rem;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /*transition*/
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    outline: none;
    font-family: Helvetica Neue, helvetica, arial, verdana, sans-serif;
  }

  input[type='checkbox'] {
    display: none;
  }

  body {
    background: #ddd;
  }
  .ios-toggle,
  .ios-toggle:active {
    position: absolute;
    top: -5000px;
    height: 0;
    width: 0;
    opacity: 0;
    border: none;
    outline: none;
  }
  .checkbox-label {
    display: block;
    position: relative;
    font-size: 1.2rem;
    width: 100%;
    height: 36px;
    /*border-radius*/
    -webkit-border-radius: 18px;
    -moz-border-radius: 18px;
    border-radius: 18px;
    background: #ddd;
    cursor: pointer;
  }
  .checkbox-label:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    line-height: 34px;
    text-indent: 40px;
    height: 36px;
    width: 36px;
    /*border-radius*/
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    top: 0px;
    left: 0px;
    right: auto;
    background: #ddd;
    /*box-shadow*/
    -webkit-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2),
      0 0 0 2px #dddddd;
    -moz-box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #dddddd;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2), 0 0 0 2px #dddddd;
  }
  .checkbox-label:after {
    content: attr(data-off);
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    left: -300px;
    padding: 10px;
    height: 100%;
    width: 300px;
    text-align: right;
    color: #bfbfbf;
    white-space: nowrap;
  }
  .ios-toggle:checked + .checkbox-label {
    /*box-shadow*/
    -webkit-box-shadow: inset 0 0 0 20px rgba(19, 191, 17, 1),
      0 0 0 2px rgba(19, 191, 17, 1);
    -moz-box-shadow: inset 0 0 0 20px rgba(19, 191, 17, 1),
      0 0 0 2px rgba(19, 191, 17, 1);
    box-shadow: inset 0 0 0 20px rgba(19, 191, 17, 1),
      0 0 0 2px rgba(19, 191, 17, 1);
  }
  .ios-toggle:checked + .checkbox-label:before {
    left: calc(100% - 36px);
    /*box-shadow*/
    -webkit-box-shadow: 0 0 0 2px transparent,
      0 3px 3px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 0 0 2px transparent,
      0 3px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0 2px transparent, 0 3px 3px rgba(0, 0, 0, 0.3);
  }
  .ios-toggle:checked + .checkbox-label:after {
    content: attr(data-on);
    left: 60px;
    width: 36px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 1rem;
    .checkbox-label:after {
      top: -25px;
      left: -44px;
      padding: unset;
      height: unset;
      width: 150px;
      text-align: center;
    }
    .ios-toggle:checked + .checkbox-label:after {
      left: -44px;
      width: 150px;
    }
  }
`
