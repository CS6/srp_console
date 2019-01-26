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
import QRCode from 'react-native-qrcode';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class qrcode extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
      };
    
      render() {
        return (
          <SafeAreaView style={styles.container}>
    
          <View style={styles.container}>
    
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            <QRCode
              value={this.state.text}
              size={200}
              bgColor='purple'
              fgColor='white'/>
               <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('index')}/>
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