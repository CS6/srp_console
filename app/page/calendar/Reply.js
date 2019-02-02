
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
      // id: 20,
    }, {
      profile_icon: require('../../img/account.png'),
      profile_name: "拉互依",
      leave_type: "假別",
      // id: 20,
    }, {
      profile_icon: require('../../img/account.png'),
      profile_name: "拉互依",
      leave_type: "假別",
      // id: 20,
    },]
  },
]


class Card extends React.Component {
  // 滑动tab

  constructor(props) {
    super(props);
    this.state = { isChecked: false };
  }

  renderScrollableTab() {
    return (
      <View style={styles.cardContent}>
        <View style={styles.cardItemImg}>
          <Image style={styles.profileImg} source={items_Text[0].children[0].profile_icon} />
        </View>
        <View style={styles.cardItemText}>
          <Text style={styles.profileText}>{items_Text[0].children[0].profile_name}</Text>
          <Text style={styles.profileText}>{items_Text[0].children[0].leave_type}</Text>
        </View>
        <View style={styles.cardItemCheckBox}>
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
        </View>

      </View>
      ////待實作for迴圈自動填入
    )
  }

  render() {
    return (
      <View style={styles.card}>
        {this.renderScrollableTab()}
      </View>
    );
  }
}


export default class VerifyLeave extends Component {
  constructor() {
    super();
    this.state = {};
  }
  _getAll() { }
  onSuccess(e) {
    Linking.openURL(e.data).catch(err => console.error('An error occured', err));
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
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#6787A0',
    // padding: 20
  },
  Scrollcontainer: {
    flex: 1,
    padding: 10,
  },
  profileText: {
    fontSize: 20,
  },
  profileImg: { 

  },
  cardContent:{
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  cardItemImg:{
    flex:1,    
    alignItems: 'center', 
    justifyContent: 'center'
  },
  cardItemText:{
    flex: 3, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly'
  },
  cardItemCheckBox:{
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  card: {
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.3,
    // backgroundColor: '#ededed',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 0
    },
  },
  ButtonCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.3,
    height: width * 0.6,
    backgroundColor: '#ededed',
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.6,
    elevation: 8,
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
});