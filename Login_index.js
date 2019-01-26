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
    TouchableOpacity,

} from 'react-native';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator,withNavigation } from 'react-navigation';

import Btn_Login from './app/page/Login/Btn_Login';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

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
          text: 'Useless Placeholder'
        };
      }
    
      static navigationOptions = {
        // header: null,
        headerLayoutPreset: 'center' ,
        // headerTitleStyle: {
        //     textAlign: 'center',
        //     flexGrow:1,
        //     alignSelf:'center',
        // },
        headerStyle: {
            // paddingHorizontal: 8,
        },
            
        headerTitleStyle:{flex:1, textAlign: 'center'},

            
            
        title: 'AppState',
        headerBackTitleVisible:false,
         headerBackTitle: null,
         headerTruncatedBackTitle: null,
        //  headerLeft: (  //定义导航栏右侧的按钮
        //     <Text >檢查我////, O(W)O</Text>
        //     ),
    
    }

 
    state = {
        key:'',
        value:'',
        data: '\n',
    }




   
      
    render() {
        const { user, confirmResult } = this.state;

        return (
            // <SafeAreaView style={styles.container}>

            <View style={styles.container}>
            <Image style={styles.background} source={{ uri: 'https://unsplash.it/800/600?image=102&blur' }} />
        <View style={styles.container}>
        <Btn_Login/>
        

          <Text style={[styles.title, { fontSize: 40}]}>Logo</Text>
        </View>





        <View style={styles.bottmContainer}>

        <Btn_Login/>

        </View>


            </View>
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
    paddingHorizontal:50,
    paddingVertical:10,
    marginBottom:30,

  },
  background: {
    height: 800,
    width: 600,
    position: 'absolute',
    
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
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
        borderRadius:30,
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



