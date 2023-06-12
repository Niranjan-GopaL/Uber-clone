import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

import HomeScreen from './src/screens/HomeScreen'




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