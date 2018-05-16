import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {Image, View, Text} from 'react-native';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
        <Image style={{flex:1}} source={require('../assets/images/yPSSRz.gif')}/>
      </View>

    )
  }
}
