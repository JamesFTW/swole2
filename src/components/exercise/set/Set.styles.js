import { StyleSheet } from 'react-native';
import { CONSTANTS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    bottom: 0,
  },
  flexContainer: {
    flexDirection: 'row',
    height: 44,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  indicator: {
    height: 21,
    width: 21,
    backgroundColor: '#FFFAFA',
    borderRadius: 10.5,
    borderColor: 'rgba(168, 181, 205, 0.3)',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center',
  },
  indicator_active: {
    height: 21,
    width: 21,
    backgroundColor: '#05B169',
    borderRadius: 10.5,
    borderColor: 'rgba(5, 177, 105, 1)',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  set: {
    ...CONSTANTS.regularText,
    lineHeight: 21,
    alignSelf: 'center'
  },
  moreOptions: {
    position: 'absolute',
    alignSelf: 'center',
    right: 0,
    marginRight: 20,
    height: 32
  }
})

export default styles