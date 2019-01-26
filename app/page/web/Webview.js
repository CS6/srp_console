import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    WebView,

} from 'react-native';
import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class otherpage extends Component {

    render() {
        return (
            <WebView
            // source={{uri: 'https://jiimmysu.github.io/in-app-browser-test/'}}
            source={{uri: 'https://codepen.io/Chokcoco/pen/MoRGYj'}}

            
            // source={{uri: 'https://www.google.com.tw/maps/@24.1397323,120.6878903,15z?hl=zh-TW&authuser=0'}}
            
        // source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});