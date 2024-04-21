import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { NavLocationScreenRoute } from '../../screens/navlocationscreen/NavLocationScreen'
import { CalendarScreenRoute } from '../../screens/calendarscreen/CalendarScreen'
import { Profile, Dumbell, Calendar, NavLocation } from '../../assets/icons'
import { FlexContainer } from '../../layout'
import { ProfileScreenStackRoute } from '../../screens/profilescreen'
import { WorkoutScreenStackRoute } from '../../screens/workoutscreen/'
import styles from './NavBar.styles'

export function NavBar({ state, descriptors, navigation, isDrawerOpen }) {
  return (
    <View style={styles.navBar_container}>
      <FlexContainer
        style={styles.navBar_icon_container}
        marginTop={20}
        direction="row">
        {state.routes.map((route, index) => {
          const getIcon = () => {
            switch (route.name) {
              case ProfileScreenStackRoute:
                return <Profile isFocused={isFocused} />
              case WorkoutScreenStackRoute:
                return <Dumbell isFocused={isFocused} />
              case CalendarScreenRoute:
                return <Calendar isFocused={isFocused} />
              case NavLocationScreenRoute:
                return <NavLocation isFocused={isFocused} />
            }
          }

          const { options } = descriptors[route.key]

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}>
              {getIcon()}
            </TouchableOpacity>
          )
        })}
      </FlexContainer>
    </View>
  )
}
