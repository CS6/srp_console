import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  Platform
} from 'react-native';

import DeviceInfo from 'react-native-device-info'

import { SafeAreaView, } from 'react-navigation';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class Info extends Component {

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
  },  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});



