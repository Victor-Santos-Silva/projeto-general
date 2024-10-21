import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
import Contato from './src/Pages/Contato';
import Fac from './src/Pages/Fac';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Sobre' component={Sobre} />
                <Stack.Screen name='Contato' component={Contato} />
                <Stack.Screen name='Fac' component={Fac} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
