import React from "react";
import { View } from 'react-native'

export const CenterDecorator = storyFn => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }}>
    {
      storyFn()
    }
  </View>
);