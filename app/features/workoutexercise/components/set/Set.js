import React from 'react'
import { TextInput, Pressable } from 'react-native'
import { FlexContainer } from '../../../../layout'
import { StatusIndicator } from '../../../../components'

import styles from './Set.styles'

export function Set({
  setNumber,
  reps,
  rpe,
  weight,
  onRepsChange,
  onRpeChange,
  onWeightChange,
  onSetCompletionChange,
  isCompletedSet,
  onLongPress,
}) {

  const handlePress = () => {
    textInputRef.current.focus()
  }

  const handleSetComplete = () => {
    onSetCompletionChange(!isCompletedSet)
  }

  const textInputRef = React.createRef()

  return (
    <Pressable onLongPress={onLongPress} onPress={handlePress}>
      <FlexContainer style={{ marginTop: 10 }} direction="row">
        <TextInput
          ref={textInputRef}
          style={styles.set_info}
          value={setNumber.toString()}
          editable={false}
        />
        <TextInput
          style={styles.set_info}
          value={reps}
          onChangeText={(value) => {
            if (onRepsChange) {
              onRepsChange(value)
            }
          }}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.set_info}
          value={rpe}
          onChangeText={(value) => {
            if (onRpeChange) {
              onRpeChange(value)
            }
          }}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.set_info}
          value={weight}
          onChangeText={(value) => {
            if (onWeightChange) {
              onWeightChange(value)
            }
          }}
          keyboardType="numeric"
        />
      <Pressable onPress={handleSetComplete}>
        <StatusIndicator
          isCompleted={isCompletedSet}
          onPress={() => onSetCompletionChange(setNumber)} // Pass the setNumber
        />
      </Pressable>
      </FlexContainer>
    </Pressable>
  )
}