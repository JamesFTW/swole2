import { StyleSheet } from 'react-native';
import { CONSTANTS }  from '../../../constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'rgba(52, 52, 52, 0.1)',
  },
  content: {
    marginTop: 40,
    marginBottom: 12,
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