
import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(52, 52, 52, 0.1)',
    backgroundColor: 'white'
  },
  rightArrow:{
    position: 'absolute',
    right:0,
    marginRight: 12,
    marginTop: 42
  },
  photo: {
    height: 60,
    width: 59,
    marginLeft: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  info: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    height: 99,
  },
  exerciseInfo: {
    marginTop: 6
  },
  title: {
    lineHeight: 24,
    ...CONSTANTS.secondaryTitleText
  }
})

export default styles