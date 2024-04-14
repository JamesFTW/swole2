/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './app/index.js'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => App)

const func = bruh => {
  console.log(bruh)
  console.log('bruh')
}
