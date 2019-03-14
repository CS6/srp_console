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
import { createBottomTabNavigator, SafeAreaView, createStackNavigator, withNavigation } from 'react-navigation';
import Home from '../home/otherpage';
import { ThemeProvider, ThemeContext } from './scanner';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

//---------------------------------------------------------
class RN1 extends Component {
  //
  constructor(props) {
    super(props);
    this.state = { cnt: 0 };
    global.counter = 0;
    // my_Token =null;

    //-------------------------------------
    // 宣告定義全域變數來進行計數加 1 動作
    //-------------------------------------
  }
  //-------------------------------------------------------
  render() {
    //-----------------------------------------------------
    //
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>{this.state.cnt}</Text>
        <Button
          title="計數"
          onPress={() => {
            counter++;
            this.setState({ cnt: counter })
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
    this.state = { cnt: 0, url: " ", };
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
      <View style={{
        flex: 1, backgroundColor: 'white',
      }} >
        <Text style={styles.text}>{this.state.url}</Text>
        <Button
          title={"顯示網址:" + this.state.url}
          onPress={() => {
            this.setState({ url: url })
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

class Blink extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      showText: true,
      my_Token: "Xa9qSXTuOzZjpynAYHVt46MRYlQ2",

    };
    setInterval(() => {
      this.setState({ showText: !this.state.showText })//每个一秒，showText的值取反。原来的值是这样子获取this.state.showText
    }, 5000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';//三目运算，如果是true，显示四个组件的值，否则，显示空白
    var timeInMs = Date.now();
    var timeInDay = new Date();
    day = timeInDay.toUTCString();
    var code = timeInDay.toDateString();
    var QR_bady = { "time": timeInMs, "userToken": this.state.my_Token }

    return (
      <View>

        <View style={styles.container}>

          <QRCode
            // value={this.state.text}
            value={JSON.stringify(QR_bady)}
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
  state = {
    text: 'http://facebook.github.io/react-native/',
    timeLog: "2018/13/14",
  };


  render() {

    var timeInMs = Date.now();
    var timeInDay = new Date();


    return (
      <SafeAreaView style={styles.container}>

        {/* <RN1></RN1>
<URL></URL>
<Button
          title="計數"
          onPress={ ()=> {
            counter++;
            this.setState({cnt: counter})
          }}
        />
<Text>sdsds</Text> 
 */}

        <BlinkQRcode />
        {/* <Image style={styles.background}  source={require('../../img/bkimg/1x/G1.png')} /> */}
        <View style={styles.container}>

          {/*
            /// TextInput改變qrcode 
            <TextInput
            placeholder="input"
              style={styles.input}
              onChangeText={(text) => this.setState({text: text})}
              value={this.state.text}
            />
          
            <Text>{timeInDay+timeInMs}</Text>
            <QRCode
              // value={this.state.text}
              value={this.state.timeLog}

              size={200}
              bgColor='black'
              fgColor='white'/> */}
          {/* <Button
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