import React from 'react';
import { Button,StyleSheet,    AsyncStorage,
  TouchableOpacity,Image,Alert,Text ,View,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Btn_Login extends React.Component {

  state = {
    key:'',
    value:'',
    data: '\n',
}

AB_state = {
  key:'A',
    value:'OK',

}
  _getAll = () => {
    this.setState({data: '\n'});
    AsyncStorage.getAllKeys((err,keys) => {
        if (keys && keys.length>0) {
            keys.map((key, index) => {
                AsyncStorage.getItem(key, (err, result) => {
                    var msg = this.state.data+key + ': ' + result + '\n';
                    this.setState({data: msg});
                })
            });
        }
    })
}
_add = () => {
  AsyncStorage.setItem(this.state.key, this.state.value, (error) => {
      if (error == null) {
          Alert.alert('保存成功');
      } else {
          Alert.alert('error');
      }
  })
}

_1A2B = () => {
  this.setState({data: '\n'});
  AsyncStorage.getAllKeys((err,keys) => {
      if (keys && keys.length>0) {
          keys.map((key, index) => {
              AsyncStorage.getItem(key, (err, result) => {
                  var msg = this.state.data+key + ': ' + result + '\n';
                  this.setState({data: msg});
              })
          });
      }
  })
}

_OK_add = () => {

  if (1+1==2){
    AsyncStorage.setItem(this.AB_state.key, this.AB_state.value, (error) => {
      if (error == null) {
            Alert.alert('保存成功');
        } else {
            Alert.alert('error');
        }
    })
  }else {
    Alert.alert('error');
  } 
  
}

_OK = () => {
  this.setAB_state({state: '\n'});
  AsyncStorage.getAllKeys((err,keys) => {
      if (keys && keys.length>0) {
          keys.map((key, index) => {
              AsyncStorage.getItem(key, (err, result) => {
                  var msg = this.state.data+key + ': ' + result + '\n';
                  this.setState({data: msg});
              })
          });
      }
  })
}
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('access');
    if (value == value) {
      // We have data!!
      Alert.alert(value);
      this.props.navigation.push('Home') 

    }
   } catch (error) {
     // Error retrieving data
     Alert.alert('取值錯誤');

   }
}

_retrieveData_EXP = async () => {
  try {
    const value = await AsyncStorage.getItem('access');
    if (value !== null) {
      // We have data!!
      Alert.alert(value);
    }
   } catch (error) {
     // Error retrieving data
     Alert.alert('取值錯誤');

   }
}

_pass_to_jamp = () => {
  try {
    const value =  AsyncStorage.getItem(key, (err, result));
    if (value !== null){
      // 有值！
      Alert.alert(value);
    }
    else{
      Alert.alert('錯誤');
    }
  } catch (error) {
    Alert.alert('取值錯誤');

    // 取值錯誤
  }
  // if (1+1==12){
  //   this.props.navigation.navigate('Login') 
    
  // }else {
  //   Alert.alert('請登入');
  // } 
  
}
// <Text>data:{this.state.data}</Text>

  render() {
    return (
    <View>
   
  <TouchableOpacity onPress={ this._retrieveData}>
        <View style={styles.searchBox}>
          <Text style={styles.searchContent}>快按我////, O(W)O</Text>
        </View>
      </TouchableOpacity>
     

     <TouchableOpacity onPress={this._OK_add}>
     <View style={styles.searchBox}>
       <Text style={styles.searchContent}>檢查我////, O(W)O</Text>
       <Text>access:{this.AB_state.key}</Text>
       <Text>access:{this.AB_state.value}</Text>


     </View>
   </TouchableOpacity>

   </View>

    );
  }
}





const styles = StyleSheet.create({
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
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Btn_Login);