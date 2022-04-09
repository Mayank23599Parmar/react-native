import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import MenuBar from '../components/MenuBar';
import Slider from '../components/Slider';
import { globalStyles } from "../styles/globasStyles";
export default Home = (props) => {
    const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    return (<>
    <ScrollView>
    <Slider/>
           <View style={globalStyles.container}>
      
      <View style={homeStyle.header}>
          <Image resizeMode="stretch" source={require("../assests/images/Programmer-cuate.png")} style={globalStyles.image} />
       
          <Text style={[globalStyles.title,homeStyle.title]}>{props.title}</Text>
          <Text style={[globalStyles.text, homeStyle.subText]}>{dummyText}</Text>
      </View>
      <MenuBar/>
  </View>
    </ScrollView>
       
    </>
       
    )
}
const homeStyle = StyleSheet.create({
    header: {
        marginTop: 0
    },
    subText: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    title:{
        marginTop:-40
    }
})