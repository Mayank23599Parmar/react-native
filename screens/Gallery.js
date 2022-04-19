import { StyleSheet, View, FlatList, Image, Dimensions ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useRef ,useState} from 'react';
const { width, height } = Dimensions.get("screen");
const images = [
    "https://i.pravatar.cc/700?img=1",
    "https://i.pravatar.cc/700?img=5",
    "https://i.pravatar.cc/700?img=2",
    "https://i.pravatar.cc/700?img=10",
    "https://i.pravatar.cc/700?img=45",
    "https://i.pravatar.cc/700?img=11",
    "https://i.pravatar.cc/700?img=15",
    "https://i.pravatar.cc/700?img=12",
    "https://i.pravatar.cc/700?img=13",
    "https://i.pravatar.cc/700?img=35"
]
const IMAGE_SIZE = 80;
const SPASING = 10
export default function Gallery() {
    const [activeIndex,SetActiveInex]=useState(0)
    const topRef=useRef();
    const bottomRef=useRef();
    const setCroll=(index)=>{
        SetActiveInex(index);
        topRef?.current.scrollToOffset({
            offset: width * index,
            animated: true
          })
          if(index*(IMAGE_SIZE+SPASING)- IMAGE_SIZE/2 > width/2){
            bottomRef?.current.scrollToOffset({
                offset: index*(IMAGE_SIZE+SPASING)+ IMAGE_SIZE/2 -width/2,
                animated: true
              })
          }
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                keyExtractor={(item) => item}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={topRef}
                onMomentumScrollEnd={(ev)=>{
                 SetActiveInex(Math.floor(ev.nativeEvent.contentOffset.x/width));
                
                }}
                renderItem={(item, index) => {
                    return <View style={{ width, height }}>
                        <Image
                            source={{ uri: item.item }}
                            style={StyleSheet.absoluteFillObject}
                        />
                    </View>
                }}
            />
            <FlatList
                data={images}
                ref={bottomRef}
                keyExtractor={(item) => item}
                horizontal
                style={
                    {
                        position: "absolute",
                        bottom: IMAGE_SIZE / 5
                    }
                }
                contentContainerStyle={{paddingHorizontal:SPASING}}
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => {
                    
                    return <TouchableOpacity onPress={()=>setCroll(item.index)}>
                        <Image
                        source={{ uri: item.item }}
                        style={{
                            width: IMAGE_SIZE, height: IMAGE_SIZE,
                            borderRadius: 15,
                            marginRight: SPASING,
                            borderWidth:2,
                            borderColor:activeIndex === item.index?"#fff":"transparent"

                        }}
                    />
                    </TouchableOpacity> 

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    }
})