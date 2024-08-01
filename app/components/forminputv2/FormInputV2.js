import styles from './FormInputV2.styles'
import React, { useState, useRef } from 'react'
import { View, Text, TextInput, Pressable } from 'react-native'
import { Controller } from 'react-hook-form'

export function FormInputV2({
  name,
  control,
  rules,
  title,
  placeholder,
  secureTextEntry,
  textContentType,
  style,
  borderOverride,
  textStyleOverride,
  textStyles,
  borderStyles,
  inputFontFamily,
  inputFontSize,
  placeholderFontFamily,
  placeholderFontSize,
  placeholderColor,
}) {
  //TODO: Might want to use this later
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)

  const containerStyle = [styles.container, style]

  const formInputStyle = borderOverride ? [styles.formInput, borderStyles] : styles.formInput

  const titleStyle = textStyleOverride ? [styles.title, textStyles] : styles.title

  const inputStyle = [
    styles.textInput,
    {
      fontFamily: inputFontFamily,
      fontSize: inputFontSize,
    },
  ]

  const placeholderStyle = [
    styles.placeholder,
    {
      fontFamily: placeholderFontFamily,
      fontSize: placeholderFontSize,
      color: placeholderColor || '#999',
    },
  ]

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={containerStyle}>
          <View style={formInputStyle}>
            {title && <Text style={titleStyle}>{title}</Text>}
            <Pressable onPress={() => inputRef.current.focus()}>
              <View style={styles.inputContainer}>
                <TextInput
                  ref={inputRef}
                  style={inputStyle}
                  onChangeText={onChange}
                  onBlur={() => {
                    onBlur()
                    setIsFocused(false)
                  }}
                  onFocus={() => setIsFocused(true)}
                  value={value}
                  secureTextEntry={secureTextEntry}
                  textContentType={textContentType}
                />
                {!value && (
                  <View style={styles.placeholderContainer}>
                    <Text style={placeholderStyle}>{placeholder}</Text>
                  </View>
                )}
              </View>
            </Pressable>
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        </View>
      )}
    />
  )
}
