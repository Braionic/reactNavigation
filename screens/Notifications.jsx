import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { tweets } from '../components/Data/Tweets'


export default function Notifications({route}) {
    
    const boy = tweets.filter((item)=> item.id == route.params.id)
  return (
    <View>
      <Text>{route.params.id}</Text>
      <FlatList data={boy} renderItem={({item})=>(
        <View>
            <Pressable onPress={()=>navigation.navigate('Notifications', {id: item.id})}>
            <Image  source={{uri: item.author.avatar}} width={50} height={50} />
            </Pressable>
            
            <Text>{item.author.name}</Text>
        </View>
      )} keyExtractor={(item)=> item.id} />
    </View>
  )
}