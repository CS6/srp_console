import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  AsyncStorage,

  TextInput,
  Button
} from 'react-native';
import QRCode from 'react-native-qrcode';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator, withNavigation } from 'react-navigation';
import Home from '../home/otherpage';
import { ThemeProvider, ThemeContext } from './scanner';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

//---------------------------------------------------------


class Blink extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      showText: true,
      // my_Token: "Xa9qSXTuOzZjpynAYHVt46MRYlQ2",
      userToken:""

    };
    setInterval(() => {
      this.setState({ showText: !this.props.showText })//每个一秒，showText的值取反。原来的值是这样子获取this.state.showText
    }, 5000);
  }
 



  render() {
    let display = this.state.showText ? this.props.text : ' ';//三目运算，如果是true，显示四个组件的值，否则，显示空白
    var timeInMs = Date.now();
    var timeInDay = new Date();
    day = timeInDay.toUTCString();
    var code = timeInDay.toDateString();
    // var QR_bady = { "time": timeInMs, "userToken": this.state.userToken }

    return (
      <View>

        <View style={styles.container}>
          <QRCode
            // value={this.state.text}
            value={JSON.stringify({ "time": timeInMs, "userToken": this.state.userToken })}
            size={200}
            bgColor='black'
            fgColor='white' />
        </View>
        {/* <Text>{display}</Text> */}
        <View style={styles.container}>
          <Text>{day}</Text>
          <Text>{timeInMs}</Text>
          <Text>{code}</Text>
          <Text>{this.state.my_Token}</Text>
        </View>
      </View>


    )
  }
}
class BlinkQRcode extends Component {
  render() {


    return (
      <View>
        <Blink />
        {/* <Blink text='I love to blink' />
              <Blink text='Yes blinking is so great' />
            
              <Blink text='Why did they ever take this out of HTML' />
              <Blink text='Look at me look at me look at me' /> */}
      </View>
    )
  }
}
export default class qrcode extends Component {
  /*---------------------------------------------------
  每 15 秒刷新一次 state.timeLog
  拔掉測試介面
   // btoa(time.toDateString())
    "VHVlIE1hciAwNSAyMDE5"
    atob("VHVlIE1hciAwNSAyMDE5");
    "Tue Mar 05 2019"
    var Buffer = require('buffer').Buffer;
    new Buffer('Hello, world').toString('base64'); // "SGVsbG8sIHdvcmxk"
    new Buffer('SGVsbG8sIHdvcmxk', 'base64').toString(); // "Hello, world"
    new Buffer('中文').toString('base64'); // "5Lit5paH"
    new Buffer('5Lit5paH', 'base64').toString(); // "中文"
    
    

    
  */

 constructor(props) {
  super(props);
  // 初始状态
  this.state = {
    showText: true,
    // my_Token: "Xa9qSXTuOzZjpynAYHVt46MRYlQ2",
    userToken:""

  };
  setInterval(() => {
    this.setState({ showText: !this.state.showText })//每个一秒，showText的值取反。原来的值是这样子获取this.state.showText
  }, 1000);
}


  state = {
    text: 'http://facebook.github.io/react-native/',
    timeLog: "2018/13/14",
    userToken:"asdfghjk"
  };

  componentDidMount() {
    //检测网络是否连接

    this.getStorage().done();


  }


  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        console.warn(value);
        this.setState({ userToken: value });
        this.JSON_Post();
        console.warn('再次', await AsyncStorage.getItem('userToken'));
      }
    } catch (error) {
      console.log(error);
    }
  }

  get = async () => {
    AsyncStorage.getItem('userToken').then(userToken => this.setState({userToken}))
    console.warn(userToken);
        console.warn("OK");
  }

  render() {

    // var timeInMs = Date.now();
    // var timeInDay = new Date();
    let display = this.state.showText ? this.props.text : ' ';//三目运算，如果是true，显示四个组件的值，否则，显示空白
    var timeInMs = Date.now();
    var timeInDay = new Date();
    day = timeInDay.toUTCString();
    var code = timeInDay.toDateString();
    // var QR_bady = { "time": timeInMs, "userToken": this.state.userToken }


    return (
      <SafeAreaView style={styles.container}>


  
        {/* <Image style={styles.background}  source={require('../../img/bkimg/1x/G1.png')} /> */}
        <View style={styles.container}>
        {/* <Button
              title="新2"
              onPress={() => {
                // this._retrieveData();
                this.getStorage().done();
                // this.get();
              }}
            /> */}

{/* <Blink userToken={"this.state.userToken"} /> */}
    <View style={styles.container}>
          <QRCode
            // value={this.state.text}
            value={JSON.stringify({ "time": timeInMs, "userToken": this.state.userToken })}
            size={200}
            bgColor='black'
            fgColor='white' />
        </View>
        {/* <Text>{display}</Text> */}
        <View style={styles.container}>
          <Text>{day}</Text>
          <Text>{timeInMs}</Text>
          <Text>{code}</Text>
          <Text>{this.state.userToken}</Text>
        </View>
        {/* <BlinkQRcode /> */}
       
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
    backgroundColor: '#887992',
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