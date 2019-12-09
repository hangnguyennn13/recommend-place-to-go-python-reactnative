import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import * as Font from 'expo-font';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Entypo } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';

import { FamousPlaceData } from "../utilis/HomeScreen/famousPlace";



const images = [
    'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.foody.vn/res/g13/121579/prof/s280x175/foody-mobile-r1-jpg-807-635749776897846717.jpg'
];

const { height, width } = Dimensions.get('window');
export default class PopularPlace extends React.Component {
    constructor() {
        super()
        this.state = {
            entries: FamousPlaceData,
            loading: true,
            selectedIndex: 0,
        }
    }
    async componentWillMount() {

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

        return (
            <Place item={item} index={index} />
        );

    }

    render() {
        const { entries } = this.state
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" style={{ textAlign: "center" }} />
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
                    itemHeight={300}
                    onMomentumScrollEnd={this.setSelectedIndex}
                    onSnapToItem={(index) => this.setIndex(index)}
                />

            </View>

        );
    }
}

const Place = ({ item, index }) => {
    return (
        <View  style={{
            width: width - 60,
            height: 350,alignItems:'center'}} >
            <View
                style={{
                    width: width - 60,
                    height: 200,
                    display: 'flex',
                    marginTop: 30,
                    borderRadius: 10,
                    overflow: 'hidden',
                    backgroundColor: 'red',
                    flexDirection: 'row',
                }}>
                <Image source={{ uri: images[0] }} style={styles.image} />
                <TouchableOpacity style={{ marginLeft: -35, padding: 5,height:30 }} onPress={()=>{console.log("press")}}>
                    <Entypo name="heart" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    width: width - 80,
                    height: 80,
                    display: 'flex',
                    marginTop: -50,
                    borderRadius: 10,
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,

                    flexDirection: 'row',
                }}>
                <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 20 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16 }}>Seol Hwa</Text>
                    <Text style={{ color: 'gray', fontSize: 12 }}>
                        Nam Ky Khoi Nghia
            </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 8,
                            alignItems: 'center',
                        }}>
                        <Entypo name="star" />
                        <Entypo name="star" />
                        <Entypo name="star" />
                        <Entypo name="star" />
                        <Entypo name="star" />
                        <Text style={{ paddingLeft: 10, fontSize: 12, paddingTop: -5 }}>
                            5.0
              </Text>
                        <Text style={{ paddingLeft: 5, fontSize: 12, paddingTop: -5 }}>
                            (459)
              </Text>
                    </View>
                </View>
                <TouchableOpacity style={{ marginVertical: 12, marginRight: 10 }}>
                    <MaterialIcons name="info-outline" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

});
