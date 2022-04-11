import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from "../styles/globasStyles";
export default Contact = (props) => {
    console.log(props.route.params)
    return (
        <View style={globalStyles.container}>
            <View >
                <Text>Contact us</Text>
            </View>
        </View>
    )
}
const contactStyle = StyleSheet.create({
  
})