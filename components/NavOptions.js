import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";


const data = [
    {
        id: "Ride",
        title: "Get a Ride",
        image: "https://purepng.com/public/uploads/large/purepng.com-hyundai-ioniq-white-carcarvehicletransporthyundai-961524653528qvh7u.png",
        screen: "RideScreen",
    },
    {
        id: "Passenger",
        title: "Catch a Bus",
        image: "https://purepng.com/public/uploads/large/purepng.com-hyundai-ioniq-white-carcarvehicletransporthyundai-961524653528qvh7u.png",
        screen: "RideScreen",
    },
];

const NavOptions = () => {

    const navigation = useNavigation();

    return(
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
                <Image
                style={{width:120, height: 120, resizeMode: "contain"}}
                source={{uri: item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 my-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                />
            </View>
        </TouchableOpacity>
    )}
    />
  );
};

export default NavOptions;

