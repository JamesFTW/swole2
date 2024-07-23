import { StyleSheet } from 'react-native'
import { COLORS, FONTS, LAYOUT } from '@constants'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  calendar: {
    width: '100%',
    paddingLeft: LAYOUT.SPACING_NONE,
    paddingRight: LAYOUT.SPACING_NONE,
    backgroundColor: COLORS.WHITE,
  },
  calendarHeaderContainer: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingTop: LAYOUT.SPACING_XS_8,
    paddingBottom: LAYOUT.SPACING_XS_8,
    marginBottom: LAYOUT.SPACING_XS_12,
    width: '100%',
  },
  calendarHeaderText: {
    fontFamily: FONTS.SFPRO_HEAVY,
    fontSize: LAYOUT.SPACING_S_20,
    color: COLORS.PRIMARY_COLOR,
    textAlign: 'center',
  },
  calendarHeaderStyle: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    paddingLeft: LAYOUT.SPACING_NONE,
    paddingRight: LAYOUT.SPACING_NONE,
  },
  calendarDayHeaderStyle: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    paddingLeft: LAYOUT.SPACING_NONE,
    paddingRight: LAYOUT.SPACING_NONE,
  },
  dayContainer: {
    width: LAYOUT.SPACING_S_32,
    height: LAYOUT.SPACING_S_32,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: LAYOUT.SPACING_XS_8,
  },
  dayText: {
    color: COLORS.PRIMARY_COLOR,
    fontSize: FONTS.SIZE_16,
    fontFamily: FONTS.SFPRO_MEDIUM,
  },
  disabledDay: {
    // Style for disabled days
  },
  disabledDayText: {
    color: COLORS.GRAY,
  },
  selectedDay: {
    backgroundColor: COLORS.SUCCESS_BLUE,
    borderRadius: LAYOUT.SPACING_XS_16,
  },
  selectedDayText: {
    fontSize: FONTS.SIZE_16,
    color: COLORS.WHITE,
  },
  todayText: {
    color: COLORS.SUCCESS_GREEN,
    fontWeight: '900',
  },
})
