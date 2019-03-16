import React, { Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  Picker,
  TouchableOpacity,
  Modal,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dropdown } from 'react-native-material-dropdown';
import CalendarPicker from 'react-native-calendar-picker';
import { SafeAreaView, } from 'react-navigation';
import CheckBox from 'react-native-check-box';
import moment from "moment";
///此為請假頁面
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

const millisecondsFor12hours = 43200000;
const millisecondsFor11h59min = 86399000;

const leave_type = [
  {
    name: "假別",
    id: 0,
    children: [{
      value: "病假",
    }, {
      value: "事假",
    }, {
      value: "喪假",
    }, {
      value: "公假",
    }, {
      value: "婚假",
    }, {
      value: "產假",
    }, {
      value: "遠端假",
    }, {
      value: "生理假",
    }, {
      value: "育嬰假",
    }, {
      value: "其他",
    }]
  },
];

const items_Text = [
  {
    name: "標題們",
    // id: 0,
    children: [
      {
        profile_icon: require("../../img/account.png"),
        profile_name: "拉互依",
        // id: 20,
      }
    ]
  }
];
class ApplyLeaveForm extends React.Component {
  // 滑动tab

  constructor(props) {
    super(props);
    this.state = {
      isCheckedFirstHalf: false,
      isCheckedSecondHalf: false,
      selectedStartDate: null,
      selectedEndDate: null,
      selectedLeaveType: null,
      startModalVisible: false,
      endModalVisible: false,
      userToken: "A",
      leaveReason: null,
    };
    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
  }


  componentDidMount() {
    this.getStorage().done();

  }

  getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        console.warn(value);
        this.setState({ userToken: value });
        this.JSON_Post();
        console.warn('再次', await AsyncStorage.getItem('userToken'));
        this.onPost();

      }
    } catch (error) {
      console.log(error);
    }
  }
  onStartDateChange(date, endDate) {
    this.setState({
      selectedStartDate: date,
      startModalVisible: false,
    });
  }

  onEndDateChange(date, startDate) {
    this.setState({
      selectedEndDate: date,
      endModalVisible: false,
    });
  }

  setStartModalVisible(visible) {
    this.setState({startModalVisible: visible});
  }
  setEndModalVisible(visible) {
    this.setState({endModalVisible: visible});
  }

  onPost = (selectedStartDate,selectedEndDate,selectedLeaveType,leaveReason) =>{
    fetch('https://us-central1-my-fuck-awesome-project.cloudfunctions.net/askLeave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "issuer": this.state.userToken,
        "type":selectedLeaveType, 
        "startLeaveTime": Number(selectedStartDate), 
        "endLeaveTime": Number(selectedEndDate),
        "desc": leaveReason,
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.warn(data)
      if(data.excutionResult == "success") {
        Alert.alert ("請假成功");
      }
    }).catch((err)=> {
      console.warn('錯誤:',err)
      Alert.alert ("假單發送失敗","請檢查網路");
    });
  }

  _numberOfDay(selectedEndDate, selectedStartDate, selectedLeaveType, leaveReason, isCheckedFirstHalf, isCheckedSecondHalf){
    if(selectedLeaveType == null) Alert.alert("請假失敗","請選擇假別");
    else if(selectedStartDate == null) Alert.alert("請假失敗","請選擇起始日期");
    else if(selectedEndDate == null) Alert.alert("請假失敗","請選擇終止日期");
    else if(selectedEndDate < selectedStartDate) Alert.alert("請假失敗","終止日期不能比起始日期早");
    else {
      // let numberOfDay = ((selectedEndDate-selectedStartDate)/1000/3600/24)+1;
      // if(isChecked == true) numberOfDay -= 0.5;
      // console.warn(selectedStartDate,selectedEndDate);
      // Alert.alert ("請假成功","共請"+numberOfDay+"天假");

      if(isCheckedFirstHalf) selectedStartDate += millisecondsFor12hours;
      if(isCheckedSecondHalf) selectedEndDate += millisecondsFor12hours;
      else selectedEndDate += millisecondsFor11h59min;

      this.onPost(selectedStartDate,selectedEndDate,selectedLeaveType,leaveReason);
    }
  }

  onChangeHandler(value){
    this.setState({
      selectedLeaveType: value,
    });
  }

  renderApplyLeaveForm() {
    const selectedStartDate  = this.state.selectedStartDate;
    const selectedEndDate  = this.state.selectedEndDate;
    const selectedLeaveType  = this.state.selectedLeaveType;
    let isCheckedFirstHalf = this.state.isCheckedFirstHalf;
    let isCheckedSecondHalf = this.state.isCheckedSecondHalf;
    let leaveReason = this.state.leaveReason;
    const startDate = selectedStartDate ? moment(selectedStartDate).format("YYYY/MM/DD") : '';
    const endDate = selectedEndDate ? moment(selectedEndDate).format("YYYY/MM/DD") : '';
    return (
      <View style={styles.formContent}>
        <View style={styles.formProfileSection}>
          <View style={styles.formItemImg}>
            <Image style={styles.profileImg} source={items_Text[0].children[0].profile_icon} />
          </View>
          <View style={styles.formItemName}>
            <Text style={styles.profileName}>{items_Text[0].children[0].profile_name}</Text>
          </View>
        </View>
        <View style={styles.formContentSection}>
          <View style={styles.formInputGroup}>
            <Dropdown
              label={leave_type[0].name}
              data={leave_type[0].children}
              onChangeText={(value) => this.onChangeHandler(value)}
            />

            <TouchableOpacity title='起始日期' style={styles.dateClick} onPress={() => { this.setStartModalVisible(!this.state.startModalVisible); }}>
              <Text style={styles.dateClickText} >起始日期: <Text style={styles.dateSelectedText}>{startDate}</Text></Text>
            </TouchableOpacity>

            <CheckBox
              style={styles.halfDayCheckbox}
              onClick={() => {
                this.setState({
                  isCheckedFirstHalf: !isCheckedFirstHalf
                })
              }}
              isChecked={isCheckedFirstHalf}
              rightText={"請上半天假"}
              rightTextStyle={{color:'#808080',fontSize: 15,}}
              checkBoxColor='#808080'
            />

            <TouchableOpacity title='終止日期' style={styles.dateClick} onPress={() => { this.setEndModalVisible(!this.state.endModalVisible); }}>
              <Text style={styles.dateClickText} >終止日期: <Text style={styles.dateSelectedText}>{endDate}</Text></Text>
            </TouchableOpacity>

            <CheckBox
              style={styles.halfDayCheckbox}
              onClick={() => {
                this.setState({
                  isCheckedSecondHalf: !isCheckedSecondHalf
                })
              }}
              isChecked={isCheckedSecondHalf}
              rightText={"請下半天假"}
              rightTextStyle={{color:'#808080',fontSize: 15,}}
              checkBoxColor='#808080'
            />

            <TextInput
              style={styles.leaveModalTextbox}
              placeholder="請假理由"
              onChangeText={(txt) => { this.setState({ leaveReason: txt }) }}
              value={leaveReason} />

          </View>
          <View style={styles.leaveSubmit}>
            <TouchableOpacity title='送出假單' 
              style={styles.leaveSubmitBtn} 
              onPress={() => {this._numberOfDay(selectedEndDate,selectedStartDate,selectedLeaveType,leaveReason,isCheckedFirstHalf,isCheckedSecondHalf)}}>
              <Text style={styles.leaveSubmitText} >送出假單</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.startModalVisible}>
          <View style={styles.calendarModal}>
            <View style={styles.calendarPicker}>
              <CalendarPicker
                weekdays={['日', '一', '二', '三', '四', '五', '六']}
                months={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                onDateChange={this.onStartDateChange}
                todayBackgroundColor="#FFFFFF"
                previousTitle="<<"
                nextTitle=">>"
                width={width * 0.8}
                selectedDayColor="#7094B1"
                textStyle={{fontSize: 15}}
              />
            </View>
          </View>
        </Modal>
        <Modal 
          animationType="fade"
          visible={this.state.endModalVisible}>
          <View style={styles.calendarModal}>
            <View style={styles.calendarPicker}>
              <CalendarPicker
                weekdays={['日', '一', '二', '三', '四', '五', '六']}
                months={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                onDateChange={this.onEndDateChange}
                todayBackgroundColor="#FFFFFF"
                previousTitle="<<"
                nextTitle=">>"
                width={width * 0.8}
                selectedDayColor="#7094B1"
                textStyle={{fontSize: 15}}
              />
            </View>
          </View>
        </Modal>
      </View>

      ////待實作for迴圈自動填入
    );
  }

  render() {
    return <View style={styles.form}>{this.renderApplyLeaveForm()}</View>;
  }
}

