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
    display: 'flex',
  },
  info: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
  },
  exerciseInfo: {
    flexDirection: 'column',
    paddingTop:20,
    paddingBottom: 20,
    paddingLeft: 16,
    overflow: 'hidden'
  },
  exerciseName: {
    lineHeight: 20,
    ...CONSTANTS.secondaryTitleText
  },
  exercise: {
    flexDirection: 'row',
    overflow: 'hidden'
  },
  setContainer: {
    height: 21, //might have to change this?
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
  },
  indicator: {
    height: 21,
    width: 21,
    backgroundColor: '#FFFAFA',
    borderRadius: 10.5,
    borderColor: 'rgba(168, 181, 205, 0.3)',
    borderWidth: 2,
  }
})

export default styles