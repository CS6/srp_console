import React from 'react';
import { createBottomTabNavigator, SafeAreaView, createStackNavigator } from 'react-navigation';
import {
  Component, StyleSheet, Platform, Image, TextInput
  , Button, Text, View, ScrollView, TouchableOpacity, Dimensions,
} from 'react-native';
import DeviceInfo from 'react-native-device-info'

//引用插件

const { width, height } = Dimensions.get('window');


export default class Info extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {Platform.OS === 'ios' ? (
            <Text style={styles.instructions}>
              IOS TAT
  </Text>
          ) : (
              <ScrollView>

                <Text style={styles.instructions}>
                  ANDROID    |
    {'getAPILevel:' + DeviceInfo.getAPILevel() + '\n' +
                    'getFirstInstallTime:' + DeviceInfo.getFirstInstallTime() + '\n' +
                    'getInstanceID:' + DeviceInfo.getInstanceID() + '\n' +
                    'getLastUpdateTime:' + DeviceInfo.getLastUpdateTime() + '\n' +
                    'getMaxMemory:' + DeviceInfo.getMaxMemory() + '\n' +
                    'getPhoneNumber:' + DeviceInfo.getPhoneNumber() + '\n' +
                    'getSerialNumber:' + DeviceInfo.getSerialNumber()
                  }
                  {

                    'getApplicationName:' + DeviceInfo.getApplicationName() + '\n' +
                    'getBrand:' + DeviceInfo.getBrand() + '\n' +
                    'getBuildNumber:' + DeviceInfo.getBuildNumber() + '\n' +
                    'getBundleId:' + DeviceInfo.getBundleId() + '\n' +
                    'getCarrier:' + DeviceInfo.getCarrier() + '\n' +
                    'getDeviceCountry:' + DeviceInfo.getDeviceCountry() + '\n' +
                    'getDeviceId:' + DeviceInfo.getDeviceId() + '\n' +
                    'getDeviceLocale:' + DeviceInfo.getDeviceLocale() + '\n' +
                    'getDeviceName:' + DeviceInfo.getDeviceName() + '\n' +
                    'getFontScale:' + DeviceInfo.getFontScale() + '\n' +
                    'getFreeDiskStorage:' + DeviceInfo.getFreeDiskStorage() + '\n' +
                    'getManufacturer:' + DeviceInfo.getManufacturer() + '\n' +
                    'getModel:' + DeviceInfo.getModel() + '\n' +
                    'getReadableVersion:' + DeviceInfo.getReadableVersion() + '\n' +
                    'getSystemName:' + DeviceInfo.getSystemName() + '\n' +
                    'getSystemVersion:' + DeviceInfo.getSystemVersion() + '\n' +
                    'getTimezone:' + DeviceInfo.getTimezone() + '\n' +
                    'getTotalDiskCapacity:' + DeviceInfo.getTotalDiskCapacity() + '\n' +
                    'getTotalMemory:' + DeviceInfo.getTotalMemory() + '\n' +
                    'getUniqueID:' + DeviceInfo.getUniqueID() + '\n' +
                    'getUserAgent:' + DeviceInfo.getUserAgent() + '\n' +
                    'is24Hour:' + DeviceInfo.is24Hour() + '\n' +
                    'isEmulator:' + DeviceInfo.isEmulator() + '\n' +
                    'isPinOrFingerprintSet:' + DeviceInfo.isPinOrFingerprintSet() + '\n' +
                    'isTablet:' + DeviceInfo.isTablet()
                  }
                </Text>
              </ScrollView>

            )}

        </View>
      </SafeAreaView>


        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    logo: {
      height: 120,
      marginBottom: 16,
      marginTop: 64,
      padding: 10,
      width: 135,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    modules: {
      margin: 20,
    },
    modulesHeader: {
      fontSize: 16,
      marginBottom: 8,
    },
    module: {
      fontSize: 14,
      marginTop: 4,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      borderRadius: 5,
      padding: 5,
  },
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
  tabBarUnderline: {
    backgroundColor: '#b4282d',
    height: 2,
    width:width/8,
    marginLeft:6
  }
  
  });
  
  
  
  