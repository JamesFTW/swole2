import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import BarBellIcon from '../../assets/icons/barbell.svg'
import LocationIcon from '../../assets/icons/location.svg'
import UserIcon from '../../assets/icons/user.svg'
import { COLORS } from '../../assets/colors'

//Still not sure if I should leave this in containers or move to layout
function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <LocationIcon style={styles.icon} fill={COLORS.black} />
        <BarBellIcon style={styles.icon} fill={COLORS.black} />
        <UserIcon style={styles.icon} fill={COLORS.black} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderStyle: 'solid',
    borderTopColor: 'rgba(0, 0, 0, .05)',
    borderTopWidth: 1,
    paddingTop: 25,
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  icon: {
    marginLeft: 20,
    marginRight: 20
  }
})

export default NavBar