import React, { Component } from 'react';
import { View, Text, Image, Button, Alert } from 'react-native';

class Player extends Component {
  render() {
    return (
        <Text>Name: {this.props.name} Goals: {this.props.goals}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    function onPressLearnMore() {
      Alert.alert('You tapped the button!');
    }

    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello World!</Text>

        <Image source={pic} style={{width: 193, height: 110}}/>

        <Player name='Messi' goals='56'/>
        <Player name='Ronaldo' goals='84'/>
        <Player name='Sunil Chettri' goals='56'/>

        <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}