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
  RefreshControl,
  Alert 
} from 'react-native';

import { SafeAreaView, } from 'react-navigation';
// import CardNotice from './CardNotice'
import CardNotice from '../../components/CardNotice';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

// const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";

const items_Text =[
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

// class Card_A extends React.Component {


//   // 滑动tab
//   renderScrollableTab() {
//     return (
//       <View style={{ flex: 1,padding:15,     }}>
//         <View style={{ flex: 1, flexDirection:'column',justifyContent: 'center'}}>

//         {/* <Text style={{ fontSize:22, }}>{items_Text[0].children[0].title }</Text> */}
//         <Text style={{ fontSize:22, }}>{msg.announcement[0].title}</Text>

//                   {/* <Icon>{items_Text[0].children[0].name }</Icon> */}

//         </View>

//         <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
//         {/* <Text style={{ fontSize:14,flex: 1,lineHeight:24, justifyContent: 'center', alignItems: 'center' }}>{items_Text[0].children[0].bady }</Text> */}
//         <Text style={{ fontSize:14,flex: 1,lineHeight:24, justifyContent: 'center', alignItems: 'center' }}>{msg.announcement[0].detail}</Text>
//         {/* <Text style={{ fontSize:14,flex: 1,lineHeight:24, justifyContent: 'center', alignItems: 'center' }}>{msg.excutionResult}</Text> */}

//         </View>

//       </View>
// ////待實作for迴圈自動填入
//     )
//   }

//   render() {
//     return (

         
//           <View style={styles.card}>
//             {this.renderScrollableTab()}


//           </View>
//     );
//   }
// }


// class Card_A extends React.Component {


//   // 滑动tab
//   renderScrollableTab() {
//     return (
//       <View style={{ flex: 1,padding:15,     }}>
//         <View style={{ flex: 1, flexDirection:'column',justifyContent: 'center'}}>
//         <Text style={{ fontSize:22, }}>{msg.announcement[0].title}</Text>
//         </View>
//         <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
//         <Text style={{ fontSize:14,flex: 1,lineHeight:24, justifyContent: 'center', alignItems: 'center' }}>{msg.announcement[0].detail}</Text>
//         </View>
//       </View>
//     )
//   }
//   render() {
//     return (
//           <View style={styles.card}>
//           {this.props.name}
//           </View>
//     );
//   }
// }


let info_data;
export default class ToDay extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
      isLoading: true,
      userToken:"",
      announcement: [
        {
            "detail": "空空der",
            "issueTime": {
                "_seconds": 1552493757,
                "_nanoseconds": 688000000
            },
            "title": "空空der",
            "issuer": "空空der"
        }],
    };
  }

_getAll() {
    
  }
//页面的组件渲染完毕（render）之后执行
componentDidMount() {
  this.JSON_Post();
}


_onRefresh = () => {
  this.setState({refreshing: true});
  this.JSON_Post()
    // this.setState({refreshing: false});
}

  JSON_Post = () => {
    // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
    let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getAnnouncement';
    fetch(url, {
      method: 'POST',
      // headers 加入 json 格式
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "uid":this.state.userToken
      })
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      // console.warn(jsonData);
      // console.warn(jsonData.excutionResult);
    //  info_data = jsonData;
      // this.JSON_body();
      if (jsonData.excutionResult=="success"){
        console.warn(jsonData.announcement);
        console.warn(this.state.announcement);
        Alert.alert ("更新成功");
        this.setState({refreshing: false,isLoading: false,announcement: jsonData.announcement,});
        console.warn(JSON.stringify(this.state.announcement));
        }
        else{
          Alert.alert ("更新失敗","請檢查網路");
          this.setState({refreshing: false});
          // this.forceUpdate();
        }
    }).catch((err) => {
      console.warn('錯誤:', err);
      Alert.alert ("指派失敗","請檢查網路");
      this.setState({refreshing: false});
      // this.forceUpdate();
    })
  }
  JSON_body = (A) => {
    // console.warn(jsonData);
    // console.warn(this.jsonData);
    console.warn("A " + A + JSON.stringify(info_data));
    console.warn(JSON.stringify(info_data.announcement[0].title));
    // let user_info_data = JSON.stringify(info_data);
    this.setState({
        // user_info_data:info_data,
        announcement: info_data.announcement,
    }).then(()=>{
      console.warn(this.state.announcement);
    })
}


getStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('userToken');
    if (value !== null) {
      console.warn(value);
      this.setState({ userToken: value });
    }
  } catch (error) {
    console.log(error);
  }
}


  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }
  // async componentDidMount() {
  //   // TODO: You: Do firebase things
  //   // const { user } = await firebase.auth().signInAnonymously();
  //   // console.warn('User -> ', user.toJSON());
  //   // await firebase.analytics().logEvent('foo', { bar: '123'});
  // }
      render() {
        if(this.state.isLoading){
          return(
            <View></View>
          )
        }
        else{
        return (
          <SafeAreaView style={styles.container}> 
          <ScrollView style={styles.Scrollcontainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}/>}>
                {/* <CardNotice infoTitle={this.state.announcement[0].title} infoBody={this.state.announcement[2].detail}/>  */}

                {this.state.announcement.map((note) => {
           return (
            <CardNotice
            infoTitle={note.title}
            infoBody={note.detail} />
           );
        })}

{/* 
                <CardNotice infoTitle={msg.announcement[3].title} infoBody={msg.announcement[0].detail}/> 
                <CardNotice infoTitle={msg.announcement[0].title} infoBody={msg.announcement[1].detail}/> 
                <CardNotice infoTitle={msg.announcement[1].title} infoBody={msg.announcement[2].detail}/>  */}
          {/* <Button style={styles.ButtonCard}/> */}
          {/* <TouchableOpacity title='GET' style={styles.ButtonCard} onPress={this.JSON_Post}/> */}


       
          <Button
              title="新2"
              onPress={() => {
                // this._retrieveData();
                this.getStorage().done();

              }}
            />

          {/* <Card_A/> */}
        
          </ScrollView>

          </SafeAreaView>
    
           
        );}
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