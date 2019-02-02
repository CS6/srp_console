/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, 
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import { createBottomTabNavigator, SafeAreaView,createSwitchNavigator, createStackNavigator,withNavigation } from 'react-navigation';

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


type Props = {};


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
    return <Button title="Back" onPress={() => { this.props.navigation.push('Details')}} />;
  }
}
class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Button
          title='go'
          onPress={() => { this.props.navigation.navigate('Welcome1') }}
        />
      </View>
    );
  }
}

class Welcome1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome1
        </Text>
        <Button
          title='go'
          onPress={() => { this.props.navigation.navigate('Login') }}
        />
      </View>
    );
  }
}
// export default withNavigation(MyBackButton);

class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    // tabBarComponent: <TTOOPP />,
      headerTitle:<Btn_Search/>,
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
    headerColor:"red",
     headerLeft: (  //定义导航栏右侧的按钮
      // <Text style={{width:1}}></Text>
      <Btn_Qrcode/>

      ),
      headerMode:'screen',
      headerTitleStyle:{flex:1, alignItems: 'center',textAlign: 'center',justifyContent: 'center'},

      // headerLeftContainerStyle: {paddingRight: 100},
      headerRight:(  //定义导航栏右侧的按钮
        // <Text style={{width:1}}></Text>
        <Btn_Remind/>
  
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
          <Mian/> 
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
    Login:{screen:Login_index},

    Home:{ screen: HomeScreen } ,
    
    QRvue:{ screen: QRvue},
    Setup:{screen:Setup},

    Details:{ screen: DetailsScreen},
    
  },
  {
    initialRouteName: 'Login',
    
  }
);

const Hello_Stack = createSwitchNavigator({
  Welcome,
  Welcome1,
  App: RootStack
})



export default class App extends Component<Props> {


  render() {
    return (
      // <Hello_Stack onNavigationStateChange={(prevState, currentState) => { console.log(currentState) }} />
                // <Hello_Stack />
<SafeAreaView style={{flex: 1, backgroundColor: 'red'}} forceInset={{ bottom: 'never' ,top: 'never' }}>
                  <RootStack />
                  </SafeAreaView>

    );
  }
}

////消除多餘安全邊距 https://reactnavigation.org/docs/zh-Hans/handling-iphonex.html
const styles = StyleSheet.create({
  container: {
    flex: 1,

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
