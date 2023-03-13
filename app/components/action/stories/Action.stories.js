import React from "react";
import { storiesOf } from "@storybook/react-native"
import  { action } from "@storybook/addon-actions"
import { Action } from "../Action"

//react aria has usebutton hook for props

export default storiesOf('Action', module)
    .add("default", () => (
        <Action onPress={action("tapped-default")}>Press Me</Action>
    ))  