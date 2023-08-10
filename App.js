import { StyleSheet, View} from 'react-native'

import HomeScreen from './src/screens/HomeScreen'


export const App = () => {
  return (

    // the styles is that const styles defiend below as StyleSheet.create({}) 
    <View >
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