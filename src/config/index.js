import local from './local'
import development from './development'
import production from './production'
import colors from './colors'

let config = {
  colors,
  storybookEnabled: false,
}

const __DEV__ = false
if (__DEV__) {
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
