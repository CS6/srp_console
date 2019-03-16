import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
import CardColor from './CardColor';

export default class CardToDo extends Component {
  render() {
    return (
      <View >
        <CardColor style={{backgroundColor: '#7094B1'}} body={
          <View style={{ flex: 1,paddingVertical:15 }}>

            <View style={{ flex: 1, flexDirection: 'row',width:width*0.8,justifyContent: "space-around" }}>
              <Text style={{ fontSize: 42, color: '#FFFFFF', paddingRight: 15 }}>{this.props.team}</Text>
              <Text style={{ fontSize: 22, color: '#FFFFFF', paddingLeft: 15, paddingVertical: 10 }}>{this.props.desc}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: "flex-start" }}>
              <Text style={{ fontSize: 22, color: '#FFFFFF', paddingLeft: 15, paddingVertical: 10 }}>{"共事人員"}</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 14, flex: 1, lineHeight: 24, justifyContent: 'center', alignItems: 'center' }}>{this.props.worker}</Text>
            </View>

          </View>
        } />

      </View>
    );
  }
}

//import CardToDo from '../../components/CardToDo';

{/*Ex
  <CardToDo infoTitle={} infoBody={}/> 
  <CardToDo infoTitle={msg.announcement[1].title} infoBody={msg.announcement[2].detail}/> 

*/}
//style={[styles.card]}


const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    padding: 15,
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
  }
});