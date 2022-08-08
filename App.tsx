import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import JsonData from './Components/JsonData';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerStyle: {backgroundColor: '#9370db'}}}
        />
        <Stack.Screen
          name="JsonData"
          component={JsonData}
          options={{headerStyle: {backgroundColor: '#9370db'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
