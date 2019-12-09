import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import {
    Entypo,
} from '@expo/vector-icons';

import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements';

const images = [
    'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];

const { height, width } = Dimensions.get('window');
import SearchCategory from '../components/SearchCategory';


export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenHeight: 0,
            search: '',
        };
    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <View style={styles.contentContainer}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.header}>
                        <LinearGradient
                            colors={['#ED4264', '#FBD786']}
                            style={styles.banner}
                            //  Linear Gradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
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
                                            borderColor: '#FBD786',
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
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginBottom: 50,
                                    paddingHorizontal: 15,
                                    justifyContent: 'space-around',
                                }}>
                                <TouchableOpacity style={{ opacity: 0.7 }}>
                                    <Text
                                        style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
                                        Do An
                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ opacity: 0.7 }}>
                                    <Text
                                        style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
                                        Do An
                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ opacity: 0.7 }}>
                                    <Text
                                        style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
                                        Do An
                  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ opacity: 0.7 }}>
                                    <Text
                                        style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
                                        Do An
                  </Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                        <View style={styles.userInfor}>
                                <SearchBar
                                containerStyle={styles.detailInfor}
                                lightTheme
                                round
                                inputContainerStyle={{backgroundColor:'white'}}
                                    placeholder="Type Here..."
                                    onChangeText={this.updateSearch}
                                    value={search}
                                />
                        </View>
                    </View>
                    <View style={styles.famousPlace}>
                        <SearchCategory/>
                    </View>
                </View>
            </View>
        );
    }
}

SearchScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        height: 180,
    },
    banner: {
        flex: 1,
    },
    userInfor: {
        height: 50,
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
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
    },
    famousPlace: {
        flex: 1,
    },
});
