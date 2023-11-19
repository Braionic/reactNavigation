import { View, Text, Image, FlatList, Pressable, Button } from 'react-native'
import React from 'react'

import { tweets } from '../components/Data/Tweets'
import { useNavigation } from '@react-navigation/native'

export default function Home({navigation}) {
    
  return (
    <View>
      <FlatList data={tweets} renderItem={({item})=>(
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