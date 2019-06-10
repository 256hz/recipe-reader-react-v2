import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import styles from './styles/styles.js'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }
  
  submitSearch = () => {
    this.props.navigation.navigate('Search')
  }

  render() {
    const { navigation } = this.props
    let text = navigation.getParam('text', 'nothing')
    return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.titleText}>Searching for {text} </Text>
          </View>
          <View>
            <Button
              onPress={this.submitSearch}
              title={"Back"}
              color={"#7caa2d"}
              width={10}
              accessibilityLabel="Back"
            />
          </View>
      </View>
    );
  }
}

