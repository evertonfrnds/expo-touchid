import React from 'react'
import {View,Text, StatusBar, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';

import styles from './styles';
const image = require('../../../assets/gradient/background.png');

const FastSignIn: React.FC = () => {

    const {user} = useAuth();

    const navigation = useNavigation();
    function handleChangeAccount(){
        navigation.navigate('Login');
    }
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='#fff' barStyle='dark-content'/>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{user?.firstName}, é você?</Text>
            </View>
            <View style={styles.profileContainer}>
                <ImageBackground source={image} style={styles.imageProfile} borderRadius={50}/>
                <Text style={styles.profileTitle}>{user?.firstName+' '+user?.lastName}</Text>
                <Text style={styles.profileDesc}>Ultima atividade: 07/06/2020</Text>
            </View>
            <View style={styles.buttonList}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sim, sou eu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChangeAccount} style={styles.btnSecond}>
                    <Text style={{color: '#111',fontWeight: 'bold'}}>Mudar de conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FastSignIn;