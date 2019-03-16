import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  WebView,
  TextInput,
  AsyncStorage,
  Alert,
  Button,
  Linking,
  TouchableOpacity,

} from 'react-native';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator, withNavigation } from 'react-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-check-box'
import Btn_Login from './app/page/Login/Btn_Login';
import Btn_Phone from './app/page/Login/Btn_Phone';

import Login from './app/page/Login/Login';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
const captchaUrl = 'https://my-fuck-awesome-project.firebaseapp.com/phone-invisible.html'

export default class Login_index extends Component {

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+886',
      confirmResult: null,
      text: 'Useless Placeholder',
      name: 'aaaaa',
      phone: 'bbbbb',
      userToken: "778TIlaNHBcW1lwvk3dZ1HuTuPv1",

    };
  }

  handleClick = () => {
    Linking.openURL(captchaUrl).catch(err => console.error('An error occurred', err));
//////開Phone number authentication with invisible ReCaptcha

  };

  save() {
    //设置多项
    var keyValuePairs = [['userToken', this.state.userToken]]
    AsyncStorage.multiSet(keyValuePairs, function (errs) {
      if (errs) {
        //TODO：存储出错
        return;
      }
      console.warn('userToken保存成功!');
    });
  }

  clear() {
    var _that = this;
    AsyncStorage.clear(function (err) {
      if (!err) {
        _that.setState({
          name: "",
          phone: ""
        });
        alert('存储的数据已清除完毕!');
      }
    });
  }






  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  setStorage = async () => {
    try {
      await AsyncStorage.setItem('@Route:initialPage', 'login');
    } catch (error) {
      console.log(error);
    }
  }

  static navigationOptions = {
    // header: null,
    headerLayoutPreset: 'center',
    // headerTitleStyle: {
    //     textAlign: 'center',
    //     flexGrow:1,
    //     alignSelf:'center',
    // },
    headerStyle: {
      // paddingHorizontal: 8,
      backgroundColor: '#7094B1',

      // headerTitleStyle
      fontWeight: 'bold',

    },
    headerTintColor: '#fff',

    headerTitleStyle: { flex: 1, textAlign: 'center' },



    title: 'SRP',
    headerBackTitleVisible: false,
    headerBackTitle: null,
    headerTruncatedBackTitle: null,
    //  headerLeft: (  //定义导航栏右侧的按钮
    //     <Text >檢查我////, O(W)O</Text>
    //     ),

  }


  state = {
    key: '',
    value: '',
    data: '\n',
  }


  // save_token_code = () => {
  //   this.setState({
  //     token_code: this.props.navigation.state.params,
  //   }), console.warn("A", this.state.token_code);
  //   console.warn("B", this.props.navigation.state.params);
  // }




  render() {
    const { user, confirmResult } = this.state;
    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    // const {
    //   navigation: {
    //     state: {
    //       params: {
    //         token_code
    //       }
    //     }
    //   }
    // } = this.props;
    return (
      // <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?random&blur' }} />
        {/* <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?image=102&blur' }} /> */}
        <View style={styles.container}>
          {/* <Btn_Login/> */}
          <Text style={[styles.title, { fontSize: 90 }]}>司馬庫斯</Text>
          <Text style={[styles.title, { fontSize: 40 }]}>    </Text>
          <Text style={[styles.title, { fontSize: 40 }]}>資訊管理系統</Text>
          <Text style={[styles.title, { fontSize: 30 }]}>    </Text>
          {/* <Text style={[styles.title, { fontSize: 40}]}>Logo</Text> */}
        </View>
        {/* <Button
          title="handleClick"
          onPress={() => {
            this.handleClick();
          }} />

        <Login onPress={() => {
          this.save();
          pressStatus = 'pressin'
          this.setState({ pressStatus: 'pressin' });
          this._storeData();
          this.setStorage();
        }} /> */}

<Button
          title="新"
          onPress={() => {
            Linking.openURL("srpconsole://token/eBuvGEjNMUOo5RrhIs4XQx3hDte2").catch(err => console.error('An error occurred', err));

          }} />
        <Button
          title="新2"
          onPress={() => {
            this.save();
          }} />
          <Button
          title="新Ｄ"
          onPress={() => {
            this.clear();
          }} />
         

         
          {/* 
        <View style={styles.bottmContainer}>
        <Login/>
    
     

        </View> */}

<Btn_Phone/>


          < View style={styles.bottmContainer}>

          <Btn_Login />

      </View>


      </View >
      // </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#666',
    fontSize: 14,
  },

  bottmContainer: {
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginBottom: 30,

  },
  background: {
    height: 900,
    width: 600,
    position: 'absolute',

  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',

  },
  button3: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 30,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderTopWidth: 50,
    borderLeftColor: 'transparent',
    borderTopColor: 'red',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0)'

  },

  desc: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center'
  }
});



