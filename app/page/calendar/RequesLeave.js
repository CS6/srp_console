import React, { Component } from "react";
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
  SafeAreaView,
  TouchableHighlight,
  Modal
} from "react-native";

import CheckBox from "react-native-check-box";
import Icon from "react-native-vector-icons/FontAwesome5";
// import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get("window");

const items_Text = [
  {
    name: "標題們",
    // id: 0,
    children: [
      {
        profile_icon: require("../../img/account.png"),
        profile_name: "拉互依",
        leave_type: "假別",
        leave_start_date: "2019/10/10",
        leave_end_date: "2019/10/11",
        leave_start_time: "12:00",
        leave_end_time: "13:00",
        leave_desc: "請假理由請假理由請假理由請假理由請假理由",
        leave_apply_date: "2019/10/11"
        // id: 20,
      }
    ]
  }
];

class Card extends React.Component {
  // 滑动tab

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      modalApprovalVisible: false,
      modalDisapprovalVisible: false
    };
  }

  setApprovalVisible(visible) {
    this.setState({ modalApprovalVisible: visible });
  }
  setDisapprovalVisible(visible) {
    this.setState({ modalDisapprovalVisible: visible });
  }

  renderScrollableTab() {
    return (
      <View style={styles.cardContent}>
        <View style={styles.cardItemImg}>
          <Image style={styles.profileImg} source={items_Text[0].children[0].profile_icon}/>
        </View>
        <View style={styles.cardItemTextSection}>
          <View style={styles.cardItemText}>
            <View>
              <Text style={styles.profileName}>{items_Text[0].children[0].profile_name}</Text>
              <Text />
              <Text style={styles.leaveType}>{items_Text[0].children[0].leave_type}</Text>
            </View>
            <View style={styles.cardItemDate}>
              <Text style={styles.cardItemLeaveDate}>{items_Text[0].children[0].leave_start_date}</Text>
              <Text>       ｜</Text>
              <Text style={styles.cardItemLeaveDate}>{items_Text[0].children[0].leave_end_date}</Text>
            </View>
            <View style={styles.cardItemDate}>
              <Text style={styles.cardItemLeaveDate}>{items_Text[0].children[0].leave_start_time}</Text>
              <Text>   ｜</Text>
              <Text style={styles.cardItemLeaveDate}>{items_Text[0].children[0].leave_end_time}</Text>
            </View>
          </View>
          <View style={styles.cardItemMoreText}>
            <Text style={styles.cardItemDesc}>{items_Text[0].children[0].leave_desc}</Text>
            <Text style={styles.cardItemApplyDate}>申請日期: {items_Text[0].children[0].leave_apply_date}</Text>
          </View>
        </View>
        <View style={styles.cardButtonSection}>
          <View style={styles.cardButton}>
            <TouchableHighlight
              onPress={() => { this.setApprovalVisible(true); }}>
              <Icon name="check-circle" size={30} color="#7094B1" solid />
            </TouchableHighlight>
          </View>
          <View style={styles.cardButton}>
            <TouchableHighlight
              onPress={() => { this.setDisapprovalVisible(true); }}>
              <Icon name="times-circle" size={30} color="#9D9D9D" solid />
            </TouchableHighlight>
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent="true"
          visible={this.state.modalApprovalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.cardModal}>
            <View style={styles.cardModalContent}>
              <Text style={styles.cardModalText}>確定核准假單？</Text>
              <View style={styles.cardModalButton}>
                <View style={styles.cardModalCancel}>
                  <TouchableHighlight
                    onPress={() => {this.setApprovalVisible(!this.state.modalApprovalVisible);}}>
                    <Text style={styles.cardModalCancelText}>取消</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.cardModalConfirm}>
                  <TouchableHighlight
                    onPress={() => {this.setApprovalVisible(!this.state.modalApprovalVisible);}}>
                    <Text style={styles.cardModalConfirmText}>確定</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          transparent="true"
          visible={this.state.modalDisapprovalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}>
          <View style={styles.cardModal}>
            <View style={styles.cardModalContent}>
              {/* <Text style={styles.cardModalText}>不核准原因</Text> */}
              <TextInput
                style={styles.cardModalTextbox}
                placeholder= "不核准原因"
                onChangeText={(txt)=>{this.setState({key:txt})}} 
                value={this.state.key}/>
              <View style={styles.cardModalButton}>
                <View style={styles.cardModalCancel}>
                  <TouchableHighlight
                    onPress={() => {this.setDisapprovalVisible(!this.state.modalDisapprovalVisible);}}>
                    <Text style={styles.cardModalCancelText}>取消</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.cardModalConfirm}>
                  <TouchableHighlight
                    onPress={() => {this.setDisapprovalVisible(!this.state.modalDisapprovalVisible);}}>
                    <Text style={styles.cardModalConfirmText}>送出</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* <View style={styles.cardItemCheckBox}>
          <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            // leftText={"CheckBox"}
          />
        </View> */}
      </View>
      ////待實作for迴圈自動填入
    );
  }

  render() {
    return <View style={styles.card}>{this.renderScrollableTab()}</View>;
  }
}

export default class VerifyLeave extends Component {
  constructor() {
    super();
    this.state = {};
  }
  _getAll() {}
  onSuccess(e) {
    Linking.openURL(e.data).catch(err =>
      console.error("An error occured", err)
    );
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
          <Card />
          <Card />
          {/* <Button style={styles.ButtonCard} /> */}
          {/* < TouchableOpacity title='GET' style={styles.ButtonCard} onPress={this._getAll} /> */}
          <Card />
          <Card />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#6787A0',
    // padding: 20
  },
  Scrollcontainer: {
    flex: 1,
    padding: 10
  },
  profileName: {
    fontSize: 14
  },
  leaveType: {
    fontSize: 16
  },
  cardItemLeaveDate: {
    fontSize: 14
  },
  profileImg: {
    width: 30,
    height: 30
  },
  cardContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  cardItemImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cardItemTextSection:{
    flex: 4,
    flexDirection: "column",
    marginHorizontal: 10,
  },
  cardItemText: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between"
  },
  cardItemMoreText:{

  },
  cardItemDesc:{
    marginVertical: 10,
    color: '#AAAAAA'
  },
  cardItemApplyDate:{
    color: '#6787A0'
  },
  cardButtonSection: {
    flex:1,
    alignItems: "center",
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  },
  cardButton:{
    marginVertical: 10
  },
  cardModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080"
  },
  cardModalContent: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 20,
    shadowColor: "#000000",
    borderRadius: 10,
    shadowRadius: 8,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
  cardModalTextbox: {
    borderBottomColor: "#C6C6C6",
    borderBottomWidth: 1,
    marginVertical: 20,
    color: "#C6C6C6"
  },
  cardModalText: {
    color: "#8D8D8D",
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cardModalButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  cardModalCancel: {
    borderWidth: 0.2,
    borderRadius: 20,
    borderColor: "#8D8D8D",
    padding: 5,
    marginHorizontal: 10
  },
  cardModalCancelText: {
    color: "#8D8D8D",
    marginHorizontal: 5
  },
  cardModalConfirm: {
    padding: 5,
    backgroundColor: "#98BFDE",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#98BFDE",
    marginHorizontal: 10
  },
  cardModalConfirmText: {
    color: "#FFFFFF",
    marginHorizontal: 5
  },
  cardItemCheckBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: width * 0.9,
    // height: width * 0.4,
    // backgroundColor: '#ededed',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d6d7da",
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: "#000000",
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  ButtonCard: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.3,
    height: width * 0.6,
    backgroundColor: "#ededed",
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: "#000000",
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 8,
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 4
    }
  }
});
