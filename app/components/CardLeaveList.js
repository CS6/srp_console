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

import CheckBox from 'react-native-check-box';
import Card from './Card';
// import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class CardLeaveList extends Component {
  render() {
    return (
      <View >
        <Card body={
          <View style={styles.cardContent}>
            <View style={styles.cardItemImg}>
              <Image style={styles.profileImg} source={this.props.profile_icon} />
            </View>
            <View style={styles.cardItemTextSection}>
              <View style={styles.cardItemText}>
                <View>
                  <Text style={styles.profileName}>{this.props.profile_name}</Text>
                  <Text></Text>
                  <Text style={styles.leaveType}>{this.props.leave_type}</Text>
                </View>
                <View style={styles.cardItemDate}>
                  <Text style={styles.cardItemLeaveDate}>{this.props.leave_start_date}</Text>
                  <Text>       ｜</Text>
                  <Text style={styles.cardItemLeaveDate}>{this.props.leave_end_date}</Text>
                </View>
                <View style={styles.cardItemDate}>
                  <Text style={styles.cardItemLeaveDate}>{this.props.leave_start_time}</Text>
                  <Text>   ｜</Text>
                  <Text style={styles.cardItemLeaveDate}>{this.props.leave_end_time}</Text>
                </View>
              </View>
              <View style={styles.cardItemMoreText}>
                <Text style={styles.cardItemDesc}>{this.props.leave_desc}</Text>
                <Text style={styles.cardItemApplyDate}>申請日期: {this.props.leave_apply_date}</Text>
              </View>

            </View>
          </View>

        } />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  profileName: {
    fontSize: 14,
  },
  leaveType: {
    fontSize: 16,
  },
  cardItemLeaveDate: {
    fontSize: 14,
  },
  profileImg: {
    width: 30,
    height: 30
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  cardItemImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardItemTextSection: {
    flex: 4,
    flexDirection: "column",
    marginHorizontal: 10,
  },
  cardItemText: {
    // flex: 1, 
    flexDirection: 'row',
    // alignItems: 'center', 
    justifyContent: 'space-between'
  },
  cardItemDesc: {
    marginVertical: 10,
    color: '#AAAAAA'
  },
  cardItemApplyDate: {
    color: '#6787A0'
  },
  cardItemCheckBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});