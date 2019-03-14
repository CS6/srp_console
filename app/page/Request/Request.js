import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TextInput,
    Button,
    Picker,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';
///此為請假頁面
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

const items = [
   {
    name: "假別",
    id: 0,
    children: [{
        name: "病假",
        id: 20,
      },{
        name: "事假",
        id: 21,
      },{
        name: "喪假",
        id: 22,
      },{
        name: "公假",
        id: 24,
      },{
        name: "婚假",
        id: 25,
      },{
        name: "產假",
        id: 26,
      },{
        name: "遠端假",
        id: 27,
      },{
        name: "生理假",
        id: 28,
      },{
        name: "育嬰假",
        id: 29,
      },{
        name: "其他",
        id: 30,
      }]
  },
]


export default class Request extends Component {
  static navigationOptions = {

    title: '我要請假',

  };
  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }
  
    render() {
        return (
          <SafeAreaView style={styles.container}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.container}>
  
            <Text>Request Screen</Text>
           
            </View>
  
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
    },searchBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: width * 0.7,
      backgroundColor: '#ededed',
      borderRadius: 5,
      height: 50,
      marginVertical: 10,
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
      color: '#333333',
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
    width:width/8,
    marginLeft:6
  }
  
  });
  
  
  
  