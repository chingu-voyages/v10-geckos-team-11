import { configure, addParameters } from '@storybook/react'
import '../node_modules/papercss/dist/paper.min.css'

import packageJson from '../package.json'

const req = require.context('../stories', true, /\.js$/)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    isFullScreen: false,
    name: 'React PaperCSS',
    url: packageJson.repository,
    showPanel: false
  }
})

configure(loadStories, module)
