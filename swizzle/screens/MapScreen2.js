import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';

const { height, width } = Dimensions.get('window');

export default class MapScreen2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userLocation: this.props.navigation.getParam('userLocation', { 'latitude': 10.823099, 'longtitude': 106.629662, 'address': "HCM" }),
        }
    }
    componentDidMount() {
        console.log(this.state.userLocation)
    }
    render() {
        return (
            <View>
                <GoogleAutoComplete apiKey="AIzaSyAs1ntYxMEi0biExx9eOcG2lssatpQoSCY" debounce={300}>
                    {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
                        <React.Fragment>

                            <TextInput
                                style={{
                                    height: 40,
                                    width: 300,
                                    borderWidth: 1,
                                    paddingHorizontal: 16,
                                    marginTop: 70
                                }}
                                value={inputValue}
                                onChangeText={handleTextChange}
                                placeholder="Location..."
                            />
                            <ScrollView style={{ maxHeight: 500 }}>
                                {locationResults.map((el, i) => (
                                    <LocationItem
                                        {...el}
                                        fetchDetails={fetchDetails}
                                        key={String(i)}
                                    />
                                ))}
                            </ScrollView>
                        </React.Fragment>

                    )}
                </GoogleAutoComplete>
            </View>

        );
    }
}

class LocationItem extends React.Component {
    _handlePress = async () => {
        const res = await this.props.fetchDetails(this.props.place_id)
        console.log('res', res)
    }

    render() {
        return (
            <TouchableOpacity style={styles.root} onPress={this._handlePress}>
                <Text>{this.props.description}</Text>
            </TouchableOpacity>
        )
    }
}

MapScreen2.navigationOptions = {
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    },
    root: {
        height: 40,
        borderBottomWidth: 5,
        justifyContent: 'center'
    }
});