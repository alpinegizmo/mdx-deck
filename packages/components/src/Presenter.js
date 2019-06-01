import React from 'react'
import { globalHistory } from '@reach/router'
import Zoom from './Zoom'
import Slide from './Slide'
import Pre from './Pre'
import Clock from './Clock'

export const Presenter = props => {
  const { slides, metadata, index } = props
  const Current = slides[index]
  const Next = slides[index + 1]
  const AfterNext = slides[index + 2]
  const { notes } = metadata[index] || {}

  return (
    <div
      style={{
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <div
        style={{
          marginTop: 'auto',
          marginBottom: 'auto',
          display: 'flex',
        }}
      >
        <div
          style={{
            width: 500 / 10 + '%',
            minWidth: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Zoom
            zoom={5 / 10}
            rootStyle={{
              position: 'relative',
              transform: 'translateY(-50%)',
              top: '50%',
            }}
          >
            {props.children}
          </Zoom>
        </div>
        <div
          style={{
            width: 45 + '%',
            minWidth: 0,
            maxHeight: '100%',
            overflowY: 'scroll',
            paddingTop: 30,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <Zoom zoom={2 / 10}>
              {Next && (
                <Slide>
                  <Next />
                </Slide>
              )}
            </Zoom>
            <Zoom zoom={2 / 10}>
              {AfterNext && (
                <Slide>
                  <AfterNext />
                </Slide>
              )}
            </Zoom>
          </div>
          <div style={{ fontSize: '18px', lineHeight: 1.4 }}>{notes}</div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Pre>
          {index} of {slides.length - 1}
        </Pre>
        <div style={{ margin: 'auto' }} />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={globalHistory.location.origin + globalHistory.location.pathname}
          style={{
            color: 'inherit',
          }}
        >
          Open New Window
        </a>
        <div style={{ margin: 'auto' }} />
        <Clock />
      </div>
    </div>
  )
}

export default Presenter
