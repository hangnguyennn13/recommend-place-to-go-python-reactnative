import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class Carousel extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        }
    }

    componentDidMount = () => {
        setInterval(()=>{
            this,this.setState(prev => ({selectedIndex: prev.selectedIndex === this.props.images.length -1 ? 0: prev.selectedIndex+1}),()=>{
                this.scrollRef.current.scrollTo({
                    animated: true,
                    y: 0,
                    x: DEVICE_WIDTH * this.state.selectedIndex
                })
            })
        },3000)
    }

    setSelectedIndex = event => {
        // width of the viewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get current position of the scrollView
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({selectedIndex: selectedIndex})

        

    }

    render() {
        const { images } = this.props
        const { selectedIndex } = this.state
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <ScrollView horizontal 
                pagingEnabled 
                ref={this.scrollRef}
                onMomentumScrollEnd={this.setSelectedIndex}>
                    {images.map(image => {
                        return (
                            <Image
                                key={image}
                                source={{uri: image}}
                                style={styles.image}
                                resizeMode="stretch"
                            />
                        );

                    })}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image,i)=>{
                        return (
                            <View
                                key={image}
                                style={[styles.whiteCircle,{opacity: i === selectedIndex ? 0.5 : 1 }]}
                            />
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: "100%",
        width: DEVICE_WIDTH,
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: '#dddddd',
    },
    circleDiv:{
        position: "absolute",
        bottom: 15,
        height: 10,
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    whiteCircle:{
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "#fff"
    },
})
