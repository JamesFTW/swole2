import { StyleSheet } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '../../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userDetailsContent: {
    paddingLeft: LAYOUT.SPACING_S_24,
    paddingRight: LAYOUT.SPACING_S_24,
  },
  title: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_24,
    color: COLORS.PRIMARY_COLOR,
    marginTop: LAYOUT.SPACING_S_28
  },
  subTitle: {
    fontFamily: FONTS.SFPRO_MEDIUM,
    fontSize: FONTS.SIZE_14,
    marginTop: LAYOUT.SPACING_XS_12,
    color: COLORS.PRIMARY_COLOR,
    letterSpacing: .1
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