export default class Request extends Component {
  static navigationOptions = {

    title: '我要請假',

  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.Scrollcontainer}>
          <ApplyLeaveForm />
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
    backgroundColor: '#FFFFFF',
    // padding: 40
  }, 
  Scrollcontainer: {
     flex: 1,
    // padding: 40
  },
  formContent:{
    // flex: 1,
    // flexDirection: "column",
    // alignItems: "center",
    margin: 30,
  },
  formProfileSection:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg:{
    width: 30,
    height: 30
  },
  formItemName:{
    marginHorizontal: 20
  },
  profileName:{
    fontSize: 20,
    color: '#6787A0'
  },
  formInputGroup:{
    marginVertical: 15,
  },
  leaveModalTextbox:{
    borderBottomColor: "#8D8D8D",
    borderBottomWidth: 0.4,
    marginVertical: 20,
    color: "#8D8D8D",
    paddingVertical: 10,
    fontSize: 15,
  },
  calendarModal:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080"
  },
  calendarPicker:{
    // flex: 1,
    backgroundColor: '#FFFFFF',
    width: width*0.8
    // marginTop: 100,
  },
  dateClick:{
    marginVertical: 15,
    borderBottomWidth: 0.4,
    borderBottomColor: '#8D8D8D'
  },
  dateClickText:{
    fontSize: 15,
    color: '#8D8D8D',
    paddingVertical: 10
  },
  dateSelectedText:{
    color: '#333',
  },
  halfDayCheckbox:{
    flex: 1,
    marginBottom:10
  },

  leaveSubmit:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
  },
  leaveSubmitBtn:{
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#98BFDE',
    borderColor: '#98BFDE',
  },
  leaveSubmitText:{
    color: '#FFFFFF',
    fontSize: 18,
    padding: 10
  }

});
