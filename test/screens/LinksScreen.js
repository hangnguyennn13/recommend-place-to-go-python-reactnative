import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { MapView, Permissions } from 'expo';

import Polyline from '@mapbox/polyline'

import { Marker } from 'react-native-maps'

const locations = require('./locations.json')
const { width, height } = Dimensions.get('screen')

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  async componentDidMount(){
    const {status} = await Permission.getAsync(Permissions.LOCATION)

    if(status!='granted')
    {
      const response = await Permission.askAsync(Permissions.LOCATION)
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: {latitude,longitude}}) => this.setState({latitude,longitude}),
      (error) => console.log("Error", error)
    )

    const { locations: [ sampleLocation ] } = this.state

    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongitude: sampleLocation.coords.longitude
    }, this.mergeCoords)
  }
  render() {
    const {latitude,longitude} = this.state
    if (latitude){
      return (
        // <ScrollView style={styles.container}>
  
        // </ScrollView>
        <MapView style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.042
          }}>
  
        </MapView>
      );
    }

    return (
      <View style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>
        <Text>We need your permission!</Text>
      </View>
    );
    
  }

}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  }
});
