import { StyleSheet } from 'react-native';
import { CONSTANTS }  from '../../../constants'

const styles = StyleSheet.create({
  count: {
    textAlign: 'center',
    ...CONSTANTS.subTitle2,
  },
  title: {
    textAlign: 'center',
    ...CONSTANTS.subTitle
  },
  exerciseStats: {
    flexDirection: 'row',
  },
  info: {
    width: 32,
    marginRight: 20
  }
})

export default styles