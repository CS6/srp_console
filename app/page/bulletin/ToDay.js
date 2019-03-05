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

class Card extends React.Component {


  // 滑动tab
  renderScrollableTab() {
    return (
      <View style={{ flex: 1,padding:15,     }}>
        <View style={{ flex: 1, flexDirection:'column',justifyContent: 'center'}}>

        <Text style={{ fontSize:22, }}>{items_Text[0].children[0].title }</Text>
                  {/* <Icon>{items_Text[0].children[0].name }</Icon> */}

        </View>

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontSize:14,flex: 1,lineHeight:24, justifyContent: 'center', alignItems: 'center' }}>{items_Text[0].children[0].bady }</Text>

        </View>

      </View>
////待實作for迴圈自動填入
    )
  }

  render() {
    return (

         
          <View style={styles.card}>
            {this.renderScrollableTab()}


          </View>
    );
  }
}


export default class ToDay extends Component {

  constructor() {
    super();
    this.state = {};
  }
  _getAll() {
    
  }

  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  async componentDidMount() {
    // TODO: You: Do firebase things
    // const { user } = await firebase.auth().signInAnonymously();
    // console.warn('User -> ', user.toJSON());

    // await firebase.analytics().logEvent('foo', { bar: '123'});
  }
    
      render() {
        return (
          <SafeAreaView style={styles.container}>
    
          <ScrollView style={styles.Scrollcontainer}>
          <Card/>
          <Card/>
          {/* <Button style={styles.ButtonCard}/> */}
          <TouchableOpacity title='GET' style={styles.ButtonCard} onPress={this._getAll}/>

          <Card/>
          <Card/>
        
          </ScrollView>

          </SafeAreaView>
    
           
        );
      };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

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
    backgroundColor: '#FFFFFF',
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