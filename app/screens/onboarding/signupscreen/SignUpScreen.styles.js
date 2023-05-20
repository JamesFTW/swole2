import { StyleSheet } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  signUpScreenContent: {
    paddingLeft: LAYOUT.SPACING_S_24,
    paddingRight: LAYOUT.SPACING_S_24,
  },
  title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_24,
    color: COLORS.PRIMARY_COLOR,
    marginTop: LAYOUT.SPACING_S_28
  },
  backButton: {
    fontSize: FONTS.SIZE_14,
    fontFamily: FONTS.SFPRO_MEDIUM,
    color: COLORS.ALERT_COLOR,
    letterSpacing: 0.125,
  },
  passwordRequirementText: {
    marginTop: LAYOUT.SPACING_XS_16,
    marginBottom: 112,
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_10,
    color: COLORS.SECONDARY_COLOR,
  },
  content: {
    height: '100%',
    marginTop: LAYOUT.SPACING_MD_40
  }
})

export default styles