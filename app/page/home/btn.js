import React from 'react';
import { Button,StyleSheet,TouchableOpacity,Image,Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class MyBackButton extends React.Component {
  render() {
    return (
    
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}
    style={styles.navLeft}>
    <Image source={require('../../img/scanning.png')} style={styles.navIcon} />
    <Text style={styles.navText}>扫一扫</Text>
  </TouchableOpacity>
    
    );
  }
}





const styles = StyleSheet.create({
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
  });
  

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyBackButton);