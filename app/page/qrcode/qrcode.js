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
import { createBottomTabNavigator, SafeAreaView, createStackNavigator,withNavigation } from 'react-navigation';
import Home from '../home/otherpage';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class qrcode extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
      };
    
      render() {
        return (
          <SafeAreaView style={styles.container}>
    
            {/* <Image style={styles.background}  source={require('../../img/bkimg/1x/G1.png')} /> */}
          <View style={styles.container}>
    
            <TextInput
            placeholder="input"
              style={styles.input}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            <QRCode
              value={this.state.text}
              size={200}
              bgColor='black'
              fgColor='white'/>
               <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}/>
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
    backgroundColor: 'white',
  },
  input: {
    backgroundColor:'#887992',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  
  background: {
    height: 1000,
    width: 600,
    position: 'absolute',
    
  },
});