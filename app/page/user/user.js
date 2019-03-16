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

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
// const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";


class Card_Top extends React.Component {


    // 滑动tab
    renderScrollableTab() {
        return (

            <View style={{ flex: 1, }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around" }}>

                    <Btn_info />
                    <View style={{ padding: 15, }}>

                        <Text style={{ fontSize: 32, color: '#4A667C' }}>{"拉互依"}</Text>
                    </View>

                    <Btn_info />
                </View>

            </View>

            ////待實作for迴圈自動填入
        )
    }

    render() {
        return (
            // <View style={styles.card_Top}>
            <View style={styles.card_Top}>

                {this.renderScrollableTab()}
            </View>
        );
    }
}


let info_data;

// class Card_Body extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             phoneNumber: null,
//             jobTitle: null,
//             image: null,
//             name: null,
//             team: null,
//             workingType: null,
//             verified: true,
//             gender: null,
//             value: "",

//             user_info_data: null,
//         };
//     }


//     JSON_Post = () => {
//         let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getUserDetail';
//         fetch(url, {
//             method: 'POST',
//             // headers 加入 json 格式
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             // body 將 json 轉字串送出
//             // body: JSON.stringify({
//             //   email: 'lovef1232e@hexschool.com',
//             //   password: '12345678'
//             // })
//             /*
//              備註: this.text,
//               標題們:this.TE,
//               電話號碼:this.PH,
//               名稱:this.NA,
//               性別:this.SEX,
//               職稱:this.JOB,
//               常態組別:this.NO,
//               是否全職:this.NY,
//             */
//             body: JSON.stringify({

//                 // "gender": this.SEX,
//                 // "team": "team101",
//                 // "workingType": this.NY,
//                 // "name": this.NA,
//                 // "jobTitle": this.JOB,
//                 // "phoneNumber": this.PH,


//                 "uid": "778TIlaNHBcW1lwvk3dZ1HuTuPv1"





//             })
//         }).then((response) => {
//             // info_data=response.json().userData;
//             // this.JSON_bady(response.json().userData);
//             return response.json();
//         }).then((jsonData) => {
//             info_data = jsonData.userData;
//             this.JSON_bady();


//             console.warn(jsonData);
//         }).catch((err) => {
//             console.warn('錯誤:', err);
//         })
//     }
//     JSON_bady = (A) => {
//         // console.warn(jsonData);
//         // console.warn(this.jsonData);
//         console.warn("A " + A + JSON.stringify(info_data));
//         console.warn(JSON.stringify(info_data.phoneNumber));
//         // let user_info_data = JSON.stringify(info_data);
//         this.setState({
//             // user_info_data:info_data,
//             phoneNumber: info_data.phoneNumber,
//             jobTitle: info_data.jobTitle,
//             image: info_data.image,
//             name: info_data.name,
//             team: info_data.team,
//             workingType: info_data.workingType,
//             verified: info_data.verified,
//             gender: info_data.gender,
//         })
//     }
//     // handleChange=(e)=>{
//     //     this.setState({
//     //         value: e.nativeEvent.text
//     //     })


//     // 滑动tab
//     renderScrollableTab() {
//         return (
//             <View style={{ flex: 1, padding: 15, flexDirection: 'row' }}>
//                 <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: "flex-start" }}>
//                     <Text style={{ fontSize: 16, color: '#4A667C' }}>{"電話號碼：" + this.state.phoneNumber}</Text>
//                     <Text style={{ fontSize: 16, color: '#4A667C' }}>{"名稱：" + this.state.name}</Text>
//                     <Text style={{ fontSize: 16, color: '#4A667C' }}>{"性別：" + this.state.gender}</Text>
//                     <Text style={{ fontSize: 16, color: '#4A667C' }}>{"職稱：" + this.state.workingType}</Text>
//                     <Text style={{ fontSize: 16, color: '#4A667C' }}>{"常態組別：" + this.state.team}</Text>
//                     <Text style={{ fontSize: 16, color: '#4A667C' }}>{"是否全職：" + this.state.verified}</Text>
//                     <Text style={styles.text}>{this.state.user_info_data}</Text>

//                     {/* <Text style={styles.text}>{this.state.phoneNumber}</Text>
//                     <Text style={styles.text}>{this.state.jobTitle}</Text>
//                     <Text style={styles.text}>{this.state.image}</Text>
//                     <Text style={styles.text}>{this.state.name}</Text>
//                     <Text style={styles.text}>{this.state.team}</Text>
//                     <Text style={styles.text}>{this.state.workingType}</Text>
//                     <Text style={styles.text}>{this.state.verified}</Text>
//                     <Text style={styles.text}>{this.state.gender}</Text> */}



//                 </View>
//                 <Button
//                     title="更"
//                     onPress={() => {
//                         this.JSON_Post();

//                     }}
//                 />
//                 <Button
//                     title="新2"
//                     onPress={() => {
//                         this.JSON_bady();

//                     }}
//                 />
//             </View>
//             ////待實作for迴圈自動填入
//         )
//     }

//     render() {
//         return (
//             // <View style={styles.card_Body}>
//             //     {this.renderScrollableTab()}
//             // </View>
//             <View >
//                 <TouchableOpacity
//                     style={styles.card_Body}
//                     onPress={() => {
//                         this.JSON_Post();
//                     }}>
//                     {this.renderScrollableTab()}
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }


