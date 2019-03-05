import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from 'react-native';
import Btn_info from "../../components/Btn_info"
import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


class Card_Top extends React.Component {


    // 滑动tab
    renderScrollableTab() {
        return (

            <View style={{ flex: 1, }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: "space-around" }}>

                    <Btn_info  />
                    <View style={{ padding: 15, }}>

                    <Text style={{ fontSize: 32, color: '#4A667C' }}>{"拉互依"}</Text>
                    </View>

                    <Btn_info   />
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
class Card_Body extends React.Component {


    // 滑动tab
    renderScrollableTab() {
        return (
            <View style={{ flex: 1, padding: 15, flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: "flex-start" }}>
                    <Text style={{ fontSize: 16, color: '#4A667C' }}>{"電話號碼：0955-688-688"}</Text>
                    <Text style={{ fontSize: 16, color: '#4A667C' }}>{"名稱：0955-688-688"}</Text>
                    <Text style={{ fontSize: 16, color: '#4A667C' }}>{"性別：0955-688-688"}</Text>
                    <Text style={{ fontSize: 16, color: '#4A667C' }}>{"職稱：0955-688-688"}</Text>
                    <Text style={{ fontSize: 16, color: '#4A667C' }}>{"常態組別：0955-688-688"}</Text>
                    <Text style={{ fontSize: 16, color: '#4A667C' }}>{"是否全職：0955-688-688"}</Text>



                </View>

            </View>
            ////待實作for迴圈自動填入
        )
    }

    render() {
        return (
            <View style={styles.card_Body}>
                {this.renderScrollableTab()}
            </View>
        );
    }
}


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

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView style={styles.Scrollcontainer}>

                {/* <View style={styles.container}> */}
                <Card_Top />
                <Card_Body />
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
