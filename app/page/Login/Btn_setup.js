import React from 'react';
import { Button,StyleSheet,    AsyncStorage,
  TouchableOpacity,Image,Alert,Text ,View,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Btn_setup extends React.Component {

  state = {
    key:'',
    value:'',
    data: '\n',
}


_retrieveData = async () => {
  try {

      this.props.navigation.push('Setup') 

    
   } catch (error) {
     // Error retrieving data
     Alert.alert('錯誤');

   }
}


  render() {
    return (
    <View>
   
  <TouchableOpacity onPress={ this._retrieveData}>
        <View style={styles.Button}>
          <Text style={styles.searchContent}>首次登入記得點我註冊</Text>
          {/* <Text style={styles.searchContent}>簽下去</Text> */}

        </View>
      </TouchableOpacity>
     


   </View>

    );
  }
}





const styles = StyleSheet.create({
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
    paddingVertical:10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  searchContent: {
    color: '#7094B1',
    fontSize: 20,
  },
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Btn_setup);