class Card_Button extends React.Component {


    // 滑动tab
    renderScrollableTab() {
        return (
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
            ////待實作for迴圈自動填入
        )
    }

    render() {
        return (
            <View style={styles.card_Button}>
                {this.renderScrollableTab()}
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
            value: "",
            userToken:"",
            user_info_data: null,
            refreshing: false,
        };
    }
//页面的组件渲染完毕（render）之后执行
// componentDidMount() {
//     this.getStorage().done();
//   }
//   getDefaultProps(){
//     this.JSON_Post();

//   }
//   componentWillMount()  {
//     this.JSON_Post();

//   }
  
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
    console.warn(this.state.userToken);

    let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/getUserDetail';
    fetch(url, {
        method: 'POST',
        // headers 加入 json 格式
        headers: {
            'Content-Type': 'application/json'
        },
        // body 將 json 轉字串送出
        // body: JSON.stringify({
        //   email: 'lovef1232e@hexschool.com',
        //   password: '12345678'
        // })
        /*
         備註: this.text,
          標題們:this.TE,
          電話號碼:this.PH,
          名稱:this.NA,
          性別:this.SEX,
          職稱:this.JOB,
          常態組別:this.NO,
          是否全職:this.NY,
        */
        body: JSON.stringify({

            // "gender": this.SEX,
            // "team": "team101",
            // "workingType": this.NY,
            // "name": this.NA,
            // "jobTitle": this.JOB,
            // "phoneNumber": this.PH,


            // "uid": "778TIlaNHBcW1lwvk3dZ1HuTuPv1"
            "uid": this.state.userToken





        })
    }).then((response) => {
        // info_data=response.json().userData;
        // this.JSON_bady(response.json().userData);
        return response.json();
    }).then((jsonData) => {
        info_data = jsonData.userData;
        this.JSON_body();
        console.warn(jsonData);
        if (jsonData.excutionResult == "success") {
            // Alert.alert("更新成功");
            this.setState({ refreshing: false });
            // this.forceUpdate();
          }
          else {
            Alert.alert("更新失敗", "請檢查網路");
            this.setState({ refreshing: false });
            // this.forceUpdate();
          }
    }).catch((err) => {
        console.warn('錯誤:', err);
        Alert.alert("更新失敗錯誤", "請檢查網路");
        this.setState({ refreshing: false });
    })
}
JSON_body = (A) => {
    // console.warn(jsonData);
    // console.warn(this.jsonData);
    console.warn("A " + A + JSON.stringify(info_data));
    console.warn(JSON.stringify(info_data.phoneNumber));
    // let user_info_data = JSON.stringify(info_data);
    this.setState({
        // user_info_data:info_data,
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
                    {/* <View style={styles.container}> */}
                    <Card_Top />

       
            <Button
              title="新2"
              onPress={() => {
                // this._retrieveData();
                this.getStorage().done();

              }}
            />

                    {/* <Card_Body /> */}
                    <CardUserInfo
                        phoneNumber={this.state.phoneNumber}
                        name={this.state.name}
                        gender={this.state.gender}
                        workingType={this.state.workingType}
                        team={this.state.team}
                        verified={this.state.verified} />
                    <Card_Button />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     backgroundColor: '#ff9966',
    // },

    Scrollcontainer: {
        flex: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }, card_Top: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.9,
        height: width * 0.2,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',


        marginHorizontal: 10,
    },
    //  card_Top: {
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: width * 0.9,
    //     height: width * 0.3,
    //     backgroundColor: '#7094B1',
    //     borderRadius: 10,
    //     marginVertical: 10,
    //     shadowColor: '#000000',
    //     shadowRadius: 8,
    //     shadowOpacity: 0.4,
    //     elevation: 8,
    //     shadowOffset: {
    //         width: 0,
    //         height: 4
    //     },
    //     marginHorizontal: 10,
    // },

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
        marginHorizontal: 10,
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
        marginHorizontal: 10,
    },
});
