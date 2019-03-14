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

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

//---------------------------------------------------------
export const host = "https://us-central1-my-fuck-awesome-project.cloudfunctions.net";


export default class info extends Component{
  render(){
     
   
      return(
          <View>
           <Text>{"I love to blink"}</Text>
              {/* <Blink text='I love to blink' />
              <Blink text='Yes blinking is so great' />
            
              <Blink text='Why did they ever take this out of HTML' />
              <Blink text='Look at me look at me look at me' /> */}
          </View>
      )
  }
}
