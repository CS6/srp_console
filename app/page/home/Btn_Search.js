import React from 'react';
import { Button,  NetInfo,  StyleSheet,TouchableOpacity,Image,Text ,View,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';
const { width, height } = Dimensions.get('window');

class Btn_Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isConnected: null,
        connectionInfo: null
    };
}

//https://www.jianshu.com/p/4bf6a976659d
//http://www.hangge.com/blog/cache/detail_1614.html
//React Native - 使用NetInfo獲取網絡信息（是否聯網、當前網絡狀態）



//页面的组件渲染完毕（render）之后执行
componentDidMount() {
    //检测网络是否连接
    NetInfo.isConnected.fetch().done((isConnected) => {
        this.setState({isConnected});
    });

    //检测网络连接信息
    NetInfo.fetch().done((connectionInfo) => {
        this.setState({connectionInfo});
    });

    //监听网络变化事件
    NetInfo.addEventListener('change', (networkType) => {
        this.setState({isConnected: networkType})
    })
}
  render() {
    return (
    
   
  // <TouchableOpacity onPress={() => { this.props.navigation.navigate('Registered') }}>
  <TouchableOpacity onPress={() => { this.componentDidMount()}}>

<View style={styles.searchBox}>
          <Image source={require('../../img/search.png')} style={styles.searchIcon} />
          <Text style={styles.searchContent}> 生 態 組 </Text>
          <Text style={styles.welcome}>
                    {/* 当前网络连接类型： */}
                     {this.state.connectionInfo}
                </Text>
          <Text style={styles.welcome}>
                    {/* 当前的网络状态： */}
                    {this.state.isConnected ? '網路使用中': '沒有網路'}
                </Text>
               
                

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