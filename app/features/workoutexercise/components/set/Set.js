import styles from './Set.styles'
import React, { useRef } from 'react'
import { TextInput, Pressable, View } from 'react-native'
import { FlexContainer } from '@layout'
import { StatusIndicator } from '@components'

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
  showStatusIndicators = true,
}) {
  const textInputRef = useRef(null)

  const handlePress = () => {
    textInputRef.current.focus()
  }

  const handleSetComplete = () => {
    onSetCompletionChange(!isCompletedSet)
  }

  return (
    <Pressable onLongPress={onLongPress} onPress={handlePress}>
      <FlexContainer style={styles.flex_container} direction="row">
        <TextInput ref={textInputRef} style={styles.set_info} value={setNumber.toString()} editable={false} />
        <TextInput style={styles.set_info} value={reps} onChangeText={onRepsChange} keyboardType="numeric" />
        <TextInput style={styles.set_info} value={rpe} onChangeText={onRpeChange} keyboardType="numeric" />
        <TextInput style={styles.set_info} value={weight} onChangeText={onWeightChange} keyboardType="numeric" />
      </FlexContainer>
      {showStatusIndicators && (
        <View style={styles.set_completed}>
          <Pressable onPress={handleSetComplete}>
            <StatusIndicator isCompleted={isCompletedSet} onPress={() => onSetCompletionChange(setNumber)} />
          </Pressable>
        </View>
      )}
    </Pressable>
  )
}
