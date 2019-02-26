import React from 'react';
import { Button,StyleSheet,TouchableOpacity,Image,Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Btn_Qrcode extends React.Component {
  render() {
    return (
    
    <TouchableOpacity onPress={() => this.props.navigation.navigate('QRvue')}
    style={styles.navLeft}>
    <Icon name={"qrcode"}  style={styles.Icon}  />

    {/* <Image source={require('../../img/scanning.png')} style={styles.navIcon} /> */}
    <Text style={styles.navText}>簽到嘍</Text>
  </TouchableOpacity>
    
    );
  }
}





const styles = StyleSheet.create({
    navLeft: {
        alignItems: 'center',
        // marginLeft: 10,
        paddingLeft: 15,
        // backgroundColor: 'white',
      },
      navIcon: {
        height: 20,
        width: 20,
      },
      Icon: {
        fontSize: 24,
        color:"#333",
        
      },
      navText: {
        fontSize: 10,
      },
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Btn_Qrcode);