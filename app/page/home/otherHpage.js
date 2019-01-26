import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  WebView,
  TouchableOpacity,
  Button
} from 'react-native';
import { SafeAreaView, } from 'react-navigation';
import ThemeProvider,{ ThemeContext } from './Context_page'
import {Provider, Consumer} from './Context_page';


// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

// const ThemeContext = React.createContext('light');

export default class otherpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    };
}

addOne = () => {
    this.setState((preState) => ({
                count: preState.count + 1
            }
        )
    )
};

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

      {/* <Provider value={this.state}>
                    <div>
                        <Consumer>
                            {
                                (context) => <Text>{context.count}</Text>
                            } 
                            
                        </Consumer>
                    </div>
                </Provider> */}

          {/* <Button
            title="Go to 加1"
            onPress={this.addOne}/>  */}
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
