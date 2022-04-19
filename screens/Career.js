import { StyleSheet, View, FlatList, Image, Dimensions , Animated, StatusBar,Text} from 'react-native'
import React from 'react'
import { useRef ,useState} from 'react';
import { transform } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const { width, height } = Dimensions.get("screen");
const data = [
    {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=5"
    },
    {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=15"
    },
    {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=22"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=13"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=21"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=12"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=42"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=31"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=19"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=43"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=50"
    }
    ,
    {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=5"
    },
    {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=15"
    },
    {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=22"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=13"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=21"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=12"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=42"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=31"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=19"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=43"
    },   {
        jobTitle:"React Developer",
        name:"Tony stark",
        email:"tony@gmail.com",
        image:"https://i.pravatar.cc/700?img=50"
    }
]
const AVATAR_width = 80;
const SPASING = 10
const ITEM_SIZE=AVATAR_width+SPASING*3
export default function Career() {
    const scrollY=useRef(new Animated.Value(0)).current;
    console.log(scrollY,"sss")
  return (
    <View style={styles.container}>
    
      <Animated.FlatList
          data={data}
          keyExtractor={(item)=>item.index}
          onScroll={Animated.event([
              {nativeEvent:{contentOffset:{y:scrollY}} }])}
          contentContainerStyle={
           {
               padding:SPASING*2,
               paddingTop:StatusBar.currentHeight || 42
           }
          }
          renderItem={(item)=>{
              const inputRange=[
                  -1,0,ITEM_SIZE*item.index,ITEM_SIZE*(item.index+2)
              ]
              const scale=scrollY.interpolate({
                  inputRange,
                  outputRange:[1,1,1,0]
              })
              return <Animated.View style={[styles.card,{transform:[{scale}]}]}>
                  <Image source={{uri:item.item.image}} style={styles.avatarImage}/>
                  <View>
                      <Text>{item.item.jobTitle}</Text>
                      <Text>{item.item.name}</Text>
                      <Text>{item.item.email}</Text>
                  </View>
              </Animated.View>
          }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    card:{
        display:"flex",
        flexDirection:"row",
        padding:SPASING,
        backgroundColor:"#eee",
        borderRadius:12,
        marginBottom:SPASING,
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
        }
        ,
        shadowRadius:20,
        shadowOpacity:.5

    },
    avatarImage:{
        width:AVATAR_width,
        height:AVATAR_width,
        borderRadius:AVATAR_width,
        marginRight:SPASING*2
    }
})