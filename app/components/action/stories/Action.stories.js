import React from "react";
import { storiesOf } from "@storybook/react-native"
import  { action } from "@storybook/addon-actions"
import { Action } from "../Action"
import { View } from 'react-native';

//react aria has usebutton hook for props

const CenterDecorator = storyFn => (
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


export default storiesOf('Action', module)
    .addDecorator(CenterDecorator)
    .add("Back", () => (
        <Action actionTitle="Back" onPress={action("tapped-default")} />
    ))
    .add("Shoulders", () => (
        <Action actionTitle="Shoulders" onPress={action("tapped-default")} />
    ))
    .add("Chest", () => (
        <Action actionTitle="Chest" onPress={action("tapped-default")} />
    ))
    .add("Legs", () => (
        <Action actionTitle="Legs" onPress={action("tapped-default")} />
    ))  