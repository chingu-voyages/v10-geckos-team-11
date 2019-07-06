import { configure, addParameters } from '@storybook/react'

import packageJson from '../package.json'

const req = require.context('../stories', true, /\.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    isFullScreen: false,
    name: 'Placeholder', // Change this
    url: packageJson.repository,
    showPanel: false
  }
})

configure(loadStories, module)
