import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    Button,
    ScrollView,
    RefreshControl,
    AsyncStorage,
    Alert
} from 'react-native';
import Btn_info from "../../components/Btn_info"
import { SafeAreaView, } from 'react-navigation';
import CardUserInfo from '../../components/CardUserInfo';
import CardUserLeave from '../../components/CardUserLeave';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
// const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";
const img = require('../../img/account.png');
let info_data;

class Card_Top extends React.Component {
    render() {
        return (
            <View style={styles.card_Top}>
                <Image style={styles.profileImg} source={img} />
                <Text style={{ padding: 15, fontSize: 32, color: '#4A667C' }}>{"拉互依"}</Text>
                <Btn_info />
            </View>
        );
    }
}


class Card_Button extends React.Component {
    render() {
        return (
            <View style={styles.card_Button}>
                <View style={{ flex: 1, padding: 15, flexDirection: 'column', justifyContent: 'center', }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, color: '#4A667C', justifyContent: 'center', flexDirection: 'column' }}>{"假單狀況"}</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: "flex-start" }}>
                        <Text style={{ fontSize: 16, color: '#4A667C' }}>{"電話號碼：0955-688-688"}</Text>
                        <Text style={{ fontSize: 16, color: '#4A667C' }}>{"電話號碼：0955-688-688"}</Text>
                        <Text style={{ fontSize: 16, color: '#4A667C' }}>{"電話號碼：0955-688-688"}</Text>
                        <Text style={{ fontSize: 16, color: '#4A667C' }}>{"電話號碼：0955-688-688"}</Text>
                    </View>

                </View>
            </View>
        );
    }
}

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: null,
            jobTitle: null,
            image: null,
            name: null,
            team: null,
            workingType: null,
            verified: true,
            gender: null,
            userToken: "",
            refreshing: false,
        };
    }
    //页面的组件渲染完毕（render）之后执行
    _onRefresh = () => {
        this.setState({refreshing: true});
        this.JSON_Post();
     
          // this.setState({refreshing: false});
      }
     
      componentDidMount() {
     
        this.getStorage().done();
        console.warn('IN the USER' );
     
     
      }
     
     
      getStorage = async () => {
        try {
          const value = await AsyncStorage.getItem('userToken');
          if (value !== null) {
            console.warn(value);
            this.setState({ userToken: value });
            this.JSON_Post();
            console.warn('IN the USER2' );
     
            console.warn('USER', await AsyncStorage.getItem('userToken'));
          }
        } catch (error) {
          console.log(error);
        }
      }


    JSON_Post = () => {
        let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getUserDetail';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "uid": this.state.userToken
            })
        }).then((response) => {
            return response.json();
        }).then((jsonData) => {
            info_data = jsonData.userData;
            this.JSON_body();
            // console.warn(jsonData);
            if (jsonData.excutionResult == "success") {
                this.setState({ refreshing: false });
            }
            else {
                Alert.alert("更新失敗", "請檢查網路");
                this.setState({ refreshing: false });
            }
        }).catch((err) => {
            console.warn('錯誤:', err);
            Alert.alert("更新失敗", "請檢查網路");
            this.setState({ refreshing: false });
        })
    }
    JSON_body = (A) => {
        // console.warn("A " + A + JSON.stringify(info_data));
        // console.warn(JSON.stringify(info_data.phoneNumber));
        this.setState({
            phoneNumber: info_data.phoneNumber,
            jobTitle: info_data.jobTitle,
            image: info_data.image,
            name: info_data.name,
            team: info_data.team,
            workingType: info_data.workingType,
            verified: info_data.verified,
            gender: info_data.gender,
        })
    }
    render() {
        return (
            <View style={styles.container}>

                <ScrollView style={styles.Scrollcontainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh} />}>
                    <Card_Top />


                    {/* <Button
                        title="新2"
                        onPress={() => {
                            // this._retrieveData();
                            this.getStorage().done();

                        }}
                    /> */}

                    {/* <Card_Body /> */}
                    <CardUserInfo
                        phoneNumber={this.state.phoneNumber}
                        name={this.state.name}
                        gender={this.state.gender}
                        workingType={this.state.workingType}
                        team={this.state.team}
                        verified={this.state.verified} />
                    {/* <Card_Button /> */}
                    {/* <CardUserLeave /> */}
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Scrollcontainer: {
        flex: 1,
        // padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    profileImg: {
        width: 30,
        height: 30
      },
    card_Top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // width: width * 0.9,
        height: width * 0.2,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        // marginHorizontal: width * 0.05,
    },
    card_Body: {
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
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 4
        },
        // marginHorizontal: 10,
    },
    card_Button: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.9,
        height: width * 0.7,
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
        // marginHorizontal: 10,
    },
});
