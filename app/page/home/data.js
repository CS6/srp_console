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

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export const ThemeContext = React.createContext('light');

// export const {Provider, Consumer} = createContext(defaultData);

export default class ThemeProvider extends Component {
  state = { theme: 'light' };

  toggleTheme = () => this.setState(({ theme }) => ({
    theme: theme === 'light' ? 'dark' : 'light',
  }));

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <View style={{ padding: 70 }}>
          <TouchableOpacity onPress={this.toggleTheme}>
            <Text>toggle theme</Text>
          </TouchableOpacity>
          {this.props.children}
        </View>
      </ThemeContext.Provider>
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
