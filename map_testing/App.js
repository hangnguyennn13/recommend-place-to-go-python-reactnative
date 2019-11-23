import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';

import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import Polyline from '@mapbox/polyline';

import { Marker } from 'react-native-maps'

const locations = require('./locations.json')
const { width, height } = Dimensions.get('screen')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      locations: locations,
      coords: null
    }
  }
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log('Error:', error)
    )

    const { locations: [sampleLocation] } = this.state
    console.log("sampledata1: ", sampleLocation);
    this.setState({
      desLatitude: sampleLocation.coords.latitude,
      desLongitude: sampleLocation.coords.longitude
    }, this.mergeCoords)
  }

  mergeCoords = () => {
    const {
      latitude,
      longitude,
      desLatitude,
      desLongitude
    } = this.state

    const hasStartAndEnd = latitude !== null && desLatitude !== null

    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`
      const concatEnd = `${desLatitude},${desLongitude}`
      this.getDirections(concatStart, concatEnd)
    }
  }

  async getDirections(startLoc, desLoc) {
    
    try {
      const resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${desLoc}&key=AIzaSyAs1ntYxMEi0biExx9eOcG2lssatpQoSC`)
      const respJson = await resp.json();
      console.log("respJson", respJson)
      //   const response = respJson.routes[0]
      //   const distanceTime = response.legs[0]
      //   const distance = distanceTime.distance.text
      //   const time = distanceTime.duration.text
      const points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      const coords = points.map(point => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords })
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  renderMarkers = () => {
    const { locations } = this.state
    return (
      <View>
        {
          locations.map((location,idx) => {
            const {
              coords: { latitude, longitude }
            } = location
            console.log(latitude,longitude)
            return (
              <Marker
                key={idx}
                coordinate={location['coords']}
                title={location['name']}
                description={location['address']}
              />
            )
          })
        }
      </View>
    )
  }

  render() {
    const {
      latitude,
      longitude,
      coords
    } = this.state
    console.log(coords)
    if (latitude !== null && coords !== null) {
      return (
        <MapView
          showsUserLocation
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {this.renderMarkers()}
          <MapView.Polyline
            strokeWidth={2}
            strokeColor="red"
            coordinates={coords} />
        </MapView>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>We need your permission!</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});