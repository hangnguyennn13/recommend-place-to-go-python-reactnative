import React from 'react';
import { View, TouchableOpacity, Text, Dimensions, StyleSheet, Image } from 'react-native';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';
import { MaterialIcons,  Entypo } from '@expo/vector-icons';

import { FamousPlaceData } from "../utilis/HomeScreen/famousPlace";


const { height, width } = Dimensions.get('window');
const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];


export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: FamousPlaceData,
    }
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 220,
          backgroundColor: isActive ? 'blue' : 'white',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
        onPress={move}
      >
        <View style={{  }}>
          <PlaceCard item={item} index={index} />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    console.log(this.state.data)
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={5}
          onMoveEnd={({ data }) => this.setState({ data })}
        />

      </View>
    )
  }
}

const PlaceCard = props => {
  let item = props.item;
  let index = props.index;
  item.order = 1;
  return (
    <View
      key={item.id}
      style={{
        width: width - 60,
        height: 200,
        display: 'flex',
        margin: 30,
        borderRadius: 10,
        overflow: 'hidden',backgroundColor:"#F9F9F9"
      }}>
      <View style={{ flex: 12, flexDirection: "row" }}>
        <Image source={{ uri: images[4] }} style={styles.image} />
        <TouchableOpacity style={{ marginLeft: -30 }}>
          <Entypo name="cross" size={24} color="white" />
        </TouchableOpacity>

      </View>
      <View
        style={{
          flex: 1,
          marginTop: -10,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor:"#F9F9F9"
        }}
      />
      <Text
        style={{
          color: 'black',
          fontWeight: '700',
          paddingHorizontal: 10,
          backgroundColor:"#F9F9F9"
        }}>
        {item.name}
      </Text>
      <View
        style={{
          paddingTop: 10,
          paddingHorizontal: 10,
          flexDirection: 'row',
          paddingBottom: 15
        }}>
        <MaterialIcons name="place" size={18} color="black" />
        <Text style={{ paddingHorizontal: 15, color: 'black' }}>{item.address}</Text>
      </View>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  famousPlaceCard: {
    height: 200,
    width: width - 60,
    borderRadius: 10,

  },
  placeToGoWith: {
    height: 200,
    width: width - 60,
    borderRadius: 10,
  },
  seperator: { height: 15, backgroundColor: '#F9F9F9' },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  placeName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cityInfor: {
    textAlign: 'center',
    fontSize: 14
  },

  placeDetail: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginTop: 5,
    paddingHorizontal: 15
  },
  countCard: {
    flex: 0.5,
    flexDirection: 'row',
    paddingVertical: 5,
    height: 40,
    backgroundColor: '#eaa0a2',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  landmarkName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  countGroup: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center'
  },
  txtCount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  countLabel: {
    fontSize: 12,
    fontWeight: '400',
  },
})