import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.banner} />
          <View style={styles.userInfor}>
            <View style={styles.detailInfor} />
          </View>
        </View>
        <View style={styles.famousPlace}>
          <View
            style={{ flex: 4, backgroundColor: 'white' }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                paddingHorizontal: 20,
              }}>
              What can we help you find, Varun?
                </Text>

            <View style={{ width: width - 40, height: 250, marginTop: 20, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Image source={{ uri: images[0] }} />
                <Image source={{ uri: images[0] }} />
                <Image source={{ uri: images[0] }} />
                <Image source={{ uri: images[0] }} />
              </ScrollView>
            </View>
            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                Introducing Airbnb Plus
                  </Text>
              <Text style={{ fontWeight: '100', marginTop: 10 }}>
                A new selection of homes verified for quality & comfort
                  </Text>
              <View
                style={{ width: width - 40, height: 200, marginTop: 20 }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: 'cover',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#dddddd',
                  }}
                  source={{ uri: images[0] }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  header: {
    flex: 2,
    backgroundColor: 'white',
  },
  banner: {
    flex: 1.5,
    backgroundColor: 'pink',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  userInfor: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailInfor: {
    flex: 1,
    marginTop: -30,
    backgroundColor: 'white',
    width: '85%',
    marginBottom: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  famousPlace: {
    flex: 7,
  },
  recommendPlace: {
    flex: 3,
    backgroundColor: 'yellow',
  }
});
