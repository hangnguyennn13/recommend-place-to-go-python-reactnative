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
  Dimensions,
  TouchableOpacity
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';

import FamousRoute from './FamousRoute';
import Landmarks from '../components/Landmarks';

import Constants from 'expo-constants';

const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];

const { height, width } = Dimensions.get('window');
const subHeight = height / 9;

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
          <View style={styles.banner}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  alignItems: 'flex-start',
                  flex: 1,
                }}>
                Pegasus
              </Text>
              <TouchableOpacity
                style={{
                  paddingVertical: 12,
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                }}>
                <Entypo name="heart" size={26} color="#fff" />
                <View
                  style={{
                    height: 17,
                    width: 22,
                    backgroundColor: 'white',
                    marginLeft: -5,
                    borderRadius: 7.5,
                    borderColor: '#eaa0a2',
                    borderWidth: 2,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: -3.5,
                      fontWeight: '700',
                    }}>
                    5
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.userInfor}>
              <View style={styles.detailInfor} >
                <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "bold", height: 60, paddingTop: 11 }}>Welcome to Ho Chi Minh city</Text>
              </View>
            </View>
          </View>
          <View style={styles.famousPlace}>
            <View
              style={{ flex: 1, backgroundColor: 'white' }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}>
                Famous Place
                </Text>

              <View style={{ width: width, height: 930, marginTop: 20, }}>
                <Landmarks />
              </View>
              <View style={{ marginTop: 40 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                  Recommended Route
                  </Text>
                <View style={{ width: width, height: 550, marginTop: 20, }}>
                  <FamousRoute />
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
  contentContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
  },
  header: {
    height: 150,
    backgroundColor: 'white',
  },
  banner: {
    flex: 1.5,
    backgroundColor: '#eaa0a2',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: "row",
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
    width: width - 60,
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
    flex: 7
  }
});


