import { StyleSheet } from 'react-native'
import { LAYOUT } from '@constants'

const styles = StyleSheet.create({
  card: {
    overflow: LAYOUT.OVERFLOW_HIDDEN,
    alignSelf: LAYOUT.ALIGN_STRETCH,
  },
  content: {
    flexDirection: LAYOUT.FLEX_COLUMN,
  },
})

export default styles
