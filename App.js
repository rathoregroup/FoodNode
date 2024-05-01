import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import LandingPage from './src/Screens/LandingPage'
import SignInPage from './src/Screens/SignInPage'
import FeedScreen from './src/Screens/FeedScreen'
import MainPage from './src/Screens/MainPage'
import Navigation from './src/navigation'
const App = () => {
  return (
    <View style={styles.container}>
      {/* <LandingPage /> */}
      {/* <FeedScreen /> */}
      {/* <SignInPage /> */}
      {/* <MainPage/> */}
      <Navigation />
      <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
})

export default App