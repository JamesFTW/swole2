import React, { useRef } from 'react'
import { TextInput, Pressable, View } from 'react-native'
import { FlexContainer } from '@layout'
import { StatusIndicator } from '@components'

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
  showStatusIndicators = true,
  style,
}) {
  const textInputRef = useRef(null)

  const handlePress = () => {
    textInputRef.current.focus()
  }

  const handleSetComplete = () => {
    onSetCompletionChange(!isCompletedSet)
  }

  return (
    <Pressable onLongPress={onLongPress} onPress={handlePress} style={[{ width: '100%', position: 'relative' }, style]}>
      <FlexContainer style={{ marginTop: 10, width: '100%' }} direction="row">
        <TextInput
          ref={textInputRef}
          style={[styles.set_info, { flex: 1 }]}
          value={setNumber.toString()}
          editable={false}
        />
        <TextInput
          style={[styles.set_info, { flex: 1 }]}
          value={reps}
          onChangeText={onRepsChange}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.set_info, { flex: 1 }]}
          value={rpe}
          onChangeText={onRpeChange}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.set_info, { flex: 1 }]}
          value={weight}
          onChangeText={onWeightChange}
          keyboardType="numeric"
        />
      </FlexContainer>
      {showStatusIndicators && (
        <View
          style={{
            position: 'absolute',
            marginTop: 9,
            right: 20, // Adjust this value as needed to position the indicator correctly
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            zIndex: 1,
          }}>
          <Pressable onPress={handleSetComplete}>
            <StatusIndicator isCompleted={isCompletedSet} onPress={() => onSetCompletionChange(setNumber)} />
          </Pressable>
        </View>
      )}
    </Pressable>
  )
}
