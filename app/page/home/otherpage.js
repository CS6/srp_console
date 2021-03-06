import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    WebView,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView, } from 'react-navigation';
import ThemeProvider,{ThemeContext} from './data';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

// const ThemeContext = React.createContext('light');
const defaultData = {};

// export const {Provider, Consumer} = createContext(defaultData);

// class ThemeProvider extends React.Component {
//   state = { theme: 'light' };

//   toggleTheme = () => this.setState(({ theme }) => ({
//     theme: theme === 'light' ? 'dark' : 'light',
//   }));

//   render() {
//     return (
//       <ThemeContext.Provider value={this.state.theme}>
//         <View style={{ padding: 70 }}>
//           <TouchableOpacity onPress={this.toggleTheme}>
//             <Text>toggle theme</Text>
//           </TouchableOpacity>
//           {this.props.children}
//         </View>
//       </ThemeContext.Provider>
//     );
//   }
// }
export default class otherpage extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>

            <View style={styles.container}>
                <Text>otherpage</Text>
                <ThemeProvider>
        <ThemeContext.Consumer>
          {theme => <Text style={styles[theme]}>{theme}</Text>}
        </ThemeContext.Consumer>
      </ThemeProvider>
            </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    dark: { backgroundColor: 'black', color: 'white' },
    light: { backgroundColor: 'white', color: 'black' },
});
