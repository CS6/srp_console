import React from 'react';
import { Button,StyleSheet,    AsyncStorage,
  TouchableOpacity,Image,Alert,Text ,View,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window');

class Btn_info extends React.Component {

  state = {
    key:'',
    value:'',
    data: '\n',
}


_retrieveData = async () => {
  try {

    this.props.navigation.navigate('Setup')

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
          {/* <Text style={styles.searchContent}>簽下去</Text> */}
          <Icon name={"cog"}  style={styles.Icon}  />

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
    width: width * 0.15,
    height: width * 0.15,
    paddingVertical:10,
    backgroundColor: '#F0F0F0',
    borderRadius: 50,
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
  Icon: {
    fontSize: 24,
    color:"#333"
  },
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Btn_info);