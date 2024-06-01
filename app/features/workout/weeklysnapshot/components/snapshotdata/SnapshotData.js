import styles from './SnapshotData.styles'
import React from 'react'
import { Text } from 'react-native'
import { FlexContainer } from '@layout'

export const SnapshotData = ({ data, style }) => (
  <FlexContainer style={[styles.flexContainer, style]} direction="column">
    <Text style={styles.titleText}>{data.title}</Text>
    <Text style={styles.info}>{data.info}</Text>
  </FlexContainer>
)
