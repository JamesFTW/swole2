import styles from './Calendar.styles'
import React, { useMemo, useEffect, useState } from 'react'
import { Text, View, Pressable } from 'react-native'
import { Calendar as ReactNativeCalendars } from 'react-native-calendars'
import { COLORS, FONTS, LAYOUT } from '@constants'
import { FlexContainer } from '@layout'
import { getLocalDateString } from '@app/utils/dateTimeUtil'
import { StartNewWorkout as StartNewWorkoutIcon } from '@assets/icons'

const getCalendarTheme = () => ({
  'stylesheet.calendar.main': {
    container: { paddingLeft: LAYOUT.SPACING_NONE, paddingRight: LAYOUT.SPACING_NONE },
    monthView: { backgroundColor: COLORS.WHITE },
    week: {
      marginTop: LAYOUT.SPACING_XS_12,
      flexDirection: LAYOUT.FLEX_ROW,
      borderBottomWidth: LAYOUT.SPACING_NUDGE_XS,
      borderBottomColor: COLORS.CARD_BOARDER_COLOR,
    },
    day: {
      flex: LAYOUT.SPACING_NUDGE_XS,
      alignItems: LAYOUT.ALIGN_CENTER,
      justifyContent: LAYOUT.ALIGN_CENTER,
      marginVertical: LAYOUT.SPACING_XS_8,
    },
  },
  'stylesheet.calendar.header': {
    header: {
      backgroundColor: COLORS.BACKGROUND_COLOR,
      flexDirection: LAYOUT.FLEX_ROW,
      justifyContent: LAYOUT.SPACE_BETWEEN,
      alignItems: LAYOUT.ALIGN_CENTER,
      paddingLeft: LAYOUT.SPACING_NONE,
      paddingRight: LAYOUT.SPACING_NONE,
      borderBottomWidth: LAYOUT.SPACING_NUDGE_XS,
      borderBottomColor: COLORS.CARD_BOARDER_COLOR,
      width: '100%',
    },
    week: {
      backgroundColor: COLORS.PRIMARY_COLOR,
      flexDirection: LAYOUT.FLEX_ROW,
      justifyContent: LAYOUT.SPACE_BETWEEN,
      paddingVertical: LAYOUT.SPACING_XS_8,
      paddingLeft: LAYOUT.SPACING_XS_12,
      paddingRight: LAYOUT.SPACING_XS_12,
      marginLeft: LAYOUT.SPACING_NONE,
      marginRight: LAYOUT.SPACING_NONE,
    },
    dayHeader: {
      color: COLORS.WHITE,
      width: LAYOUT.SPACING_S_32,
      textAlign: LAYOUT.ALIGN_CENTER,
      paddingLeft: LAYOUT.SPACING_NONE,
      paddingRight: LAYOUT.SPACING_NONE,
    },
  },
  backgroundColor: COLORS.BACKGROUND_COLOR,
  calendarBackground: COLORS.BACKGROUND_COLOR,
  textMonthFontFamily: FONTS.SFPRO_HEAVY,
  textMonthFontSize: LAYOUT.SPACING_S_20,
  monthTextColor: COLORS.PRIMARY_COLOR,
  selectedDayBackgroundColor: COLORS.PRIMARY_COLOR,
  selectedDayTextColor: COLORS.WHITE,
  textDayFontSize: FONTS.SIZE_16,
  textDayFontFamily: FONTS.SFPRO_MEDIUM,
  textDayFontWeight: '500',
  textMonthFontSize: LAYOUT.SPACING_XS_16,
  textDayHeaderFontSize: LAYOUT.SPACING_XS_16,
  dayTextColor: COLORS.PRIMARY_COLOR,
  textDisabledColor: COLORS.SUBTITLE_GRAY,
})

const renderCalendarHeader = (onAddWorkoutPress, currentMonth) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return (
    <View style={styles.calendarHeaderContainer}>
      <FlexContainer
        direction={LAYOUT.FLEX_ROW}
        justifyContent={LAYOUT.SPACE_BETWEEN}
        alignItems={LAYOUT.ALIGN_CENTER}
        style={{ width: '100%' }}>
        <View style={{ flex: LAYOUT.SPACING_NUDGE_XS }} />
        <View style={{ flex: LAYOUT.SPACING_NUDGE_S, alignItems: LAYOUT.ALIGN_CENTER }}>
          <Text style={styles.calendarHeaderText}>{monthNames[currentMonth]}</Text>
        </View>
        <Pressable onPress={onAddWorkoutPress} style={{ flex: LAYOUT.SPACING_NUDGE_XS, alignItems: 'flex-end' }}>
          <StartNewWorkoutIcon style={{ marginRight: LAYOUT.SPACING_XS_16 }} />
        </Pressable>
      </FlexContainer>
    </View>
  )
}

const CustomDay = ({ date, state, marking, onPress }) => {
  const isSelected = marking?.selected
  const isToday = marking?.customStyles?.text?.color === COLORS.SUCCESS_GREEN

  return (
    <View style={[styles.dayContainer, state === 'disabled' && styles.disabledDay, isSelected && styles.selectedDay]}>
      <Text
        style={[
          styles.dayText,
          state === 'disabled' && styles.disabledDayText,
          isSelected && styles.selectedDayText,
          isToday && styles.todayText,
        ]}
        onPress={() => onPress(date)}>
        {date.day}
      </Text>
    </View>
  )
}

export const Calendar = ({ onDayPress, selectedDate, onAddWorkoutPress }) => {
  const [currentDate, setCurrentDate] = useState(getLocalDateString())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [displayedMonth, setDisplayedMonth] = useState(new Date().getMonth())

  useEffect(() => {
    const updateCurrentDateAndMonth = () => {
      const now = new Date()
      const newDate = getLocalDateString()
      const newMonth = now.getMonth()

      setCurrentDate(newDate)

      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth)
        setDisplayedMonth(newMonth) // Automatically switch to the new month
      }
    }

    // Initial update
    updateCurrentDateAndMonth()

    // Set up interval to update every minute
    const intervalId = setInterval(updateCurrentDateAndMonth, 60000)

    // Clean up interval on component unmount
    return () => clearInterval(intervalId)
  }, [currentMonth])

  const markedDates = useMemo(() => {
    return {
      [selectedDate]: { selected: true, selectedColor: COLORS.SUCCESS_BLUE },
      [currentDate]: {
        customStyles: {
          text: {
            color: COLORS.SUCCESS_GREEN,
            fontWeight: '900',
          },
        },
      },
    }
  }, [selectedDate, currentDate])

  return (
    <ReactNativeCalendars
      hideExtraDays
      enableSwipeMonths
      theme={getCalendarTheme()}
      onDayPress={onDayPress}
      headerStyle={styles.calendarHeaderStyle}
      dayHeaderStyle={styles.calendarDayHeaderStyle}
      hideArrows={true}
      renderHeader={() => renderCalendarHeader(onAddWorkoutPress, displayedMonth)}
      style={styles.calendar}
      markingType={'custom'}
      markedDates={markedDates}
      dayComponent={props => <CustomDay {...props} onPress={onDayPress} />}
      onMonthChange={month => {
        setDisplayedMonth(month.month - 1) // month is 1-indexed, so we subtract 1
      }}
      current={currentDate}
    />
  )
}
