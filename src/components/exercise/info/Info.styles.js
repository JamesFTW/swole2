import { StyleSheet } from 'react-native';
import { CONSTANTS }  from '../../../constants'

const styles = StyleSheet.create({
  count: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    lineHeight: 17,
    ...CONSTANTS.subTitle2,
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    paddingTop: 3,
    lineHeight: 14,
    ...CONSTANTS.subTitle,
  },
  exerciseStats: {
    textAlignVertical: 'bottom',
    flexDirection: 'row',
    height: 31,
    right: 4,
  },
  info: {
    flexDirection: 'column',
    width: 36,
    height: '100%',
    marginRight: 28,
  }
})

export default styles