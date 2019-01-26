import React from 'react';
import { Button,StyleSheet,TouchableOpacity,Image,Text ,View,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Btn_Search extends React.Component {
  render() {
    return (
    
   
  <TouchableOpacity onPress={() => { this.props.navigation.navigate('Registered') }}>
        <View style={styles.searchBox}>
          <Image source={require('../../img/search.png')} style={styles.searchIcon} />
          <Text style={styles.searchContent}>搜尋欄位</Text>
        </View>
      </TouchableOpacity>
 
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
export default withNavigation(Btn_Search);