
import React from 'react';
import { View, ImageBackground, StyleSheet,ScrollView,Text } from 'react-native';

const ListingScreen = () => {
  const data = [1,2,3,4,5,6,7,8,9,10];
  return (
    <ScrollView>
      <ScrollView horizontal={true}>
      {data.map((item) => (
      
      <ImageBackground 
      source={{uri:"https://cdn.pixabay.com/photo/2015/01/07/10/24/aster-591311_1280.jpg"}} 
      style={styles.image} >

        <Text style={styles.textStyle}>{item}</Text>
      </ImageBackground>
      
      ))};
    </ScrollView>
      {data.map((item) => (
      
      <ImageBackground 
      source={{uri:"https://cdn.pixabay.com/photo/2025/02/20/07/51/ai-generated-9419220_1280.png"}} 
      style={styles.image} >

        <Text style={styles.textStyle}>{item}</Text>
      </ImageBackground>
      
      ))};
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  textStyle:{
    fontSize: 40,
    color: "black",
  },
});

export default ListingScreen;