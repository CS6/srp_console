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
import Reply from './Reply';
import Request from './RequestLeave';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class Calendar extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <Top />,
    title: '請假審核',
    headerStyle: {
      // backgroundColor: '#f4511e',
      backgroundColor: '#D0E889',
    },
    headerTitleStyle: { flex: 1, textAlign: 'center' },
    headerRight: (  //定义导航栏右侧的按钮
      // <Text style={{width:1}}></Text>
      <Text />
    ),
  };

  state = {
    text: 'http://facebook.github.io/react-native/',
  };

  constructor(props) {
    super(props);
    this.state = {
      tabShow: false,
      label: ['未審核', '已審核'],
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
          tabBarBackgroundColor='#fff'
          tabBarActiveTextColor='#6787A0'
          tabBarUnderlineStyle='#2562b4'
          tabBarInactiveTextColor='#333'
          tabBarUnderlineStyle={styles.tabBarUnderline}
          onChangeTab={() => this.setState({tabShow: true})}>
          {label.map((item, index) => {
              switch (item) {
                case '未審核':
                  return (
                    <Request tabLabel={item} key={index} />
                  )
                  break;
                case '已審核':
                  return (
                    <Reply tabLabel={item} key={index} />
                  )
                  break;
                default:
                  return (
                    <Request tabLabel={item} key={index} />
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
    backgroundColor: '#FFFFFF',
  },
  tabBarUnderline: {
    backgroundColor: '#2562b4',
    height: 3,
    width: width / 3,
    // marginLeft: 6
  }
});