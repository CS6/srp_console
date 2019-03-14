import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  Picker,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SafeAreaView, } from 'react-navigation';
///此為請假頁面
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

const items = [
  {
    name: "假別",
    id: 0,
    children: [{
      name: "病假",
      id: 20,
    }, {
      name: "事假",
      id: 21,
    }, {
      name: "喪假",
      id: 22,
    }, {
      name: "公假",
      id: 24,
    }, {
      name: "婚假",
      id: 25,
    }, {
      name: "產假",
      id: 26,
    }, {
      name: "遠端假",
      id: 27,
    }, {
      name: "生理假",
      id: 28,
    }, {
      name: "育嬰假",
      id: 29,
    }, {
      name: "其他",
      id: 30,
    }]
  },
]
export class EXPLine extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }
  //改用陣列取文字值
  render() {
    return (


      <View style={styles.textLine}>
        <Text style={styles.CHfont}> 專</Text>
        <Text style={styles.CHfont}> 為</Text>
        <Text style={styles.CHfont}> 數</Text>
        <Text style={styles.CHfont}> 位</Text>
        <Text style={styles.CHfont}> 遊</Text>
        <Text style={styles.CHfont}> 牧</Text>
        <Text style={styles.CHfont}> 打</Text>
        <Text style={styles.CHfont}> 造</Text>
        <Text style={styles.CHfont}> 的</Text>
        <Text style={styles.CHfont}> 共</Text>
        <Text style={styles.CHfont}> 同</Text>
        <Text style={styles.CHfont}> 公</Text>
        <Text style={styles.CHfont}> 作</Text>
        <Text style={styles.CHfont}> 空</Text>
        <Text style={styles.CHfont}> 間</Text>
      </View>

    );
  };
}

let longString = "安安專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡";
export class TitleLine extends Component {

  render() {
    //ㄥstring result = "Jack and JACK or Jack";
    let lineText = 24;//每行文字數量

    //result =  result.Replace("Jack", "Marry");
    // var list = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    // var name = "Mark Zuckerberg";
    let longText = "Monospace 共同工作空間";
    longText = longText.replace(new RegExp("。", "g"), "Ｏ");

    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{
        //height: 500, with: 500,        flex: 1, 
        alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20,marginRight: 20
      }}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }

          if (longText[index] == " ") {
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>[]</Text>
          </View>          }
          else{
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>   {longText[index]}  </Text>
          </View>
          }

          
        })}
      </View>
    );
  }
}
export class Line extends Component {

  render() {
    //ㄥstring result = "Jack and JACK or Jack";
    let lineText = 24;//每行文字數量

    //result =  result.Replace("Jack", "Marry");
    // var list = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    // var name = "Mark Zuckerberg";
    let longText = "  專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡飲品皆免費供應。";
    longText = longText.replace(new RegExp("。", "g"), "Ｏ");

    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{
        height: 500, with: 500,
        flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20
      }}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }

          if (longText[index] == " ") {
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>[]</Text>
          </View>          }
          else{
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>   {longText[index]}  </Text>
          </View>
          }

          
        })}
      </View>
    );
  }
}
export class Line2 extends Component {

  render() {
    //ㄥstring result = "Jack and JACK or Jack";
    let lineText = 24;//每行文字數量

    //result =  result.Replace("Jack", "Marry");
    // var list = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    // var name = "Mark Zuckerberg";
    let longText = "  專為數位游牧打造的共享辦公室，咖啡飲品皆免費供應。";
    // longText = longText.replace(new RegExp("。", "g"), "Ｏ");

    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{
        height: 500, with: 500,
         alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginVertical: 20, marginLeft: 20
      }}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }
          
          if (longText[index] == " ") {
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>[]</Text>
          </View>          }
          else if (longText[index] == "，") {
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>[，]</Text>
          </View>          }
          else{
            return <View style={{ textAlign: "center", borderWidth: 1, }}>

            <Text style={styles.CHfont}>   {longText[index]}  </Text>
          </View>
          }

          
        })}
      </View>
    );
  }
}

export class Img extends Component {

