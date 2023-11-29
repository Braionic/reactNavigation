import { View, Text, Image, FlatList, Pressable, Button, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { tweets } from '../components/Data/Tweets'
import { useNavigation } from '@react-navigation/native'

export default function Home({navigation}) {
   
  return (
    <View style={styles.container}>
        <View style={styles.flatlistContainer}>
        <FlatList data={tweets} renderItem={({item})=>(
        <View style={styles.flatlistItems}>
            <Pressable onPress={()=>navigation.navigate('Details', {id: item.id})}>
            <Image  source={{uri: item.author.avatar}} width={50} height={50} borderRadius={'50%'} marginRight={5} resizeMode={'contain'} />
            </Pressable>
            <View>
            <View>
            <Text>{item.author.name}</Text>
            <Text>@{item.author.screenName}</Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={styles.fullText}>{item.fullText}</Text>
            </View>
            </View>
            
        </View>
      )} keyExtractor={(item)=> item.id} />
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatlistItems: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
        borderRadius: 6,
        padding: 10,
        width: '100%',
       
    },
    flatlistContainer: {
        padding: 7,
        marginTop: 20,
       
    },
    fullText: {
        flexShrink: 1,
        color: 'grey',
    }
  });