import React from 'react'
// @ts-expect-error
import { createRoot } from 'react-dom'
import { App } from './app'

const root = createRoot(
    document.getElementById('root')
)

root.render(<App />)
