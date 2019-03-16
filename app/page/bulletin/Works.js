import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
  Button,
  AsyncStorage,
  RefreshControl,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';
import CardToDo from '../../components/CardToDo';
import CardMemo from '../../components/CardMemo';
import CardShowLog from '../../components/CardShowLog';


// const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";



// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');



export default class Works extends Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
      userToken: "",
      worker:"",
      workAssignment: [
        {
          "desc": "範例不工作",
          "modifyTime": {
            "_seconds": 1552671263,
            "_nanoseconds": 458000000
          },
          "modifyUser": "778TIlaNHBcW1lwvk3dZ1HuTuPv1",
          "team": "生態組",
          "worker": [
            "範例不工作",
            "範例不工作"
          ]
        }
      ]
    };
  }
  componentDidMount() {
    //检测网络是否连接

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
      }
    } catch (error) {
      console.log(error);
    }
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.JSON_Post();

    // this.setState({refreshing: false});
  }
  JSON_Post = () => {
    // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
    let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getWork';

    fetch(url, {
      method: 'POST',
      // headers 加入 json 格式
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        "uid": this.state.userToken
        // "uid": "778TIlaNHBcW1lwvk3dZ1HuTuPv1"
      })
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.warn(jsonData);
      console.warn(jsonData.excutionResult);
      if (jsonData.excutionResult == "success") {
        Alert.alert("更新成功");
        // this.setState({ refreshing: false });
        this.setState({
          refreshing: false,
          workAssignment: jsonData.workAssignment,
          // worker:jsonData.workAssignment[0].worke[0]
        });

        // this.forceUpdate();
      }
      else {
        Alert.alert("更新失敗", "請檢查網路");
        this.setState({ refreshing: false });
        // this.forceUpdate();
      }
    }).catch((err) => {
      console.warn('錯誤:', err);
      Alert.alert("錯誤", "請檢查網路");
      this.setState({ refreshing: false });
      // this.forceUpdate();
    })
  }


  // _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@MySuperStore:key');
  //     if (value !== null) {
  //       // We have data!!
  //       console.warn(value);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.Scrollcontainer}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh} />}>



          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Card_Top/> */}
            {/*        
            <Button
              title="新2"
              onPress={() => {
                // this._retrieveData();
                this.getStorage().done();

              }}
            /> */}
            <CardToDo
              team={this.state.workAssignment[0].team}
              desc={this.state.workAssignment[0].desc}
              worker={
                this.state.workAssignment[0].worker[0]+" "+
                this.state.workAssignment[0].worker[1]+" "+
                this.state.workAssignment[0].worker[2]+" "+
                this.state.workAssignment[0].worker[3]+" "+
                this.state.workAssignment[0].worker[4]+" "+
                this.state.workAssignment[0].worker[5]+" "
                
                } />
            <CardMemo />
            <CardShowLog />
            {/* <Card_Body/> */}
            {/* <Card_Button/> */}
            {/* <Text   >Home!</Text>
            <Icon name="battery-full" size={30} color="#6787A0" />
            <Icon name="battery-three-quarters" size={30} color="#900" />
            <Icon name="battery-half" size={30} color="#900" />
            <Icon name="battery-quarter" size={30} color="#900" />
            <Icon name="battery-empty" size={30} color="#900" />
            <Icon name="bed" size={30} color="#900" />
            <Icon name="american-sign-language-interpreting" size={30} color="#777" /> */}
          </View>
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
    backgroundColor: '#FFFFFF',


  },
  Scrollcontainer: {
    flex: 1,
    padding: 10,




  }, centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  card_Top: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.55,
    backgroundColor: '#7094B1',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
  }, card_Body: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.3,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
  },
  card_Button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.45,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
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
    shadowOffset: {
      width: 0,
      height: 4
    }
  },
});