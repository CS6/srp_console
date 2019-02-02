
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake IOS 878787for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    let gender_data = [{
      value: '男',
    }, {
      value: '女',
    }];
    let group_data = [{
      value: '房務組',
    }, {
      value: '廚房組',
    }];
    let if_fulltime_data = [{
      value: '是',
    }, {
      value: '否',
    }];
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        <TextInput
          style={styles.TextBox}
          placeholder="電話號碼"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={styles.TextBox}
          placeholder="名稱"
          onChangeText={(text) => this.setState({text})}
        />
        <Dropdown
          label='性別'
          data={gender_data}
        />
        <TextInput
          style={styles.TextBox}
          placeholder="職稱"
          onChangeText={(text) => this.setState({text})}
        />
        <Dropdown
          label='常態組別'
          data={group_data}
        />
        <Dropdown
          label='是否全職'
          data={if_fulltime_data}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
        <Text> 註冊 </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#6787A0',
    padding: 50
  },
  TextBox: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C5BBB9'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 25,
    margin: 50
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
});