  render() {
    // var list = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    // var name = "Mark Zuckerberg";
    let longText = "專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡飲品皆免費供應。";
    // list[longText.length] = {};
    let list = longText.split('');
    return (
      <View style={{ height: 500, with: 500, flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column", flexWrap: "wrap-reverse", marginTop: 180, marginLeft: 20 }}>
        {list.map(function (val, index) {
          // if (name.length > 5) {
          //     name = name.substr(0, 5);
          // }
          return <View style={{ textAlign: "center", width: 49, borderWidth: 2, borderColor: "#000", borderStyle: "solid" }}>

            <Text style={{ textAlign: "center", fontSize: 10, weight: "bold", color: "#FFFFFF", width: 49 }}>   {longText[index]} {index}{longText.length} </Text>
          </View>
        })}
      </View>

  // <View style={styles.textLine}>
  //   <Text style={styles.CHfont}>{longString[0]}</Text>
  //   <Text style={styles.CHfont}>{longString[1]}</Text>            
  //   <Text style={styles.CHfont}>{longString[2]}</Text>
  //   <Text style={styles.CHfont}>{longString[3]}</Text>
  //   <Text style={styles.CHfont}>{longString[4]}</Text>            
  //   <Text style={styles.CHfont}>{longString[5]}</Text>
  //   <Text style={styles.CHfont}>{longString[6]}</Text>
  //   <Text style={styles.CHfont}>{longString[7]}</Text>
  //   <Text style={styles.CHfont}>{longString[8]}</Text>
  //   <Text style={styles.CHfont}>{longString[9]}</Text>
  //   <Text style={styles.CHfont}>{longString[10]}</Text>
  //   <Text style={styles.CHfont}>{longString[11]}</Text>
  //   <Text style={styles.CHfont}>{longString[12]}</Text>
  //   <Text style={styles.CHfont}>{longString[13]}</Text>
  //   <Text style={styles.CHfont}>{longString[14]}</Text>
  // </View>
    );
  }
}

export class ListLine extends Component {


  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }
  //改用陣列取文字值
  render() {
    return (


      <View style={styles.textLine}>
        <Text style={styles.CHfont}>{longString[0]}</Text>
        <Text style={styles.CHfont}>{longString[1]}</Text>
        <Text style={styles.CHfont}>{longString[2]}</Text>
        <Text style={styles.CHfont}>{longString[3]}</Text>
        <Text style={styles.CHfont}>{longString[4]}</Text>
        <Text style={styles.CHfont}>{longString[5]}</Text>
        <Text style={styles.CHfont}>{longString[6]}</Text>
        <Text style={styles.CHfont}>{longString[7]}</Text>
        <Text style={styles.CHfont}>{longString[8]}</Text>
        <Text style={styles.CHfont}>{longString[9]}</Text>
        <Text style={styles.CHfont}>{longString[10]}</Text>
        <Text style={styles.CHfont}>{longString[11]}</Text>
        <Text style={styles.CHfont}>{longString[12]}</Text>
        <Text style={styles.CHfont}>{longString[13]}</Text>
        <Text style={styles.CHfont}>{longString[14]}</Text>
      </View>

    );
  };
}

export default class Request extends Component {
  static navigationOptions = {

    title: '我要請假',

  };
  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }
  componentDidMount() {
    //检测网络是否连接
    // this.scrollView.scrollTo({ x: 0 })

    // this.scrollView.scrollTo({ x: 0, y: 0, animated:true});

  }
  
 
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>

          {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
          {/* ///TOP */}
          <View style={styles.TopContent}>
            <Text>Request Screen</Text>
          </View>
          <View style={styles.bodyContent}>
            {/* ///TITLE */}
            <ScrollView    
 horizontal={true}scrollsToTop={true}
            // showsHorizontalScrollIndicator={false}  // 隐藏水平指示器
            showsVerticalScrollIndicator={false}    // 隐藏垂直指示器
            pagingEnabled={true}    // 开启分页功能
            
            pinchGestureEnabled={true}    // 滾動型會允許用戶使用雙指縮放操作
            //  style={{flexDirection: "row-reverse",}}
            >

         

            <View style={styles.textContent}>


              {/* 內文 */}
              <TitleLine/>
              <Line/>
              <Line2/>
              <Line2/>

              <Line2/>

              <Line2/>
              <Line/>
              <Line2/>
              <Line2/>

            </View>
            </ScrollView>


          </View>




        </View>
      </SafeAreaView>


    );
  };
}

{/* <View style={styles.textLine}>
              <Text style={styles.CHfont}> 專</Text>
              <Text style={styles.CHfont}> 為</Text>            
              <Text style={styles.CHfont}> 數</Text>
              <Text style={styles.CHfont}> 位</Text>
              <Text style={styles.CHfont}> 遊</Text>            
              <Text style={styles.CHfont}> 牧</Text>
              <Text style={styles.CHfont}> 打</Text>
              <Text style={styles.CHfont}> 造</Text>
              <Text style={styles.CHfont}> 的</Text>
              <Text style={styles.CHfont}> 共</Text>
              <Text style={styles.CHfont}> 同</Text>
              <Text style={styles.CHfont}> 公</Text>
              <Text style={styles.CHfont}> 作</Text>
              <Text style={styles.CHfont}> 空</Text>
              <Text style={styles.CHfont}> 間</Text>
            </View> */}

{/* 專為數位游牧打造的共享辦公室，遠眺大台中城市景色的高樓視野，靜謐的工作環境充滿療癒的綠色植栽，舒適與友善的社群友善空間，提供新創團隊的工作氛圍，咖啡  */ }



const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
  }, textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaeb23',
  }, textLine: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCaa',
  }, CHfont: {
    // textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    // width: 49,
    // flex: 1,
    //justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5ACaB',
  },
  TopContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: '#ffa',
  }, bodyContent: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row-reverse",
    backgroundColor: '#aaaaaa',
  }, TitleContent: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: "column",
    backgroundColor: '#23aaeD',
  }, textContent: {
    flex: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
     flexDirection: "row-reverse",
    backgroundColor: '#23aaaa',
  },







  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  },
  navLeft: {
    alignItems: 'center',
    marginLeft: 10,
  },
  navRight: {
    alignItems: 'center',
    marginRight: 10,
  },
  navIcon: {
    height: 20,
    width: 20,
  },
  navText: {
    fontSize: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    backgroundColor: '#ededed',
    borderRadius: 5,
    height: 30,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#666',
    fontSize: 14,
  },
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width: width / 8,
    marginLeft: 6
  }

});