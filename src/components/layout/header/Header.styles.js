import { StyleSheet } from 'react-native';
import { CONSTANTS }  from '../../../constants'

const styles = StyleSheet.create({
  container: {
    height: 137,
    backgroundColor: 'white'
  },
  content: {
    marginTop: 80,
    marginLeft: 16
  },
  flexContent: {

  },
  workoutDate: {
    marginTop: 8,
    ...CONSTANTS.regularAccentTitle
  },
  workoutTitle: {
    lineHeight: 24,
    ...CONSTANTS.titleTextDark
  }
})

export default styles