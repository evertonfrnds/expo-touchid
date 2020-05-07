import React from 'react';
import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { ActivityIndicator, View } from 'react-native';

const Routes: React.FC = () => {
    const {signed, loading} = useAuth();
    if(loading){
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator size='large' color='#999'/>
            </View>
        )
    }else{
        if(signed == 'true'){
            return <AppRoutes/>
        }else{
            return <AuthRoutes/>
        }
    }
}

export default Routes;
