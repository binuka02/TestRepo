import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, StatusBar  } from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Image 
            style={{
              width:100, 
              height:100, 
              resizeMode: 'contain',
            }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
            }}
          />
          <NavOptions/>
        </View>
      </SafeAreaView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
      },
      text: {
        fontSize: 25,
        fontWeight: '500',
      }
});