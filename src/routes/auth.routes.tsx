import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '../contexts/auth';

import SignIn from '../pages/SignIn';
import FastSignIn from '../pages/FastSignIn';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {

    const {user} = useAuth();

    function setScreen(){
        if(user){
            return (
                <>
                    <AuthStack.Screen options={{headerShown: false}} name='FastSign' component={FastSignIn}/>
                    <AuthStack.Screen options={{headerShown: false}} name='Login' component={SignIn}/>
                </>
            )
        }else{
            console.log(user, 'screen');
            
            return <AuthStack.Screen options={{headerShown: false}} name='Login' component={SignIn}/>
        }
    }
    return(
        <AuthStack.Navigator>
            {setScreen()}
        </AuthStack.Navigator>
    )
}


export default AuthRoutes;