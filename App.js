import { StyleSheet, Text, View} from 'react-native'

import HomeScreen from './src/screens/HomeScreen'


const App = () => {
  return (

    // the styles is that const styles defiend below as StyleSheet.create({}) 
    <View >
      <HomeScreen />
      <Text>
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
        HIIIIIIIIIIIIIII
      </Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({

  container:{
    flex:1
  }

})