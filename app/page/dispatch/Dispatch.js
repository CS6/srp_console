///派工頁面
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
  Alert,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { Dropdown } from 'react-native-material-dropdown';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');
const userToken = "778TIlaNHBcW1lwvk3dZ1HuTuPv1";


const items = [
  {
    name: "長老",
    id: 0,
    children: [{
      name: "男",
      id: 10,
    }, {
      name: "女",
      id: 17,
    }, {
      name: "其他",
      id: 13,
    }]
  },
  {
    name: "整房組",
    id: 1,
    children: [{
      name: "Quartz",
      id: 20,
    }, {
      name: "Zircon",
      id: 21,
    }, {
      name: "Sapphire",
      id: 22,
    }, {
      name: "Topaz",
      id: 23,
    }]
  }, {
    name: "餐廳組",
    id: 2,
    children: [{
      name: "A",
      id: 10,
    }, {
      name: "Strawberry",
      id: 17,
    }, {
      name: "Pineapple",
      id: 13,
    }, {
      name: "Banana",
      id: 14,
    }, {
      name: "Watermelon",
      id: 15,
    }, {
      name: "Kiwi fruit",
      id: 16,
    }]
  },
  {
    name: "打工度假",
    id: 3,
    children: [{
      name: "Quartz",
      id: 20,
    }, {
      name: "Zircon",
      id: 21,
    }, {
      name: "Sapphire",
      id: 22,
    }, {
      name: "Topaz",
      id: 23,
    }]
  },
]

