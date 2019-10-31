import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, FlatList, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
const { width } = Dimensions.get('window');
import charactersJSON from "./characters.json"
const size = (width - 40) / 4;

//we get all the json characters
const fetchUrl = async (setData, setLoading) => {
  setTimeout(() => {
    setData(charactersJSON);
    setLoading(false);
  }, 1000)
}

const Home = ({ navigation }) => {
  console.log('Home :', navigation.state);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUrl(setData, setLoading);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", fontSize: 29 }}> LOADING... </Text>
      </View>
    )
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          columnWrapperStyle={styles.row}
          data={data}
          numColumns={4}
          renderItem={(character) => {
            const { item: { id, name, image } } = character
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Character', { id: id })}>
                <View >
                  <Image
                    style={{ width: size, height: size }}
                    source={{ uri: image }}
                  />
                  <Text key={id} id style={{ width: size, }}> {name} </Text>
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.id.toString()} />
      </SafeAreaView>
    )
  }
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  row: {
    flex: 1,
    justifyContent: "space-around"
  }
});
