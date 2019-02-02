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

    state = {
        text: 'http://facebook.github.io/react-native/',
    };
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
  
  
  
  