import React from "react"
import { StyleSheet } from 'react-native'
import { storiesOf } from "@storybook/react-native"
import { action } from "@storybook/addon-actions"
import { Button } from "../Button"
import { LAYOUT } from '../../../constants'
import EmailIcon from '../../../assets/icons/email.svg'

//react aria has usebutton hook for props

export default storiesOf('Button', module)
  .add("outline", () => (
    <Button outline
      icon={<EmailIcon style={styles.email_icon} />}
      title="Sign Up with Email"
      onPress={action("tapped-default")}
    />
  ))
  .add("default", () => (
    <Button
      icon={<EmailIcon style={styles.email_icon} />}
      title="Submit"
      onPress={action("tapped-default")}
    />
  ))


const styles = StyleSheet.create({
  email_icon: {
    marginLeft: LAYOUT.SPACING_XS_16
  }
});