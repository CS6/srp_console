import React, { Component } from 'react';
import {
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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


const items_Text = [
  {
   name: "標題們",
   id: 0,
   children: [{
       title: "1月3日臨時動議",
        bady: "的確有這種風險，有關軍教課稅問題，有分別不同的狀況，只有我們台灣降半旗，大家都認為那是炒熱房地產價錢的元凶，理念是一致的，有些很過得去的家庭，我對選舉也不外行，賴委員可能不知道以下的數字，您一向都非常努力爭取桃園地區。",
       id: 20,
     },{
      title: "2月起道路外開放",
      bady: "的確有這種風險，有關軍教課稅問題，有分別不同的狀況，只有我們台灣降半旗，大家都認為那是炒熱房地產價錢的元凶，理念是一致的，有些很過得去的家庭，我對選舉也不外行，賴委員可能不知道以下的數字，您一向都非常努力爭取桃園地區的建設。變調情人節，他絕對是個傳奇人物。",
       id: 21,
     },{
      title: "性別",
      bady: "內容",
       id: 22,
     },{
      title: "職稱",
      bady: "內容",
      id: 23,
    },{
      title: "常態組別",
      bady: "內容",
       id: 24,
     },{
      title: "是否全職",
      bady: "內容",
       id: 25,
     },{
      title: "備註",
      bady: "內容",
       id: 26,
     },]
 },
]

export default class Works extends Component {


      render() {
        return (
          <SafeAreaView style={styles.container}>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


<Text  color='#6787A0' >Home!</Text>

<Icon name="battery-full" size={30} color="#6787A0" />
<Icon name="battery-three-quarters" size={30} color="#900" />
<Icon name="battery-half" size={30} color="#900" />
<Icon name="battery-quarter" size={30} color="#900" />
<Icon name="battery-empty" size={30} color="#900" />
<Icon name="bed" size={30} color="#900" />
<Icon name="american-sign-language-interpreting" size={30} color="#777" />

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


  },
  Scrollcontainer:{
    flex: 1,
    padding:10,
    
    


  },centerText: {
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
  card: {
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height:width * 0.6,
    backgroundColor: '#ededed',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
  shadowRadius: 8,
  shadowOpacity: 0.4,
  elevation: 8,
  shadowOffset: {
    width: 0,
    height: 4
  },
  marginHorizontal:10,
  },
  ButtonCard: {
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.3,
    height:width * 0.6,
    backgroundColor: '#ededed',
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000000',
  shadowRadius: 8,
  shadowOpacity: 0.6,
  elevation: 8,
  shadowOffset: {
    width: 0,
    height: 4
  }
  },
});