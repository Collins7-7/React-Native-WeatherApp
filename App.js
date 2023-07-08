import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/components/screens/CurrentWeather'
import UpcomingWeather from './src/components/screens/UpcomingWeather'
import City from './src/components/screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
