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
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';
import Registered_Login from './Registered_Login';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

const items_Text = [
  {
   name: "標題們",
   id: 0,
   children: [{
       name: "電話號碼",
       id: 20,
     },{
       name: "名稱",
       id: 21,
     },{
       name: "性別",
       id: 22,
     },{
      name: "職稱",
      id: 23,
    },{
       name: "常態組別",
       id: 24,
     },{
       name: "是否全職",
       id: 25,
     },{
       name: "備註",
       id: 26,
     },]
 },
]

export default class Registered extends Component {
  constructor() {
    super()


    
    this.state = {
      標題們:null,
      電話號碼:null,
      名稱:null,
      性別:null,
      職稱:null,
      常態組別:null,
      是否全職:null,
      備註:null,

      Te:null,
      PH:null,
      NA:null,
      SEX:null,
      JOB:null,
      NO:null,
      NY:null,
      PS:null,

    
      A:null,
      B:null,
      C:null,
      D:null,
      text:null,
      value:null,
      

    }
    this.termId = 100;
  }

 
    state = {
        text: 'http://facebook.github.io/react-native/',
    };


    JSON_Post = () => {
      let url = 'https://us-central1-bt-fucking-good.cloudfunctions.net/echo';
      fetch(url, {
        method: 'POST',
        // headers 加入 json 格式
        headers: {
          'Content-Type': 'application/json'
        },
        // body 將 json 轉字串送出
        // body: JSON.stringify({
        //   email: 'lovef1232e@hexschool.com',
        //   password: '12345678'
        // })
        body: JSON.stringify({
  
          備註: this.text,
          標題們:this.TE,
          電話號碼:this.PH,
          名稱:this.NA,
          性別:this.SEX,
          職稱:this.JOB,
          常態組別:this.NO,
          是否全職:this.NY,
          備註:this.PS,
   
        
  
        })
      }).then((response) => {
          return response.json(); 
        }).then((jsonData) => {
          console.warn(jsonData);
        }).catch((err) => {
          console.warn('錯誤:', err);
      })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              
                    <TextInput style={styles.all_textBox} placeholder={items_Text[0].children[0].name} onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                    <TextInput style={styles.all_textBox} placeholder={items_Text[0].children[1].name} onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                    <TextInput style={styles.all_textBox} placeholder={items_Text[0].children[2].name} onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                    <TextInput style={styles.all_textBox} placeholder={items_Text[0].children[3].name} onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                    <TextInput style={styles.all_textBox} placeholder={items_Text[0].children[4].name} onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                    <TextInput style={styles.all_textBox} placeholder={items_Text[0].children[5].name} onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                    <TextInput style={styles.all_textBox} placeholder={items_Text[0].children[6].name} onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
                    </View>
                    <View  style={{marginVertical:40}}>

                    {/* <Icon>{items_Text[0].name }</Icon> */}
          {/* <Icon>{items_Text[0].children[0].name}</Icon> */}

                    {/* <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('Home')}
                    /> */}
                    
                    <Registered_Login > </Registered_Login>

                    {/* <Text>fontSize= 16 Screen</Text> */}

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
    backgroundColor: '#D0E889',
  },all_textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#D0E889',
    color:'#878787',
    fontSize:16,
    borderColor:'#707070',
    borderBottomWidth:1,
    marginTop:5,
    height: 50,
    marginTop:15,
    marginBottom:5,
    
  //  marginVertical: 10,
  },searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 3,
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
  
  
  
  