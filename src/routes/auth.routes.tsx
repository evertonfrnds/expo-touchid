import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import FastSignIn from '../pages/FastSignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
    function setScreen(a: boolean){
        if(a){
            return <AuthStack.Screen name='Login' component={SignIn}/>
        }else{
            return <AuthStack.Screen name='FastSign' component={FastSignIn}/>
        }
    }
    return(
        <AuthStack.Navigator initialRouteName='FastSign'>
            {setScreen(true)}
        </AuthStack.Navigator>
    )
}
export default AuthRoutes;