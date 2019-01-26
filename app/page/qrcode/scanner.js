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

import { SafeAreaView, } from 'react-navigation';
import Qrcode from './qrcode';



// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

let data = null;

state = {
  text: 'http://facebook.github.io/react-native/',
};
const data_Context = React.createContext(data);
export { data_Context }

export default class Scanner extends Component {

  constructor() {
    super();
    this.state = {
      url: 'http://facebook.github.io/react-native/',

    };
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

  onSuccess = async (e) => {
    // const data = e.data;
    data = e.data;
    this.setState.text = e.data;
    console.log('data', data);
    // Alert.alert('data', data);
    Alert.alert(
      'Alert Title',
      data,
      [
        { text: 'Ask me later', onPress: () => this.onClickAJumpToB() },
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.GC_data() },

      ],
      { cancelable: false }
    )
  }
  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }

  render() {
    return (

      <View style={styles.container}>
        {/* <View style={styles.container}>
              
              <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>{state.text}</Text> on your computer and scan the QR code.
          </Text>
              </View> */}

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
          reactivate={true}
          reactivateTimeout={1000}
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />

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