import local from './local'
import development from './development'
import production from './production'
import colors from './colors'

let config = {
  colors,
  storybookEnabled: false,
}

const isDev = process.env.NODE_ENV !== 'production'
if (isDev) {
  config = {
    ...config,
    ...development,
    ...local,
  }
} else {
  config = {
    ...config,
    ...local,
    ...production,
  }
}

export { colors }
export default config
