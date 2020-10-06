import path from 'path'
// @ts-check
const reactPlugin = require('vite-plugin-react')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  alias:{
    '/src/': path.resolve(__dirname, 'src')
  }
}

module.exports = config
