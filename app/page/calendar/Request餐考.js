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
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

const items = [
  {  
    name: "性別",
    id: 0,
    children: [{
        name: "A",
        id: 10,
      },{
        name: "Strawberry",
        id: 17,
      },{
        name: "Pineapple",
        id: 13,
      },{
        name: "Banana",
        id: 14,
      },{
        name: "Watermelon",
        id: 15,
      },{
        name: "Kiwi fruit",
        id: 16,
      }]
  },
  {
    name: "假別",
    id: 1,
    children: [{
        name: "Quartz",
        id: 20,
      },{
        name: "Zircon",
        id: 21,
      },{
        name: "Sapphire",
        id: 22,
      },{
        name: "Topaz",
        id: 23,
      }]
  },
]


export default class Request extends Component {
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
      selectedItemObjects: [],
      currentItems: [],
      showDropDowns: false,
      single: false,
      readOnlyHeadings: false,
      highlightChildren: false,
      selectChildren: false,
      hasErrored: false,
    }
    this.termId = 100;
  }
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
    state = {
        text: 'http://facebook.github.io/react-native/',
    };
    render() {
        return (
          <SafeAreaView style={styles.container}>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.container}>
  
            <Text>Request Screen</Text>
            <View style={styles.container}>



        <SectionedMultiSelect
          // renderSelectText={this.renderSelectText}////顯示選完的
          selectText='All categories'
          ref={SectionedMultiSelect2 => this.SectionedMultiSelect2 = SectionedMultiSelect2}
          colors={{ primary: this.state.selectedItems.length ? 'forestgreen' : 'crimson',}}
          chipColor={{ primary: this.state.selectedItems.length ? 'forestgreen' : 'crimson',}}
          itemBackground={{ primary: this.state.selectedItems.length ? 'crimson' : 'forestgreen',}}
          selectToggleTextColor={{ primary: this.state.selectedItems.length ? 'crimson' : 'forestgreen',}}
          selectedIconComponent={<Icon>cancel</Icon>}
          selectToggleIconComponent={
            <View style={styles.searchBox} placeholder='備註' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}>

          <Icon>cancelcancelcancelcancelcancelcancel</Icon>
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
              <Icon>cancel</Icon>
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

        
          items={items} 
          uniqueKey='id'
          subKey='children'
          selectText='Choose some things...'
          showDropDowns={true}
          readOnlyHeadings={true}
          
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />






        </View>
            <TextInput style={styles.searchBox} placeholder='備註' onChangeText={(txt)=>{this.setState({key:txt})}} value={this.state.key}/>
            <Picker
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
            </View>
  
            <View style={styles.container}>
  
              <Button
                title="送出假單"
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
  
          </View>
        </SafeAreaView>


        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },searchBox: {
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
    width:width/8,
    marginLeft:6
  }
  
  });
  
  
  
  