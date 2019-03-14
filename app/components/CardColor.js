import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

//https://www.styled-components.com/docs
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
//  var props.BG_Color = '#FFFFFF'

export default class CardColor extends Component {
  render() {
    return (
      <View style={[styles.CardColor,]}>
        {this.props.body}
      </View>
    );
  }
}


{/*Ex
  <Card body={
  <View style={{ flex: 1, }}>
    <Text style={{ fontSize: 22, }}>HI</Text>
  </View>
}/> */}


const styles = StyleSheet.create({
  CardColor: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor:'#7094B1',
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOpacity: 0.4,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    marginHorizontal: 10,
  }
});