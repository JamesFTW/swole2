
import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 99,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    top: 40,
    backgroundColor: 'yellow'
  },
  photo: {
    height: 60,
    width: 59,
    borderRadius: 10,
  },
  flexContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseInfo: {
    marginLeft: 16,
  },
  title: {
    ...CONSTANTS.secondaryTitleText
  }
})

export default styles