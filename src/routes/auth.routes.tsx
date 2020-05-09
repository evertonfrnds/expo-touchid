import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '../contexts/auth';

import SignIn from '../pages/SignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen options={{headerShown: false}} name='Login' component={SignIn}/>
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;