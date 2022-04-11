import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function MenuBar() {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Contact",{name:"mayank",sname:"parmar"})}>
        <Text>ContactUs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("About")}>
        <Text>About</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})