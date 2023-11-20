import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { tweets } from '../components/Data/Tweets'
import { StyleSheet } from 'react-native'


export default function Notifications({route}) {
    
  
  return (
    <View style={styles.container}>
      <Text>Notification screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})