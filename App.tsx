import React, { Component } from 'react';
import { Login } from "./src/Components/login/Login"
import { Home } from "./src/Components/Home/Home"
import { NavigationContainer } from '@react-navigation/native';
import  {createStackNavigator } from '@react-navigation/stack'

const App = () => {
  const stack = createStackNavigator(
  );

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login" headerMode='none'>
        <stack.Screen name="Login" component={Login}></stack.Screen>
        <stack.Screen name="Home" component={Home}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
);
} 

export default App;
