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
  SafeAreaView,
  TouchableHighlight,
  Modal
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome5";
import Card from './Card';

// import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
const url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/authorizeAbsentNote';

export default class CardLeave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalApprovalVisible: false,
      modalDisapprovalVisible: false,
      issuer: "778TIlaNHBcW1lwvk3dZ1HuTuPv1",
      leaveReason: null,
      isLoading: false,
    };
  }

  sendApprovalToApi(leaveNoteUID, trueOrFalse, leaveReason){
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "leaveNoteUID": leaveNoteUID,
        "authorizerUID": this.state.issuer,
        "approve_desc": leaveReason,
        "is_proved": trueOrFalse
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.warn('是否:', data.excutionResult);
      if (data.excutionResult == "success") {
        this.setState({
          isLoading: true,
          leaveNote: data.leaveNote,
        }, function(){
        });
      }
    }).catch((err) => {
      console.warn('錯誤:', err);
    });
  }

  setApprovalVisible(visible) {
    this.setState({ modalApprovalVisible: visible });
  }
  setDisapprovalVisible(visible) {
    this.setState({ modalDisapprovalVisible: visible });
  }
  
  render() {
    let leaveReason = this.state.leaveReason;
    if(this.state.isLoading){
      return(
        <View></View>
      )
    }
    else{
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
                    <Text />
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
                transparent={true}
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
                          onPress={() => { this.setApprovalVisible(!this.state.modalApprovalVisible); }}>
                          <Text style={styles.cardModalCancelText}>取消</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.cardModalConfirm}>
                        <TouchableHighlight
                          onPress={() => { 
                            this.setApprovalVisible(!this.state.modalApprovalVisible); 
                            this.sendApprovalToApi(this.props.leave_note_id, true, "");
                            }}>
                          <Text style={styles.cardModalConfirmText}>確定</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
              <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalDisapprovalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.cardModal}>
                  <View style={styles.cardModalContent}>
                    {/* <Text style={styles.cardModalText}>不核准原因</Text> */}
                    <TextInput
                      style={styles.cardModalTextbox}
                      placeholder="不核准原因"
                      onChangeText={(txt) => { this.setState({ leaveReason: txt }) }}
                      value={leaveReason} />
                    <View style={styles.cardModalButton}>
                      <View style={styles.cardModalCancel}>
                        <TouchableHighlight
                          onPress={() => { this.setDisapprovalVisible(!this.state.modalDisapprovalVisible); }}>
                          <Text style={styles.cardModalCancelText}>取消</Text>
                        </TouchableHighlight>
                      </View>
                      <View style={styles.cardModalConfirm}>
                        <TouchableHighlight
                          onPress={() => { 
                            this.setDisapprovalVisible(!this.state.modalDisapprovalVisible); 
                            this.sendApprovalToApi(this.props.leave_note_id, false, leaveReason);
                            }}>
                          <Text style={styles.cardModalConfirmText}>送出</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
  
          } />
        </View>
      );
    }

  }
}


const styles = StyleSheet.create({
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
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  cardItemTextSection:{
    flex: 4,
    flexDirection: "column",
    marginHorizontal: 10,
  },
  cardItemText: {
    flex: 4,
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
    flex:0.8,
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
});
