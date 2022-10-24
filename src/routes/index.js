import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from '../Login'
import Cadastro from '../Cadastro'
import User from '../User'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title:'',
                headerStyle: {
                    backgroundColor: '#191919'
                }
            }}
            />

        <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{
                title:'',
                headerStyle: {
                    backgroundColor: '#FFF'
                }
            }}
            />

        <Stack.Screen
            name="User"
            component={User}
            options={{
                title:'.',
                headerStyle: {
                    backgroundColor: '#191919'
                }
            }}
            />
        </Stack.Navigator>
    )
}