import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import Card from './Card';


export default class CardUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: props.phoneNumber
    };
}
componentWillReceiveProps(nextProps) {
    this.setState({someThings: nextProps.phoneNumber});
}
  render() {
    return (
      <View >
        <Card body={
          <View style={{ flex: 1,paddingVertical:15}}>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: "flex-start" , alignItems:"flex-start" }}>
              <Text style={{ fontSize: 16, color: '#4A667C' }}>{"電話號碼：" + this.props.phoneNumber}</Text>

              <Text style={{ fontSize: 16, color: '#4A667C' }}>{"名稱：" + this.props.name}</Text>
              <Text style={{ fontSize: 16, color: '#4A667C' }}>{"性別：" + this.props.gender}</Text>
              <Text style={{ fontSize: 16, color: '#4A667C' }}>{"職稱：" + this.props.workingType}</Text>
              <Text style={{ fontSize: 16, color: '#4A667C' }}>{"常態組別：" + this.props.team}</Text>
              <Text style={{ fontSize: 16, color: '#4A667C' }}>{"是否全職：" + this.props.verified}</Text>
            </View>
          </View>
        } />
      </View>
    );
  }
}


{/*Ex
  <CardNotice infoTitle={} infoBody={}/> 
  <CardNotice infoTitle={msg.announcement[1].title} infoBody={msg.announcement[2].detail}/> 

*/}
//style={[styles.card]}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    padding: 15,
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
  }
});