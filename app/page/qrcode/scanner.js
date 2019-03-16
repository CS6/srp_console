import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
  Button,
  Alert
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { SafeAreaView, withNavigationFocus, NavigationEvents, NavigationScreenProps } from 'react-navigation';
import Qrcode from './qrcode';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

let data = null;

state = {
  text: 'http://facebook.github.io/react-native/',
};
const data_Context = React.createContext(data);
export { data_Context }

export const ThemeContext = React.createContext('light');

// export const ThemeContext = React.createContext(state.text);

// export const {Provider, Consumer} = createContext(defaultData);


export default class Scanner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userToken: "A",
      camera: false,
      A: false,
      camera_state: true,
      myName:null
      // camera_state: false,



    };
  }
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
  componentWillReceiveProps(nextProps) {
    this.setState({
      camera: nextProps.camera,
      // camera_state: nextProps.camera_state,
    });
  }
  // onSuccess(e) {
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => console.error('An error occured', err));
  // }
  GC_data() {
    // const data = null;
    console.log('data', data);
    Alert.alert('data', data);

  }

  onClickAJumpToB() {
    this.props.navigator.push({
      title: 'Qrcode',
      component: Qrcode,
      passProps: {
        // 传递的props命名，看你心情（如下：bReceive）
        // 传递的data类型，看你需求
        bReceive: 'data - trans to B',
        bReceive2: [object],

      }
    }
    );
  }
  //==========================
  // ToDO 
  // 加上ＱＲcode 解析
  // 向APi請求簽到
  //==========================

  onSuccess = async (e) => {
    // const data = e.data;
    data = e.data;
    var Data_Array = JSON.parse(data)
    this.setState.text = '"' + e.data + '"';
    console.log('data', data);
    // Alert.alert('data', data);
    console.warn(Data_Array.userToken);
    Alert.alert(
      // 'Alert Title',
      JSON.stringify(Data_Array.userToken),
      data,
      [
        {
          text: 'Ask me later', onPress: () => {
            url = data.userToken;
            this.setState({ url: url })
          }
        },
        {
          text: '我還不想簽到', onPress: () => {
            this.forceUpdate();
            console.warn("cancel")
          }, style: 'cancel'
        },
        // { text: 'OK', onPress: () => this.GC_data() },
        { text: '簽到去～', onPress: () => this.JSON_Post(Data_Array.userToken)},
        // { text: '簽到去～', onPress: () => this.JSON_Post(Data_Array.userToken).this.setState({ camera_state: true }) },


      ],
      { cancelable: false }
    )
  }



  JSON_Post = (byToken) => {
    let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/punch';
    fetch(url, {
      method: 'POST',
      // headers 加入 json 格式
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({



        "employer": this.state.userToken,
        "employee": byToken,



      })
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.warn(jsonData);
    }).catch((err) => {
      console.warn('錯誤:', err);
    })
  }

  testFun() {
    this.state.myName = '组件被刷新了';
  }
  testForceFun() {
    this.forceUpdate();
  }
  renderCamera() {

    if (this.state.A = false) {
      return (
        <View>
          <Text>HI</Text>
        </View>
      );
    } else if (this.state.A = true) {
      return (
        <QRCodeScanner
          // onRead={this.onSuccess.bind(this)}
          // topContent={
          //   <Text style={styles.centerText}>
          //     Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          //   </Text>
          // }
          // cameraStyle={{height: height/2}}
          onRead={this.onSuccess}
          topContent={null}
          reactivate={this.state.camera_state}
          //reactivate={false}


          /////////切換頁面時要關閉/開啟
          reactivateTimeout={1500}
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable} onPress={() => {
              this.setState({ camera_state: !this.state.camera_state })
              this.testForceFun.bind(this)
            }} >
              <Text style={styles.buttonText}>{this.state.camera_state}</Text>
              {/* <Text style={styles.buttonText}>{this.props.camera}</Text> */}
              {/* <Text style={styles.buttonText}>OK. Got it!</Text> */}
            </TouchableOpacity>
          }
        />)
    }
  }
  testFun() {
    this.state.myName = '组件被刷新了';
  }
  testForceFun() {
    this.forceUpdate();
  }


  render() {
    console.warn('scanner', this.state.camera_state);
    return (

      <View style={styles.container}>
        {/* <View style={styles.container}>
              
              <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>{state.text}</Text> on your computer and scan the QR code.
          </Text>
              </View> */}

        {/* <TouchableOpacity style={styles.buttonTouchable}
          onPress={this.testFun.bind(this)}>
          <Text style={styles.buttonText}>{"OK. Got it!"+this.state.myName}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTouchable}
          onPress={this.testForceFun.bind(this)} >
          <Text style={styles.buttonText}>{"OK.  it!"+this.state.myName}</Text>
        </TouchableOpacity> */}

{/* 

        <Button
          title="send url"
          onPress={() => {
            url = data;
            this.setState({ url: url })
          }}
        /> */}

        {this.renderCamera()}


      </View>


    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }, centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});