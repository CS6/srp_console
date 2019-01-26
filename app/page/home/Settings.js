import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TextInput,
    Button 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class Settings extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
      };
    
      render() {
        return (
            <SafeAreaView style={styles.container}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Settings!</Text>
              <Icon name="apple" size={30} color="#090" /> 
      
              <Text style={styles.instructions}>
              Settings
              </Text>
              <Icon name="rocket" size={30} color="#009" /> 
              
            </View>
            </SafeAreaView>
    
           
        );
      };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});