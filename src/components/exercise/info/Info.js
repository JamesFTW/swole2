import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './Info.styles';

function Info({
  count,
  title,
}) {
  return (
    <View style={styles.info}>
        <Text style={styles.count}>{count}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

function ExerciseInfo({
  repCount,
  setCount,
  rpeCount,
  weightCount,
}) {
  return (
    <View style={styles.exerciseStats}>
      <Info count={setCount} title='sets'/>
      <Info count={repCount} title='reps'/>
      <Info count={rpeCount} title='rpe'/>
      <Info count={weightCount} title='lbs'/>
    </View>
  )
}

export default ExerciseInfo