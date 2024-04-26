import { StyleSheet, Dimensions } from 'react-native'
import { FONTS, COLORS } from '@constants'

const profileImageHeight = Dimensions.get('window').height / 2

const styles = StyleSheet.create({
  profile_image: {
    width: null,
    height: profileImageHeight,
  },
  profile_name: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: FONTS.SIZE_24,
    letterSpacing: -0.02,
    marginLeft: 16,
  },
  bio: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: -0.02,
    marginLeft: 20,
    marginRight: 15,
    marginBottom: 12,
    lineHeight: 21,
  },
  profile_location: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_14,
    letterSpacing: -0.02,
    marginLeft: 8,
    bottom: 2,
  },
  edit_button_text: {
    color: COLORS.PRIMARY_COLOR,
    fontFamily: FONTS.SFPRO_REGULAR,
    fontSize: FONTS.SIZE_10,
    letterSpacing: 0.015,
    alignSelf: 'center',
    marginLeft: 3,
  },
  edit_button: {
    backgroundColor: COLORS.WHITE,
    width: 118,
    height: 28,
    borderRadius: 5,
    borderColor: COLORS.CARD_BOARDER_COLOR,
    borderWidth: 1,
    position: 'absolute',
    right: 0,
    marginTop: 33,
    marginRight: 16,
    zIndex: 10,
  },
  pencil_icon: {
    height: 28,
    width: 28,
    top: 2,
  },
})

export default styles
