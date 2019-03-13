import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
  Button,
  SafeAreaView
} from 'react-native';

import CardLeaveList from '../../components/CardLeaveList';
// import CheckBox from 'react-native-check-box';
// import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

const items_Text = [
  {
    name: "標題們",
    // id: 0,
    children: [{
      profile_icon: require('../../img/account.png'),
      profile_name: "拉互依",
      leave_type: "假別",
      leave_start_date: "2019/10/10",
      leave_end_date: "2019/10/11",
      leave_start_time: "12:00",
      leave_end_time: "13:00",
      leave_desc: "請假理由請假理由請假理由請假理由請假理由",
      leave_apply_date: "2019/10/11"
      // id: 20,
    }]
  },
]

export default class Reply extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.Scrollcontainer}>
          <CardLeaveList
            profile_icon={items_Text[0].children[0].profile_icon}
            profile_name={items_Text[0].children[0].profile_name}
            leave_type={items_Text[0].children[0].leave_type}
            leave_start_date={items_Text[0].children[0].leave_start_date}
            leave_end_date={items_Text[0].children[0].leave_end_date}
            leave_start_time={items_Text[0].children[0].leave_start_time}
            leave_end_time={items_Text[0].children[0].leave_end_time}
            leave_desc={items_Text[0].children[0].leave_desc}
            leave_apply_date={items_Text[0].children[0].leave_apply_date} />
          {/* <Card /> */}
          {/* <Button style={styles.ButtonCard} /> */}
          {/* < TouchableOpacity title='GET' style={styles.ButtonCard} onPress={this._getAll} /> */}
          {/* <Card /> */}
          {/* <Card /> */}
        </ScrollView>
      </SafeAreaView>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#6787A0',
    // padding: 20
  },
  Scrollcontainer: {
    flex: 1,
    padding: 10,
  },
});