import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
import charactersJSON from "../characters.json"

//we look for the character with the id we`ll get from the url
const fetchUrl = async (id, setData, setLoading) => {
  let response = charactersJSON.find(obj => obj.id == id);
  setData(response);
  setLoading(false);
}
const Character = ({ navigation }) => {
  console.log('Character :', navigation.state);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //get ID from URI
  const idCharacter = navigation.getParam('id')

  useEffect(() => {
    //if we get any ID we look for the character
    if (idCharacter) {
      fetchUrl(idCharacter, setData, setLoading);
    }
  }, [idCharacter]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> LOADING... </Text>
      </View>
    )
  } else {
    const { image, name } = data
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: image }}
          />
          <Text style={styles.text}> {name} </Text>
        </View>
      </View>
    )
  }
}
export default Character
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center"
  },
  imageContainer: {
    height: width,
    justifyContent: "flex-end"
  },
  image: {
    height: width,
    width,
    position: "absolute"
  },
  text: {
    textAlign: "center", fontSize: 29
  }
});
