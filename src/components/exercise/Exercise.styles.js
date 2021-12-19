
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
    //width of this will have to change to work with longer titles
    height: 60,
    width: 59,
    borderRadius: 10,
  },
  flexContainer: {
    paddingTop: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseInfo: {
    marginLeft: 12,
    width: '60%'
  },
  title: {
    ...CONSTANTS.secondaryTitleText
  }
})

export default styles