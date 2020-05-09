import React from 'react'
import {View, StatusBar, Text, ImageBackground} from 'react-native';
import styles from './styles';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {useAuth} from '../../contexts/auth';

const image = require('../../../assets/gradient/background.png');

const SignIn: React.FC = () => {
    const {signIn} = useAuth();

    function handleSign(){
        signIn();
    }

    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle='light-content'/>
            <ImageBackground source={image} style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Faça o login</Text>
                <Text style={styles.headerDesc}>Lorem ipsum</Text>
            </ImageBackground>
            <View style={styles.contentContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput autoCapitalize='none' style={styles.inputEntry}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput secureTextEntry={true} style={styles.inputEntry}/>
                </View>
                <TouchableOpacity onPress={handleSign} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SignIn;

