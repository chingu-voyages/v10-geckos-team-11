import { configure, addParameters, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import '../node_modules/papercss/dist/paper.min.css'
import packageJson from '../package.json'

const req = require.context('../stories', true, /\.js$/)

addDecorator(jsxDecorator)

function loadStories () {
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    isFullScreen: false,
    name: 'React PaperCSS',
    url: packageJson.repository,
    showPanel: true,
    panelPosition: 'bottom'
  }
})

configure(loadStories, module)
