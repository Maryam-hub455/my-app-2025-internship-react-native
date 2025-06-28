
import React from 'react';
import { View, ImageBackground, StyleSheet,ScrollView,Text } from 'react-native';

const ListingScreen = () => {
  const data = ["😋","🙄","😊","❤","😪","😴","😑","😎"];
  return (
    <ScrollView>
      
      {data.map((item) => (
      
      

        <Text style={styles.textStyle}>{item}</Text>
    
      
      ))};
  
    </ScrollView>
  );
}

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