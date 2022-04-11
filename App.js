import React, {useState,useEffect} from 'react';
import { Text, View, Button, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { css } from './assets/CSS/Css';
import Logincadastro from './views/Logincadastro';
import Login from './views/Login';
import { Telainicial } from './views/Index';
import { Agendamentos } from './views/Index';
import { Fila } from './views/Index';
import {Carregamento} from './views/Index';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Logincadastro" 
          component={Logincadastro}
          options={{
            title:"SmartQueue", 
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center', fontSize:22}
          }} />
          <Stack.Screen name="Login" /*options={{headerShown:false}}*/ component={Login} />
         {/* <Stack.Screen name="Cadastro" component={Cadastro} />*/}
          <Stack.Screen name="Telainicial" 
          component={Telainicial}
          options={{
            title:"Início",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
          <Stack.Screen name="Agendamentos" 
          component={Agendamentos}
          options={{
            title:"Agendamentos",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
          <Stack.Screen name="Fila" 
          component={Fila}
          options={{
            title:"Fila",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
           <Stack.Screen name="Carregamento" 
          component={Carregamento}
          options={{
            title:"Carregamento",
            headerStyle:{backgroundColor:"#53904E"},
            headerTintColor:'#121212',
            headerTitleStyle:{fontWeight:'bold', alignContent:'center', fontSize:22}
          }} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}



