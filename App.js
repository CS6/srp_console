/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  AsyncStorage,
  TouchableOpacity,
  Linking,
} from 'react-native';


import firebase from 'firebase/app'
import 'firebase/auth'
import Btn_setup from './app/page/Login/Btn_setup';
import Btn_Login from './app/page/Login/Btn_Login';


import { createBottomTabNavigator, SafeAreaView, createSwitchNavigator, createStackNavigator, withNavigation } from 'react-navigation';

// import Mian from './mian_vue';
import Mian from './app/index';

import Setup from './app/page/registered/Setup';

import QRvue from './app/page/qrcode/QRvue';
import Btn_Qrcode from './app/page/home/Btn_Qrcode';
import Btn_Search from './app/page/home/Btn_Search';
import Btn_Remind from './app/page/home/Btn_Remind';

import Login_index from './Login_index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or59487 shake for dev menu',
  android:
    'Double tap R on your keyboard 9487to reload,\n' +
    'Shake or press menu button for dev menu',
});
const { width, height } = Dimensions.get('window');
const o_captchaUrl = "https://my-fuck-awesome-project.firebaseapp.com/captcha.html?appurl=${Linking.makeUrl('')}"
const captchaUrl = 'https://my-fuck-awesome-project.firebaseapp.com/phone-invisible.html'


const config = {
  apiKey: "AIzaSyDiWvzSG8kFr2oPLyrLleEmxGxMY3ed5Hw",
  authDomain: "my-fuck-awesome-project.firebaseapp.com",
  databaseURL: "https://my-fuck-awesome-project.firebaseio.com",
  projectId: "my-fuck-awesome-project",
  storageBucket: "my-fuck-awesome-project.appspot.com",
  messagingSenderId: "885320638463"
};
firebase.initializeApp(config);

type Props = {};

class TokenScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      phone: '+886908668531',
      confirmationResult: undefined,
      code: '',
      token_code: "null",
    }
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }



  save_token_code = () => {
    this.setState({
      token_code: this.props.navigation.state.params.token_code,
    }, function () {
      this.save();
      console.warn("save")
    }), console.warn("A", this.state.token_code);
    console.warn("B", this.props.navigation.state.params.token_code);
  }

  save() {
    // console.warn("C", this.state.token_code);
    //设置多项
    var keyValuePairs = [['userToken', this.state.token_code]]
    AsyncStorage.multiSet(keyValuePairs, function (errs) {
      if (errs) {
        //TODO：存储出错
        return;
      }
      alert('userToken保存成功!');

    });
  }


  componentDidMount() {
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
  render() {
    // const { navigation: { state: { params: { token_code } } } } = this.props;
    const {
      navigation: {
        state: {
          params: {
            token_code
          }
        }
      }
    } = this.props;



    return (

      <View style={styles.container}>
        <ScrollView style={{ padding: 20, marginTop: 20 }}>

          <Text style={styles.welcome}>
            歡迎使用ＳＲＰ
          </Text>

          <Text style={styles.welcome}>{token_code}</Text>

          {/* <Button
              title='go'
              onPress={() => { this.props.navigation.navigate('Login') }} />
            <Text>Code from SMS Screen</Text>
           
          */}
          {/*  
            <Button
              onPress={this.save_token_code}
              title="登入"/>
    */}

          <View style={{justifyContent: 'center'}}>

            <Text style={styles.welcome}>
              請按登入
          </Text>
            <Btn_Login onPress={this.save_token_code} />
            <Text style={styles.welcome}>  或是 註冊 </Text>
            <Btn_setup />

          </View>




        </ScrollView>

      </View>

    );
  }
}



class DetailsScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'Details',

  };


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text style={styles.welcome}>{token_code}</Text>

        <Button
          title="GoBack"
          onPress={() => this.props.navigation.goBack().Alert("hi")}

        />

        <Button
          title="console"
          onPress={() => console.warn(this.props)
          }

        />

      </View>
    );
  }
}


