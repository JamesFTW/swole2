import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(52, 52, 52, 0.1)',
    backgroundColor: 'white',
    marginBottom: 12
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
    marginTop: 20
  },
  flexContainer: {
    flexDirection: 'row',
  },
  info: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
  },
  exerciseInfo: {
    marginTop: 6
  },
  exerciseName: {
    lineHeight: 20,
    bottom: 2,
    ...CONSTANTS.secondaryTitleText
  }
})

export default styles