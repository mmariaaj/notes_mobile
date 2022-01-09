import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      noteInput: '',
      notes: [
        {id: 1, title: 'Note 1'},
        {id: 2, title: 'Note 2'},
        {id: 3, title: 'Note 3'},
        {id: 4, title: 'Note 4'},
        {id: 5, title: 'Note 5'},
        {id: 6, title: 'Note 6'},
        {id: 7, title: 'Note 7'},
        {id: 8, title: 'Note 8'},
        {id: 9, title: 'Note 9'},
        {id: 10, title: 'Note 10'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
});
