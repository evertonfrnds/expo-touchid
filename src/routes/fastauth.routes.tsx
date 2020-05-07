import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import FastSignIn from '../pages/FastSignIn';
import SignIn from './auth.routes';

const FastAuthStack = createStackNavigator();

const FastAuth: React.FC = () => {
    return(
        <FastAuthStack.Navigator>
            <FastAuthStack.Screen options={{headerShown: false}} name='FastLogin' component={FastSignIn}/>
            <FastAuthStack.Screen options={{headerShown: false}} name='Login' component={SignIn}/>
        </FastAuthStack.Navigator>
    )
}


export default FastAuth;