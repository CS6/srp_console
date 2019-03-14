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
  Picker,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import Calendar from 'react-native-calendar-select';
import { SafeAreaView, } from 'react-navigation';
///此為請假頁面
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

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
      isChecked: false,
      startDate: new Date(2017, 6, 12),
      endDate: new Date(2017, 8, 2)  
    };
    this.confirmDate = this.confirmDate.bind(this);
    this.openCalendar = this.openCalendar.bind(this);
  }

  confirmDate({startDate, endDate, startMoment, endMoment}) {
    this.setState({
      startDate,
      endDate
    });
  }

  openCalendar() {
    this.calendar && this.calendar.open();
  }

  renderApplyLeaveForm() {
    let customI18n = {
      'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      'text': {
        'start': 'Check in',
        'end': 'Check out',
        'date': 'Date',
        'save': 'Confirm',
        'clear': 'Reset'
      },
      'date': 'DD / MM'  // date format
    };
    let color = {
      subColor: '#f0f0f0'
    };
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
          />
          </View>
          <View style={styles.formInputGroup}>
            <TextField
              // style={styles.formTextbox}
              label="請假理由"
              onChangeText={(txt) => { this.setState({ key: txt }) }}
              value={this.state.key} />
          </View>
          
          <View>
          <Button title="Open Calendar" onPress={this.openCalendar}/>
          <Calendar
            i18n="en"
            ref={(calendar) => {this.calendar = calendar;}}
            customI18n={customI18n}
            color={color}
            format="YYYYMMDD"
            minDate="20170510"
            maxDate="20180312"
            singleDate={true}
            onConfirm={this.confirmDate}
          />
          
          </View>
        </View>
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
  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.Scrollcontainer}>
          <ApplyLeaveForm />
        </ScrollView>

        {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.container}></View>
        </View> */}
      </SafeAreaView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }, 
  Scrollcontainer: {
    flex: 1,
    padding: 80
  },
  formContent:{
    flex: 1,
    // flexDirection: "column",
    // alignItems: "center",
    marginVertical: 30,
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
  formTextbox: {
    borderBottomColor: "#C6C6C6",
    borderBottomWidth: 1,
    color: "#C6C6C6"
  },


});



