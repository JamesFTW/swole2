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
    justifyContent: 'space-between',
    width: "89%"
  },
})

export default styles