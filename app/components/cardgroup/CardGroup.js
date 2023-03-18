
import * as React from 'react'
import styles from './CardGroup.styles'
import { View } from 'react-native';
import { ScrollContent } from '../scrollcontent'

// React props can be given a default value if none is provided

export function CardGroup({children}) {
	return (
    <ScrollContent>
        {children.map((card, i) => {
          return (
            <View style={styles.cardGroupChild} key={i}>
              { card }
            </View>
          )
        })}
    </ScrollContent>
	);
}
