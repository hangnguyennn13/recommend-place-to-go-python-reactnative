import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from "react-native";

import Carousel from './Carousel';
import Constants from 'expo-constants';

const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];

const { height, width } = Dimensions.get('window');
const subHeight = height/9;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
    }
  }
  
  render() {
    return (
        <ScrollView
          style={styles.contentContainer} >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View style={styles.header}>
              <View style={styles.banner} />
              <View style={styles.userInfor}>
                <View style={styles.detailInfor} >
                  <Text>WELCOME TO TPHCM</Text>
                </View>
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
                  Famous Place
                </Text>

                <View style={{ width: width - 40, height: 250, marginTop: 20, justifyContent: "center", alignItems: "center", marginHorizontal: 20 }}>
                  <Carousel images={images} />
                </View>
                <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                  <Text style={{ fontSize: 24, fontWeight: '700' }}>
                    Recommended
                  </Text>
                  <Text style={{ fontWeight: '100', marginTop: 10 }}>
                    Famous route should go 
                  </Text>
                  <View
                    style={{ width: width - 40, height: 500, marginTop: 20 }}>
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
          </View>
        </ScrollView>
    );
  } 
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  header: {
    height: 150,
    backgroundColor: 'white',
  },
  banner: {
    flex: 1.5,
    backgroundColor: '#7EA3D5',
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
    flex:7
  }
});


