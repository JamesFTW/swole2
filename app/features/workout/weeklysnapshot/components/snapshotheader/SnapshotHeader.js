import styles from './SnapshotHeader.styles'
import React from 'react'
import { Text, Pressable } from 'react-native'
import { FlexContainer } from '@layout'

export const SnapshotHeader = () => (
  <FlexContainer style={styles.flexContainer} direction="row">
    <Text style={styles.snapshotTitle}>Your Weekly Snapshot</Text>
    <Pressable onPress={() => console.log('bruh')}>
      <Text style={styles.seeMoreButton}>See more</Text>
    </Pressable>
  </FlexContainer>
)
