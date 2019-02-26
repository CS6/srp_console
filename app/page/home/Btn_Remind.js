import React from 'react';
import { Button,StyleSheet,TouchableOpacity,Image,Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Btn_Remind extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Setup')}

    // <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}
    style={styles.navRight}>
        <Icon name={"cog"}  style={styles.Icon}  />

    {/* <Image source={require('../../img/remind.png')} style={styles.navIcon} /> */}
        <Text style={styles.navText}>設  定</Text>
  </TouchableOpacity>
    
    );
  }
}





const styles = StyleSheet.create({
    // navLeft: {
    //     alignItems: 'center',
    //     marginLeft: 10,
    //   },
      navRight: {
        alignItems: 'center',
        // marginRight: 10,
        
        paddingRight: 15,
        // backgroundColor: 'white',
      },
      navIcon: {
        height: 20,
        width: 20,
      },
      Icon: {
        fontSize: 24,
        color:"#333"
      },
      navText: {
        fontSize: 10,
      },
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(Btn_Remind);