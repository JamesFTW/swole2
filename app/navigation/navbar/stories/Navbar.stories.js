import React from "react"
import { StyleSheet } from 'react-native'
import { storiesOf } from "@storybook/react-native"
import { Navbar } from "../Navbar"

export default storiesOf('Navbar', module)
  .add("default", () => (
    <Navbar/>
  ))
