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
import QRCode from 'react-native-qrcode';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';

import { SafeAreaView, } from 'react-navigation';
import Qrcode from './qrcode';
import Scanner from './scanner';
import Top from '../top/top';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class qrcode extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: 'QRcode',
    headerStyle: {
      // backgroundColor: '#f4511e',
      backgroundColor: '#D0E889',

      
      },
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
      label: [ '顯示QRcode', '掃描QRcode'],
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
          tabBarUnderlineStyle='#8BA812'
          tabBarBackgroundColor='#fff'
          tabBarActiveTextColor='#8BA812'
          tabBarInactiveTextColor='#333'


          tabBarUnderlineStyle={styles.tabBarUnderline}
        >
              {/* label: ['推荐', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'], */}

          {
            label.map((item, index) => {

              switch (item) {
                
                
                case '顯示QRcode':
                  return (
                    <Qrcode tabLabel={item} key={index} />
                  )
                  break;
                case '掃描QRcode':
                  return (
                    <Scanner tabLabel={item} key={index} />
                  )
                  break;
                
                default:
                  return (
                    <Qrcode tabLabel={item} key={index} />
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
    backgroundColor: '#F5FCFF',
  },
  tabBarUnderline: {
    backgroundColor: '#8BA812',
    height: 2,
    // width: width /4,
    // marginLeft: 6
  }
});