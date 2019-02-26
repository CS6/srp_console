import React from 'react';
import {
  Button, StyleSheet, AsyncStorage,
  TouchableOpacity, Image, Alert, Text, View, Dimensions,ImageBackground
} from 'react-native';
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Login extends React.Component {

  constructor(props) {
    super(props);
    // 構建的時候設置初始值
    this.state = { pressStatus: 'normal' ,compmentStatus:true};
  }
  _onPressIn() {
    // 設置不同的狀態
    this.setState({ pressStatus: 'pressin' });
  }
  _onPressOut() {

    // 設置不同的狀態

    this.setState({ pressStatus: 'normal' });
  }

  _onPress_A() {

    // 設置不同的狀態
    this.setState({ compmentStatus: !this.state.compmentStatus}) 
    // this.setState({ compmentStatus: false });
  }

  _onPress_B() {

    // 設置不同的狀態
    this.setState({ compmentStatus: !this.state.compmentStatus}) 
    // this.setState({ compmentStatus: false });
  }


  state = {
    key: '',
    value: '',
    data: '\n',
  }


  _retrieveData = async () => {
    try {

      // this.props.navigation.push('Home') 


    } catch (error) {
      // Error retrieving data
      Alert.alert('錯誤');

    }
  }


  render() {
    return (
      <View>


{this.state.compmentStatus ?
  <View style={styles.Button}>
   <Text style={styles.searchContent}>456</Text>
</View>
: 
<View style={styles.Button}>
<Text style={styles.searchContent}>123</Text>
</View>
}
{/* <Text style={styles.searchContent}>123</Text> */}


        <TouchableOpacity
          // 將自定義的方法bind 到button 對應的不同的狀態方法上
          onPressIn={this._onPressIn.bind(this)}
          onPressOut={this._onPressOut.bind(this)}
          // 將pressin 時候的透明效果刪除
          activeOpacity={1} style={styles.loginButton}>
          {/* <Image source={
            this.state.pressStatus == 'pressin' ? { uri: 'login_btn_selected' } : { uri: 'login_btn_disabled' }
          } */}
           <ImageBackground source={
            this.state.pressStatus == 'pressin' ? { uri: 'https://unsplash.it/800/600?random' } : { uri: 'https://unsplash.it/800/600?random&blur' }
          }
            style={{ height: 33, borderRadius: 5 }} >
            <Text style={{ color: 'white', fontSize: 13, textAlign: 'center', alignSelf: 'center', marginTop: 10 }
            }>登錄</Text>
          </ImageBackground>
        </TouchableOpacity>


        {/* <TouchableOpacity onPress={this._retrieveData}> */}


        <TouchableOpacity 
                onPressOut={this._onPress_B.bind(this)}>



          <View style={styles.Button}>
          <Text style={styles.searchContent}>

          {this.state.compmentStatus ? 'F': 'T'}
          </Text>
            {/* <Text style={styles.searchContent}>登入</Text> */}
            <Text style={styles.searchContent}>嘎哩給GAY</Text>

          </View>
        </TouchableOpacity>

      </View>

    );
  }
}
//using
// <Login pressStatus = 'normal' />




const styles = StyleSheet.create({
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#7094B1',
    fontSize: 20,
  },
});


// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Login);