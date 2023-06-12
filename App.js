import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

import HomeScreen from './src/screens/HomeScreen'
import { colors,styles } from './src/globals/styles'

const SCREEN_WIDTH = Dimensions.get("window").width



const App = () => {
  return (

    // the styles is that const styles defiend below as StyleSheet.create({}) 
    <View style={styles.container}>
      <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1
  }


})