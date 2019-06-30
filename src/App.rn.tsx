import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

import { Button } from './Button.rn'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginBottom: 10,
    textAlign: 'center',
  },
})

export class App extends React.PureComponent<{}, { count: number }> {
  state = {
    count: 0,
  }
  onButtonPress = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.text}>Press count: {this.state.count}</Text>
          <Button onPress={this.onButtonPress}>Hello, React Native!</Button>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