class MyBackButton extends React.Component {
  render() {
    return <Button title="Back" onPress={() => { this.props.navigation.push('Details') }} />;
  }
}
class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      phone: '',
      confirmationResult: undefined,
      code: ''
    }
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }
  onPhoneChange = (phone) => {
    this.setState({ phone })
  }


  handleClick = () => {
    Linking.openURL(captchaUrl).catch(err => console.error('An error occurred', err));

  };

  render() {


    return (
      <View style={styles.container}>

        <ScrollView style={{ padding: 20, marginTop: 20 }}>
          <Text style={styles.welcome}>
            Welcome
        </Text>
          <Button
            title='go'
            onPress={() => { this.props.navigation.navigate('Welcome1') }} />
          <Text>phone Screen</Text>
          <TextInput
            value={this.state.phone}
            onChangeText={this.onPhoneChange}
            keyboardType="phone-pad"
            placeholder="Your phone"
          />
          <Button
            onPress={this.handleClick}
            title="Next"
          />
          <TouchableOpacity onPress={this.handleClick}>
            <View style={styles.button}>
              <Text style={styles.text}>Open {this.props.url}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

class Welcome1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      phone: '+886908668531',
      confirmationResult: undefined,
      code: '',
      token_code: "null",
    }
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }
  /////////_________------------------
  onPhoneComplete = async () => {
    let token = null
    // const listener = ({ url }) => {
    //   // WebBrowser.dismissBrowser()
    //   const tokenEncoded = Linking.parse(url).queryParams['token']
    //   if (tokenEncoded)
    //     token = decodeURIComponent(tokenEncoded)
    // }
    // Linking.addEventListener('url', listener)
    // await Linking.openURL(o_captchaUrl).catch(err => console.error('An error occurred', err));

    // // await WebBrowser.openBrowserAsync(o_captchaUrl)
    // Linking.removeEventListener('url', listener)
    token = decodeURIComponent(this.state.token_code)
    if (token) {
      //fake firebase.auth.ApplicationVerifier
      const captchaVerifier = {
        type: 'recaptcha',
        verify: () => Promise.resolve(token)
      }
      try {
        const confirmationResult = await firebase.auth().signInWithPhoneNumber(this.state.phone, captchaVerifier)
        this.setState({ confirmationResult })
      } catch (e) {
        console.warn(e)
      }

    }
  }
  /////////_________------sdf------------
  onCodeChange = (code) => {
    // this.setState({ code })
    this.setState({
      code
    }, function () {
      // console.warn(code)
    });
  }
  onSignIn = async () => {
    const { confirmationResult, code } = this.state
    try {
      await confirmationResult.confirm(code)
    } catch (e) {
      console.warn(e)
    }
    this.reset()
  }
  reset = () => {
    this.setState({
      phone: '',
      phoneCompleted: false,
      confirmationResult: undefined,
      code: ''
    })
  }
  test = () => {
    this.setState({
      token_code: this.props.navigation.state.params,
    }), console.warn("A", this.state.token_code);
    console.warn("B", this.props.navigation.state.params);
  }


  render() {
    // const { navigation: { state: { params: { token_code } } } } = this.props;
    const {
      navigation: {
        state: {
          params: {
            token_code
          }
        }
      }
    } = this.props;



    return (

      <View style={styles.container}>
        <ScrollView style={{ padding: 20, marginTop: 20 }}>

          <Text style={styles.welcome}>
            Welcome1
        </Text>
          <Text style={styles.welcome}>{token_code}</Text>

          <Button
            title='go'
            onPress={() => { this.props.navigation.navigate('Login') }} />
          <Text>Code from SMS Screen</Text>
          <TextInput
            value={this.state.code}
            onChangeText={this.onCodeChange}
            keyboardType="numeric"
            placeholder="Code from SMS"
          />
          <Button
            onPress={this.onPhoneComplete}
            title="onPhoneComplete in"
          />

          <Button
            onPress={this.onSignIn}
            title="Sign in"
          />

          <Button
            onPress={this.test}
            title="test in"
          />



        </ScrollView>

      </View>

    );
  }
}






// export default withNavigation(MyBackButton);

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // tabBarComponent: <TTOOPP />,
    headerTitle: <Btn_Search />,
    //  headerTitle:<Text >FUCK</Text>,
    headerStyle: {
      // backgroundColor: '#f4511e',
      backgroundColor: '#7592A9',
      ///上方tab bar 顏色 iphone X 上瀏海 顏色

      activeTintColor: '#2562b4',
    },
    indicatorStyle: {
      height: 1,
    }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    headerColor: "red",
    headerLeft: (  //定义导航栏右侧的按钮
      // <Text style={{width:1}}></Text>
      <Btn_Qrcode />

    ),
    headerMode: 'screen',
    headerTitleStyle: { flex: 1, alignItems: 'center', textAlign: 'center', justifyContent: 'center' },

    // headerLeftContainerStyle: {paddingRight: 100},
    headerRight: (  //定义导航栏右侧的按钮
      // <Text style={{width:1}}></Text>
      <Btn_Remind />

    ),

    //  headerTitle:  
    //   <Button
    //   title="Go to Details"
    //   onPress={() => console.warn(DetailsScreen())}
    // />
    //<Btn_Qrcode/>
    //title: 'Details',

  };




  render() {
    return (
      // <SafeAreaView style={styles.container}>

      <View style={styles.container}>


        {/* <View style={styles.home}> */}
        <Mian />
        {/* <Login_index/> */}
        {/* <Button
    title="Go to Details"
    onPress={() => this.props.navigation.push('Details')}
  /> */}
        {/* </View> */}

      </View>
      //</SafeAreaView> 
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: { screen: Login_index },

    Home: { screen: HomeScreen },

    QRvue: { screen: QRvue },
    Setup: { screen: Setup },

    Details: { screen: DetailsScreen },
    Phone: {
      screen: TokenScreen,
      path: 'token/:token_code',
    },

  },
  {
    initialRouteName: 'Home',

  }
);

const prefix = 'srpconsole://';

//srpconsole://token/<code>

// const Hello_Stack = createSwitchNavigator(
//   {

//     Home: { screen: Welcome },

//     App: { screen: RootStack },
//     phone: {
//       screen: TokenScreen,
//       path: 'token/:token_code',
//     },
//   },
//   {
//     initialRouteName: 'App',

//   }
// );

// const Hello_Stack = createSwitchNavigator({
//   Welcome,
//   Welcome1,
//   App: RootStack
// })

export default App = () => <RootStack uriPrefix={prefix} />;


// export default class App extends Component<Props> {


//   render() {
//     return (
//       // <Hello_Stack onNavigationStateChange={(prevState, currentState) => { console.log(currentState) }} />
//       // <Hello_Stack />
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }} forceInset={{ bottom: 'never', top: 'never' }}>
//         <Hello_Stack />
//         {/* <RootStack /> */}
//       </SafeAreaView>

//     );
//   }
// }

////消除多餘安全邊距 https://reactnavigation.org/docs/zh-Hans/handling-iphonex.html
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  home: {
    flex: 16,
    flexDirection: 'column',
  },


  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#DDDDDD',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  navLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  navRight: {
    alignItems: 'center',
    marginRight: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
  },
  navText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 30,
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
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width: width / 8,
    marginLeft: 6
  }
});
