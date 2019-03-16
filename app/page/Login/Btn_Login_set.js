import React from 'react';
import { Button,StyleSheet,    AsyncStorage,
  TouchableOpacity,Image,Alert,Text ,View,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Btn_Login_set extends React.Component {

  state = {
    key:'',
    value:'',
    data: '\n',
}


_retrieveData = async () => {
  try {

      this.props.navigation.push('Home') 

    
   } catch (error) {
     // Error retrieving data
     Alert.alert('錯誤');

   }
}


  render() {
    return (
    <View>
   
  <TouchableOpacity onPress={ this._retrieveData}>
        <View style={styles.button}>
          <Text style={styles.searchContent}>註冊</Text>
          {/* <Text style={styles.searchContent}>簽下去</Text> */}

        </View>
      </TouchableOpacity>
     


   </View>

    );
  }
}





const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 25,
    margin: 50
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
export default withNavigation(Btn_Login_set);