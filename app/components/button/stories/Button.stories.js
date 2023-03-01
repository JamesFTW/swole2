import React from "react";
import { storiesOf } from "@storybook/react-native"
import  { action } from "@storybook/addon-actions"
import { Button } from "../Button"

//react aria has usebutton hook for props

export default storiesOf('Button', module)
    .add("default", () => (
        <Button onPress={action("tapped-default")}>Press Me</Button>
    ))  