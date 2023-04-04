import React from "react";
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { Action } from "../Action"
import { CenterDecorator } from '../../../../storybook/CenterDecorator'

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