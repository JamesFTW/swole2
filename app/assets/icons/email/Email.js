import React from "react"
import { StyleSheet } from 'react-native'
import { LAYOUT } from '../../../constants'
import EmailSVG from '../../../assets/icons/email/email.svg'

export const EmailIcon = () => {
  return (
    <EmailSVG style={styles.email_icon} />
  )
}

const styles = StyleSheet.create({
  email_icon: {
    marginLeft: LAYOUT.SPACING_XS_16
  }
});