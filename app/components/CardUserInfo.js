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
      <View>
        <View style={styles.CardTitle}>
          <Text style={styles.CardTitleText}>{"個人訊息"}</Text>
        </View>
        <Card body={
          <View style={styles.CardUserInfo}>
            <Text style={styles.CardUserInfoText}>{"名稱：" + this.props.name}</Text>
            <Text style={styles.CardUserInfoText}>{"性別：" + this.props.gender}</Text>
            <Text style={styles.CardUserInfoText}>{"職稱：" + this.props.workingType}</Text>
            <Text style={styles.CardUserInfoText}>{"電話號碼：" + this.props.phoneNumber}</Text>
            <Text style={styles.CardUserInfoText}>{"常態組別：" + this.props.team}</Text>
            <Text style={styles.CardUserInfoText}>{"是否全職：" + this.props.verified}</Text>
          </View>
        } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CardTitle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  CardTitleText:{
    fontSize: 22, 
    color: '#4A667C'
  },
  CardUserInfo: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: "flex-start" , 
    alignItems:"flex-start",
  }, 
  CardUserInfoText: { 
    fontSize: 16, 
    color: '#4A667C',
    paddingVertical: 5
  }
});