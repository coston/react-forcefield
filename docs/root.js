// example Root component
import React from 'react'
import { StyleProvider } from 'mdx-go'
import Forcefield from '../dist/Forcefield.js'


const components = {
  Forcefield
}

const theme = {
  LiveCode: {
    borderRadius: '4px',
  },
  LiveEditor: {
    color: '#1C9FFF',
    backgroundColor: 'black'
  }
}

export const Root = props =>
  <StyleProvider components={components} theme={theme}>
  <div style={{marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '32px',
    paddingBottom: '32px',
    maxWidth: '1000px',}}>
  {props.children}
  </div>
  
  </StyleProvider>
