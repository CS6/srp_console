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
    Button 
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

import { SafeAreaView, } from 'react-navigation';

import ToDay from './ToDay';
import Works from './Works';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class Bulletin extends Component {



  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: '首頁',
    headerStyle: {
      // backgroundColor: '#f4511e',
      backgroundColor: '#F0C0AB',

      
      },
      indicatorStyle: {
        height: 0,
    }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    headerColor:"red",
    
  
    headerTitleStyle:{flex:1, textAlign: 'center'},
    headerRight:(  //定义导航栏右侧的按钮
      // <Text style={{width:1}}></Text>
      <Text/>

      ),


  };

    state = {
        text: 'http://facebook.github.io/react-native/',
      };
    
  constructor(props) {
    super(props);
    this.state = {
      tabShow: false,
      label: [ '今日工事', '公告'],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tabShow: true
      });
    }, 0)
  }

  

  // 滑动tab
  renderScrollableTab() {
    let label = this.state.label
    if (this.state.tabShow) {
      return (

        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar />}
          //tabBarBackgroundColor='#fff'
          tabBarBackgroundColor='#Fefefe'
          tabBarActiveTextColor='#6787A0'
          tabBarUnderlineStyle='#2562b4'
          tabBarInactiveTextColor='#333'

          ///修改 今日公告 公事 tabber 顏色 
          tabBarUnderlineStyle={styles.tabBarUnderline}
        >
              {/* label: ['推荐', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'], */}

          {
            label.map((item, index) => {

              switch (item) {
                
                
                case '今日工事':
                  return (
                    <Works tabLabel={item} key={index} />
                  )
                  break;
                case '公告':
                  return (
                    <ToDay tabLabel={item} key={index} />
                  )
                  break;
                
                default:
                  return (
                    <Works tabLabel={item} key={index} />
                  )
                  break;
              }
            })
          }
        </ScrollableTabView>

      )
    }

  }

      render() {
        return (
       
          
   
          <SafeAreaView style={styles.container}>
          <View style={{ flex: 1 }}>
            {this.renderScrollableTab()}
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
    backgroundColor: '#FFF',
  },
  tabBarUnderline: {
    backgroundColor: '#2562b4',
    height: 3,
    width: width/4,

    // marginLeft: 6
              ///修改 今日公告 公事 tabber  下底線 顏色 

  }
});