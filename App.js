import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

import HomeScreen from './src/screens/HomeScreen'
import { colors } from './src/globals/styles'

const SCREEN_WIDTH = Dimensions.get("window").width



const App = () => {
  return (
    <View>
      <Text> Hello world !!!! </Text>
      <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({




})