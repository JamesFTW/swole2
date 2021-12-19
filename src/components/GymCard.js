import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { COLORS } from '../assets/colors'
import { getCONSTANTS } from '../constants'

import LocationIcon from '../assets/icons/location.svg'
import LinearGradient from 'react-native-linear-gradient'

function GymCard({
  gymName,
  gymLocation,
  textColor,
  image
}) {

  const CONSTANTS = getCONSTANTS(textColor)
  return (
    <View style={styles.container}>
      <View style={styles.secondaryShadow}>
        <View style={styles.cardContent}>
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.gymInfo}>
              <Text style={CONSTANTS.titleText}>{gymName}</Text>
              <View style={styles.location}>
                <LocationIcon style={styles.icon} width={10} height={13} fill={COLORS.white} />
                <Text style={CONSTANTS.regularText}>{gymLocation}</Text>
              </View>
            </View>
            <LinearGradient style={styles.gradient} colors={COLORS.black_gradient} />
          </ImageBackground>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 24
  },
  location: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  secondaryShadow: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardContent: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  gymInfo: {
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    marginLeft: 22,
    marginBottom: 22,
  },
  image: {
    flex: 1,
  },
  gradient: {
    height: '100%',
    width: '100%'
  },
  icon: {
    marginRight: 6
  }
})

export default GymCard;