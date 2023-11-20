import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { tweets } from "../components/Data/Tweets";
import { StyleSheet } from "react-native";

export default function Details({ route }) {
  const people = tweets.filter((item) => item.id == route.params.id);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View>
            <Pressable
              onPress={() => navigation.navigate("Details", { id: item.id })}
            >
              <Image
                source={{ uri: item.author.avatar }}
                width={50}
                height={50}
              />
            </Pressable>

            <Text>{item.author.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
