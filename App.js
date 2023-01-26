import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {store} from "./store"
import HomeScreen from './screens/HomeScreen';
import RideScreen from './screens/RideScreen';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          option={{
            headerShown: false,
          }}
          />
          <Stack.Screen
          name="RideScreen"
          component={RideScreen}
          option={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
