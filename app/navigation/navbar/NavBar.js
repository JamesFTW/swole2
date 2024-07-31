import * as React from 'react'
import { View, Pressable } from 'react-native'
import { NavLocationScreenRoute } from '@screens/navlocationscreen/NavLocationScreen'
import { Profile, Dumbell, Calendar, NavLocation } from '@assets/icons'
import { FlexContainer } from '@layout'
import { ProfileScreenStackRoute } from '@screens/profilescreen'
import { WorkoutScreenStackRoute } from '@screens/workoutscreen/'
import { CalendarScreenStackRoute } from '@screens/calendarscreen'
import styles from './NavBar.styles'

export function NavBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.navBar_container}>
      <FlexContainer style={styles.navBar_icon_container} marginTop={20} direction="row">
        {state.routes.map((route, index) => {
          const getIcon = () => {
            switch (route.name) {
              case ProfileScreenStackRoute:
                return <Profile isFocused={isFocused} />
              case WorkoutScreenStackRoute:
                return <Dumbell isFocused={isFocused} />
              case CalendarScreenStackRoute:
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
            <Pressable
              hitSlop={20}
              style={styles.nav_Icon}
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}>
              {getIcon()}
            </Pressable>
          )
        })}
      </FlexContainer>
    </View>
  )
}
