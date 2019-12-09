import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Carousel from 'react-native-snap-carousel';
import * as Font from 'expo-font';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';

import { FamousPlaceData } from "../utilis/HomeScreen/famousPlace";
import PlaceCard from "../components/Place"
 
const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];

const { height, width } = Dimensions.get('window');

export default class Landmarks extends React.Component {
  constructor() {
    super()
    this.state = {
      entries: FamousPlaceData,
      loading: true,
      selectedIndex: 0,
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }

  setIndex = props => {
    console.log(props)
    this.setState({ selectedIndex: props })
  }

  _renderItem({ item, index }) {
    let today = new Date();
    let year = today.getFullYear();
    let age = year - item.foundationYear;
    return (
      <PlaceCard item={item} index={index}></PlaceCard>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Please Wait</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={width - 60}
          itemHeight={400}
          onMomentumScrollEnd={this.setSelectedIndex}
          onSnapToItem={(index) => this.setIndex(index)}
        />
        <Text style={styles.mainText}>Place to go with</Text>
        <Text style={styles.subText}>
          Recommended to go after visiting ben Thanh Market
        </Text>
        <View style={{ marginTop: 10 }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={width}
            itemWidth={width - 60}
            itemHeight={400}
            onMomentumScrollEnd={this.setSelectedIndex}
            onSnapToItem={(index) => this.setIndex(index)}
            layout={'tinder'}
          />

        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  mainText:{
    fontWeight: '700',
    fontSize: 22,
    paddingHorizontal: 20,
  },
  subText:{ fontWeight: '100', paddingHorizontal: 20, marginTop: 10 },

});
