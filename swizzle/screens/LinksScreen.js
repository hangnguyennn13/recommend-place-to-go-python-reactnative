import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  MaterialCommunityIcons,
  Entypo,
} from '@expo/vector-icons';
import Constants from 'expo-constants';
import FamousRoute from './FamousRoute';
import PopularPlace from './PopularPlace'


const { height, width } = Dimensions.get('window');
const subHeight = height / 9;

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      ht: false,
    };
  }

  render() {
    return (
      <ScrollView style={styles.contentContainer}>
        <View style={{ flex: 1 }}>
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}>
                <View style={styles.detailInfor}>
                  <View style={{ textAlign: 'center', marginTop: 15 }}>
                    <MaterialCommunityIcons name="cupcake" size={32} />
                  </View>
                </View>
                <View style={styles.detailInfor}>
                  <View style={{ textAlign: 'center', marginTop: 15 }}>
                    <MaterialCommunityIcons name="cupcake" size={32} />
                  </View>
                </View>
                <View style={styles.detailInfor}>
                  <View
                    style={{
                      textAlign: 'center',
                      marginTop: 15,
                      display: 'flex',
                    }}>
                    <MaterialCommunityIcons name="cupcake" size={32} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.category}>
              <View style={styles.categoryCard}>
                <Text
                  style={{
                    fontWeight: '700',
                    textAlign: 'center',
                    fontSize: 16,
                  }}>
                  Food
                </Text>
              </View>
              <View style={styles.categoryCard}>
                <Text
                  style={{
                    fontWeight: '700',
                    textAlign: 'center',
                    fontSize: 16,
                  }}>
                  Drink
                </Text>
              </View>
              <View style={styles.categoryCard}>
                <Text
                  style={{
                    fontWeight: '700',
                    textAlign: 'center',
                    fontSize: 16,
                  }}>
                  Entertain
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.famousPlace}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                  Recommended Route
                  </Text>
                <View style={{ width: width, height: 300 }}>
                  <PopularPlace />
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, }}>
                  PopularPlace
                  </Text>
                <View style={{ width: width, height: 550,marginTop: 20}}>
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

LinksScreen.navigationOptions = {
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
    flexDirection: "row"
  },
  userInfor: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailInfor: {
    marginTop: -35,
    backgroundColor: 'white',
    width: 70,
    marginBottom: 25,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  famousPlace: {
    flex: 7
  },
  category: {
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  categoryCard: {
    backgroundColor: 'white',
    width: 70,
    marginTop: -10,
  },
});