const items_work = [
  {
    name: "工作類別",
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



export default class Ｄispatch extends Component {
  static navigationOptions = {

    title: '派工系統',

  };
  // constructor(){
  //   super()
  //   this.state = {
  //     selectedItems: [],
  //   }
  // }
  constructor() {
    super()



    this.state = {
      items: null,
      loading: false,
      selectedItems: [],
      selectedItems2: [],
      selectedItemObjects: [],/////被選取的人員清單
      currentItems: [],
      showDropDowns: false,
      single: false,
      readOnlyHeadings: false,
      highlightChildren: false,
      selectChildren: false,
      hasErrored: false,
      A: null,
      B: null,
      C: null,
      D: null,
      text: null,
      value: null,


    }
    this.termId = 100;
  }



  componentDidMount() {
    const data = fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {//1
      console.log(response);
    }).catch((err) => {//2
      console.error(err);
    });
    // const data = await fetch('https://demojson.herokuapp.com/cart').then(response => response.json());
    this.setState({
      album: data,
    });
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        // Alert.alert(responseJson.movies);

        return responseJson.movies;
      })
      .catch((error) => {

        console.error(error);
      });

  }
  // onGet = () =>fetch('https://mywebsite.com/mydata.json')
  onGet() {


    fetch('https://us-central1-bt-fucking-good.cloudfunctions.net/user', {

      //  fetch('https://facebook.github.io/react-native/movies.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())//1
      .then((jsonData) => {//2
        let title = jsonData.title;
        let description = jsonData.description;
        alert("title:" + title + "description" + description);
      });
  }

  // {
  //   "title": "The Basics - Networking",
  //   "description": "Your app fetched this from a remote endpoint!",
  //   "movies": [
  //     { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
  //     { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
  //     { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
  //     { "id": "4", "title": "Inception", "releaseYear": "2010" },
  //     { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
  //   ]
  // }

  onPost = () => fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    })
  })


  onCancel = () => {
    this.SectionedMultiSelect._removeAllItems()

    this.setState({
      selectedItems: this.state.currentItems,
    })
    console.log(this.state.selectedItems);
  }
  // onSelectedItemsChange = (selectedItems) => {
  //   this.setState({ selectedItems });
  // }
  onSelectedItemsChange = (selectedItems) => {
    const filteredItems = selectedItems.filter(val => !this.state.selectedItems2.includes(val))
    this.setState({ selectedItems: filteredItems })
    console.log(selectedItems)
  }


  renderSelectText = () => {
    const { selectedItemObjects } = this.state;

    return selectedItemObjects.length ?
      `I like ${selectedItemObjects.map((item, i) => {
        let label = `${item.title}, `
        if (i === selectedItemObjects.length - 2) label = `${item.title} and `
        if (i === selectedItemObjects.length - 1) label = `${item.title}.`
        return label
      }).join('')}`
      :
      'Select a fruit'
  }


  onSelectedItemObjectsChange = (selectedItemObjects) => {
    this.setState({ selectedItemObjects })
    D = selectedItemObjects;
    console.warn(selectedItemObjects)
    console.warn(D)

  }

  onChangeValue = () => {
    // Alert.alert(this.group_value);
    // Alert.alert(this.value);

  }
  testFun(){
    this.state.myName='组件被刷新了';
  }
  testForceFun(){
    this.forceUpdate();
  }
 

  JSON_Post = () => {
    // let url = 'https://asia-northeast1-test-cf2e8.cloudfunctions.net/postjson';
    let url = 'https://us-central1-my-fuck-awesome-project.cloudfunctions.net/addWork';
    console.warn(this.A,this.B,this.C,this.text);

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
      body: JSON.stringify({
        // 組別: this.A,
        // 工作類型: this.B,
        // 時段: this.C,
        // 備註: this.text,
        // 人員: this.state.selectedItemObjects,

        "team": this.A,
        "workType": this.B,
        "workTime": this.C,
        "desc": this.text,
        "worker":["778TIlaNHBcW1lwvk3dZ1HuTuPv1"],
        "uid": userToken,

        // "team":"農業組",
        // "workType":"1",
        // "workTime":"上午",
        // "desc":"sds1",
        // "worker":["778TIlaNHBcW1lwvk3dZ1HuTuPv1"],
        // "uid":"778TIlaNHBcW1lwvk3dZ1HuTuPv1"
      })
    }).then((response) => {
      return response.json();
    }).then((jsonData) => {
      console.warn(jsonData);
      console.warn(jsonData.excutionResult);

      
      if (jsonData.excutionResult=="success"){
        Alert.alert ("指派成功",this.A+this.B+this.C+this.text);
        this.forceUpdate();
        }
        else{
          Alert.alert ("指派失敗","請檢查網路與欄位",this.A+this.B+this.C+this.text);
          this.forceUpdate();

        }
    }).catch((err) => {
      console.warn('錯誤:', err);
      Alert.alert ("指派失敗","請檢查網路");
      this.forceUpdate();


    })
  }

  // A:null,
  // B:null,
  // C:null,
  // D:null,
  // text:null,
  // value:null,



  //   get() {
  //     fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.23.12', {
  //         method: 'GET',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         }
  //     }).then((response) => response.json())//1
  //         .then((jsonData) => {//2
  //             let country = jsonData.data.country;
  //             let city = jsonData.data.city;
  //             alert("country:" + country + "-------city:" + city);
  //         });
  // }


  // state = {
  //     // text: 'http://facebook.github.io/react-native/',
  //     // value:null,
  //     AA:null,
  //     BB:null,
  //     CC:null,
  //     DD:null,

  // };
  render() {
    let gender_data = [{
      value: '男',
    }, {
      value: '女',
    }];
    let time_data = [{
      value: '早上',
    }, {
      value: '中午',
    }, {
      value: '下午',
    }, {
      value: '晚上',
    }, {
      value: '夜間',
    }];
    let works_data = [{
      value: '常態工作',
    }, {
      value: '緊急事項',
    }];
    let group_value = null;

    let group_data = [{
      value: '房務組', name: 'ABC',
    }, {
      value: '餐廳組',
    }, {
      value: '生態組',
    }, {
      value: '工程組',
    }, {
      value: '農業組',
    }, {
      value: '修繕組',
    }, {
      value: '交管組',
    }, {
      value: '其他',
    }];
    let if_fulltime_data = [{
      value: '是',
    }, {
      value: '否',
    }];

    return (
      <View style={{ flex: 1 }} >

        <View style={styles.container}>








          {/* <Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
  <Picker.Item label="病假" value="js1" />
  <Picker.Item label="事假" value="js2" />
  <Picker.Item label="喪假" value="js3" />
  <Picker.Item label="公假" value="js4" />
  <Picker.Item label="婚假" value="js5" />
  <Picker.Item label="產假" value="js6" />
  <Picker.Item label="遠端假" value="js7" />
  <Picker.Item label="生理假" value="js8" />
  <Picker.Item label="育嬰假" value="js9" />


</Picker>
   */}
          <Button
            title="更新"
            onPress={() => {
              // this.setState({album: data})
              console.warn(this.state.selectedItemObjects); // gives new value OK

              console.warn(this.A); // gives new value OK
              console.warn(this.B); // gives new value OK
              console.warn(this.C); // gives new value OK\
              console.warn(this.D); // gives new value OK
              console.warn(this.text); // gives new value OK

              this.JSON_Post()


              // onPress={() => { this.onGet()}}




            }}
          />

          <Dropdown
            // ref='picker'
            label='組別'
            data={group_data}
            valueExtractor={({ value }) => value}
            value={this.value}
            onChangeText={(value) => {
              this.A = value;
              //   setTimeout(() => {
              //   console.warn(this.A+"A"); // gives new value OK
              // }, 100);
            }}
          />
          <Dropdown
            label='工作類型'
            data={works_data}
            valueExtractor={({ value }) => value}
            value={this.value}
            onChangeText={(value) => {
              this.B = value;

              //   setTimeout(() => {
              //   console.warn(value); // gives new value OK
              // }, 100);
            }}
          />
          <Dropdown
            label='時段'
            data={time_data}
            valueExtractor={({ value }) => value}
            value={this.value}
            onChangeText={(value) => {
              this.C = value;

              //   setTimeout(() => {
              //   console.warn(value); // gives new value OK
              // }, 100);
            }} />
          <TextInput
            style={styles.TextBox}
            placeholder="備註"
            // onChangeText={(text) => this.setState({text})}

            onChangeText={(text) => { this.text = text; }}

          />


          <SectionedMultiSelect
            // renderSelectText={this.renderSelectText}////顯示選完的
            selectText='All categories'
            ref={SectionedMultiSelect2 => this.SectionedMultiSelect2 = SectionedMultiSelect2}
            colors={{ primary: this.state.selectedItems.length ? 'forestgreen' : 'crimson', }}
            chipColor={{ primary: this.state.selectedItems.length ? 'forestgreen' : 'crimson', }}
            itemBackground={{ primary: this.state.selectedItems.length ? 'crimson' : 'forestgreen', }}
            selectToggleTextColor={{ primary: this.state.selectedItems.length ? 'crimson' : 'forestgreen', }}
            selectedIconComponent={<Icon name={"check-circle"} size={20} style={styles.Icon} />}
            selectToggleIconComponent={
              <View style={styles.instructions} placeholder='備註' onChangeText={(txt) => { this.setState({ key: txt }) }} value={this.state.key}>

                {/* //////// */}
                {/* <Icon>{items[0].children[0].name }</Icon> */}
                <Icon name={"archive"} size={20} color="#Aaa" >人員</Icon>

                {/* //////// */}
              </View>
            }
            // showCancelButton
            // hideSelect={true}
            selectText={this.state.selectedItems.length ? 'Select categories' : 'All categories'}
            noResultsComponent={this.noResults}

            //  cancelIconComponent={<Text style={{color:'white'}}>Cancel</Text>}

            headerComponent={
              <View style={{ padding: 15, position: 'absolute', top: 0, right: 0, zIndex: 99 }}>
                <TouchableOpacity onPress={this.SectionedMultiSelect && this.SectionedMultiSelect._cancelSelection}>
                  <Icon name={"window-close"} size={30} color="#F55" />
                </TouchableOpacity>
              </View>
            }

            cancelIconComponent={
              <Icon
                size={20}
                name="close"
                style={{ color: 'white' }}
              />
            }
            onCancel={this.onCancel}


            // items={items} 
            items={items}
            uniqueKey='id'
            subKey='children'
            selectText='選擇派遣人員'
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
          />




        </View>
        {/* <TouchableOpacity
          underlayColor='rgb(210,260,260)'
          style={{ padding: 10, marginTop: 10, borderRadius: 5, }}
          onPress={this.get}
        >
          <Text >get请求</Text>
        </TouchableOpacity> */}

        <View style={styles.container_Button}>
          {/* <TouchableOpacity
            style={styles.Button}
            onPress={this.getMoviesFromApiAsync}
          >
          // <TouchableOpacity
          //   style={styles.Button}
          //   onPress={() => { this.onGet() }}
          // >
 onPress={() => { this.testForceFun() }}>
            <Text> 註冊 </Text>
          </TouchableOpacity> */}


          <TouchableOpacity
            style={styles.Button}
            onPress={() => { this.JSON_Post() }}
          >
            {/* onPress={() => this.props.navigation.navigate('Home')} */}

            <Text>  指派工作</Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  };

  get() {
    fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.23.12', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())//1
      .then((jsonData) => {//2
        let country = jsonData.data.country;
        let city = jsonData.data.city;
        alert("country:" + country + "-------city:" + city);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFF',
    // backgroundColor: '#6787A0',

    padding: 50
  }, container_Button: {
    flex: 2,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',

    // backgroundColor: '#6787A0',
    // paddingVertical: 50

  },


  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // width: width * 0.7,
    backgroundColor: '#ededed',
    padding: 10,
    margin: 50,
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
  },
  TextBox: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#C5BBB9',
    marginTop: 5,

  }, Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    paddingVertical: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});



