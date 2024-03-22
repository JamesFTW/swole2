import * as React from 'react'
import { View, Text, Pressable } from 'react-native'
import MoreOptions from '../../../assets/icons/moreoption.svg'
import CheckMark from '../../../assets/icons/checkmark.svg'
import styles from './Set.styles'


/**
 * Whatever the height of the sets are is what needs to be the shared value
 * 
 * set prop is not final.  rethink that.
 * */

function Set({
  set
}) {
  const [isActive, setActive] = React.useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Pressable onPress={() => setActive(!isActive)} style={{justifyContent: 'center'}} >
          <ActiveIndicator active={isActive} />
        </Pressable>
        <Text style={styles.set}>{ set }</Text>
        <MoreOptions height={4} width={16.55} style={styles.moreOptions} />
      </View>
    </View>
  )
}

//Might want to pull this out into it's own component
function ActiveIndicator({
  active
}) {
  if (active) {
    return (
      <>
        <View style={styles.indicator_active}>
          <CheckMark style={{alignSelf: 'center'}} />
        </View>
      </>
    )
  }
  return <View style={styles.indicator} />
}

export default Set