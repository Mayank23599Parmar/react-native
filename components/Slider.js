import { StyleSheet, Text, View, ScrollView, Image,Dimensions } from 'react-native'
import React,{useState} from 'react'
const  {width}=Dimensions.get("window");
console.log(width)
const height=width*0.9

export default function Slider() {
    const [first, setfirst] = useState(0)
    const images = [
        "https://i.pravatar.cc/700?img=1",
        "https://i.pravatar.cc/700?img=5",
        "https://i.pravatar.cc/700?img=2",
        "https://i.pravatar.cc/700?img=10",
        "https://i.pravatar.cc/700?img=45"
    ]
    const changeSlide = ({ nativeEvent }) => {
        const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
        console.log(slide)
        setfirst(slide)
    }
    return (
        <View style={styles.container}>
            <ScrollView horizontal
                onScroll={changeSlide}
                showsHorizontalScrollIndicator={false}
            >
                {
                    images.map((img, key) => {
                        return <Image source={{ uri: img }} key={key} style={styles.image} />
                    })
                }
            </ScrollView>

            <Text style={styles.dot}>
            {
                    images.map((img, key) => {
                        
                        return key == first?<Text>⚪</Text>:<Text>⚫</Text>
                    })
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width,
        height,
        resizeMode: "cover",

    },
    container: {
        marginTop: 50,
        position:"relative"
    },
    dot:{
        color:"red",
        position:"absolute",
        top:"90%",
        left:"50%",
        transform: [
            { translateX: -50 },
          ]
    }
})