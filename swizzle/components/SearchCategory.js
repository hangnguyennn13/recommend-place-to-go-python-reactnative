import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import {
    Entypo,
} from '@expo/vector-icons';

import { Rating } from 'react-native-elements';
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
const subHeight = height / 9;

export default class SearchCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenHeight: 0,
        };
    }

    renderItem = ({ item }) => {
        let rating = 4.5;
        return (
            <TouchableOpacity 
            style={styles.resCard}
            onPress={()=>{console.log('main')}}>
                <View style={styles.imgCard}>
                    <Image source={{ uri: images[5] }} style={styles.image} />
                    <TouchableOpacity
                        style={styles.likePlace}
                        onPress={()=> {console.log('heart')}}>
                        <Entypo name="heart" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.resInfo}>
                    <Text style={styles.resName}>
                        Seol Hwa
                    </Text>
                    <Text style={styles.resAddress}>
                        Nam Ky Khoi Nghia
                    </Text>
                    <View
                        style={styles.tagCard}>
                        <View
                            style={styles.tagHolder}>
                            <Text style={styles.tagName}>
                                Open
                            </Text>
                        </View>
                        <View
                            style={styles.tagHolder}>
                            <Text style={styles.tagName}>
                                Open
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.resPoints}>
                        5.0 Points
                    </Text>
                    <View style={styles.ratingHolder}>
                        <Rating
                            imageSize={12}
                            readonly
                            startingValue={rating}
                            ratingCount={5}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={FamousPlaceData}
                renderItem={this.renderItem}
            />
        );
    }
}


const styles = StyleSheet.create({
    resCard:{
        backgroundColor: 'white',
        height: 130,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom: 10,
    },
    imgCard:{
        flex: 1,
        marginVertical: 10,
        marginLeft: 10,
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
    },
    likePlace:{
        marginRight: -10,
        position: 'absolute',
        padding: 5,
        height: 20,
    },
    resInfo:{ marginVertical: 10, marginLeft: 15, flex: 0.8 },
    resName:{
        fontWeight: '700',
        fontSize: 16,
        paddingBottom: 2,
      },
    resAddress:{ color: 'gray', fontSize: 12, paddingBottom: 5 },
    tagCard:{
        height: 15,
        marginVertical: 5,
        flexDirection: 'row',
    },
    tagHolder:{
        width: 40,
        borderRadius: 5,
        borderColor: '#ED4264',
        borderWidth: 1,
        marginRight: 5,
    },
    tagName:{
        color: '#ED4264',
        fontSize: 10,
        textAlign: 'center',
    },
    resPoints:{ color: 'gray', fontSize: 12, marginTop: 5 },
    ratingHolder:{
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
    },

});
