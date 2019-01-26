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

import CommonHead from '../../components/commonHead';

import { createBottomTabNavigator,StackNavigator, SafeAreaView, createStackNavigator } from 'react-navigation';
import QRvue from '../qrcode/QRvue';
import Details from '../home/Details';
import WEB from '../web/Webview';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');



// const Stack = StackNavigator(
//   {
//     QRvue: { screen: QRvue },
//     Details: { screen: Details },
//     WEB:{ screen: WEB }
//   },

//   {
//       navigationOptions: {
//           headerBackTitle: null,
//           headerTintColor: '#333333',
//           showIcon: true,
//           gesturesEnabled: true,
//           header: null,
//       },
//       mode: 'card',
//       headerMode: 'screen',
//   }
// );

export default class top extends Component {


  constructor(props) {
    super(props);
    this.state = {
      tabShow: false,
      label: ['推荐', '新品', '居家', '餐厨', '配件', '服装', '电器', '洗护', '杂货', '饮食', '婴童', '志趣'],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tabShow: true
      });
    }, 0)
  }

  // 头部左侧
  renderLeftItem() {
    return (

      <TouchableOpacity onPress={() => this.props.navigation.navigate('QRvue')}
        style={styles.navLeft}>
        <Image source={require('../../img/scanning.png')} style={styles.navIcon} />
        <Text style={styles.navText}>扫一扫</Text>
      </TouchableOpacity>
    )
  }
  // 头部中间
  renderTitleItem() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details') }}>
        <View style={styles.searchBox}>
          <Image source={require('../../img/search.png')} style={styles.searchIcon} />
          <Text style={styles.searchContent}>搜索商品, 共10161款好物</Text>
        </View>
      </TouchableOpacity>
    )
  }
  // 头部右侧
  
  renderRightItem() {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('WEB') }} style={styles.navRight}>
        <Image source={require('../../img/remind.png')} style={styles.navIcon} />
        <Text style={styles.navText}>消息</Text>
      </TouchableOpacity>
    )
  }
      render() {
        return (

          <View >
            <CommonHead
              leftItem={() => this.renderLeftItem()}
              titleItem={() => this.renderTitleItem()}
              rightItem={() => this.renderRightItem()}
            />
            
          </View>
           
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
    width: width / 8,
    marginLeft: 6
  }
});


