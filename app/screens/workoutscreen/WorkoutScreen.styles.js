import { StyleSheet } from 'react-native'
import { LAYOUT } from '@constants'

const styles = HEADER_MAX_HEIGHT =>
  StyleSheet.create({
    container: {
      flex: LAYOUT.SPACING_NUDGE_XS,
    },
    header: {
      position: LAYOUT.POSITION_ABSOLUTE,
      top: LAYOUT.SPACING_NONE,
      left: LAYOUT.SPACING_NONE,
      right: LAYOUT.SPACING_NONE,
      overflow: LAYOUT.OVERFLOW_HIDDEN,
      zIndex: LAYOUT.SPACING_NUDGE_XS,
      marginTop: HEADER_MAX_HEIGHT,
    },
    scrollContent: {
      flex: LAYOUT.SPACING_NUDGE_XS,
    },
    scrollContentContainer: {
      paddingTop: HEADER_MAX_HEIGHT,
    },
  })

export default styles
