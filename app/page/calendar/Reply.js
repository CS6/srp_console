import React, { Component } from 'react';
import {
  AsyncStorage,
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
  RefreshControl,
} from 'react-native';

import CardLeaveList from '../../components/CardLeaveList';
import moment from "moment";
// import CheckBox from 'react-native-check-box';
import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
const url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getLeaveNoteList';

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
    this.state = {
      userToken: "778TIlaNHBcW1lwvk3dZ1HuTuPv1",
      isLoading: true,
      refreshing: false,

    };
  }


  componentDidMount() {
    this.getStorage().done();

  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.onPost();
    // this.setState({refreshing: false});
  }
  

  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        console.warn("哈哈"+value);
        this.setState({ userToken: value });
        // console.warn('Reply', await AsyncStorage.getItem('userToken'));
        this.onPost();

      }
    } catch (error) {
      console.log(error);
    }
  }

  onPost = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "uid": this.state.userToken,
        "unAuthNotes": false,
        "authedNotes": true,
        "offset": 0,
        "limit": 1000
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      if (data.excutionResult == "success") {
        console.warn(data.leaveNote)
        this.setState({
          isLoading: false,
          leaveNote: data.leaveNote,
        }, function () {

        });
      }
    }).catch((err) => {
      console.warn('錯誤:', err);
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View></View>
      )
    }
    else {
      return (
        <SafeAreaView style={styles.container}>
       <ScrollView style={styles.Scrollcontainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}/>}>            
              {this.state.leaveNote.map((note) => {
              return (
                <CardLeaveList
                  profile_icon={items_Text[0].children[0].profile_icon}
                  profile_name={note.issuerName}
                  leave_type={note.type}
                  leave_start_date={moment(note.startLeaveTime._seconds * 1000).format("YYYY/MM/DD")}
                  leave_end_date={moment(note.endLeaveTime._seconds * 1000).format("YYYY/MM/DD")}
                  leave_start_time={moment(note.startLeaveTime._seconds * 1000).format("hh:mm a")}
                  leave_end_time={moment(note.endLeaveTime._seconds * 1000).format("hh:mm a")}
                  leave_desc={note.desc}
                  leave_apply_date={moment(note.issueTime._seconds * 1000).format("YYYY/MM/DD")} />
              );
            })}
          </ScrollView>
        </SafeAreaView>
      );

    }

  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // padding: 20
  },
  Scrollcontainer: {
    flex: 1,
    padding: 10,
  },
});