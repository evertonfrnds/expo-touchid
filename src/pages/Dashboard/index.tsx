import React from 'react'
import {View, Button, StatusBar, Text} from 'react-native';
import {useAuth} from '../../contexts/auth';
const Dashboard: React.FC = () => {
    const {signOut} = useAuth();
    function handleSignOut(){
        setTimeout(()=>{
            signOut();
        }, 200);
        
    }
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
            <StatusBar translucent backgroundColor='#fff' barStyle='dark-content'/>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Dashboard</Text>
            <Button title='Sair' onPress={handleSignOut}/>
        </View>
    )
}
export default Dashboard;

