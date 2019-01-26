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
import {ThemeProvider,ThemeContext} from './scanner';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

//---------------------------------------------------------
class RN1 extends Component {
  //
  constructor(props) {
    super(props);  
    this.state= { cnt: 0 };
    global.counter = 0;
    //-------------------------------------
    // 宣告定義全域變數來進行計數加 1 動作
    //-------------------------------------
  }
  //-------------------------------------------------------
  render() {
    //-----------------------------------------------------
    //
    return (
      <View style={{flex:1}}>
        <Text style={styles.text}>{this.state.cnt}</Text>
        <Button
          title="計數"
          onPress={ ()=> {
            counter++;
            this.setState({cnt: counter})
          }}
        />
      </View>
      //---------------------------------------------------
      // 不要直接變更 this.state.cnt 的狀態值，若要異動 state
      // 的內容，請使用setState()，每次調用setState時都會更新
      // 元件的狀態，觸發 render方法重新渲染界面。
      // 也因為此，Text元件的標題內容要設定為{this.state.cnt}
      //---------------------------------------------------
    );
  }
}
class URL extends Component {
  //
  constructor(props) {
    super(props);  
    this.state= { cnt: 0 ,url: " ",};
    global.counter = 0;
    global.url = 'http://facebook.github.io/react-native/';

    //-------------------------------------
    // 宣告定義全域變數來進行計數加 1 動作
    //-------------------------------------
  }

  //-------------------------------------------------------
  render() {
    //-----------------------------------------------------
    //
    return (
      <View style={{flex:1}} >
        <Text style={styles.text}>{this.state.url}</Text>
        <Button
          title= {"顯示網址:"+this.state.url}
          onPress={ ()=> {
            this.setState({url: url})
          }}
        />
      </View>
      //---------------------------------------------------
      // 不要直接變更 this.state.cnt 的狀態值，若要異動 state
      // 的內容，請使用setState()，每次調用setState時都會更新
      // 元件的狀態，觸發 render方法重新渲染界面。
      // 也因為此，Text元件的標題內容要設定為{this.state.cnt}
      //---------------------------------------------------
    );
  }
}
export default class qrcode extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
      };
    
      render() {
        return (
          <SafeAreaView style={styles.container}>
    
            {/* <Image style={styles.background}  source={require('../../img/bkimg/1x/G1.png')} /> */}
          <View style={styles.container}>
<RN1></RN1>
<URL></URL>
<Button
          title="計數"
          onPress={ ()=> {
            counter++;
            this.setState({cnt: counter})
          }}
        />
<Text>sdsds</Text>
            <TextInput
            placeholder="input"
              style={styles.input}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
            {/* <QRCode
              value={this.state.text}
              size={200}
              bgColor='black'
              fgColor='white'/>
               <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}/> */}
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