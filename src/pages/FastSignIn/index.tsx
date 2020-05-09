import React,{useState} from 'react'
import {View,Text, StatusBar, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';
const image = require('../../../assets/gradient/background.png');


const FastSignIn: React.FC = () => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<String>('');
    const {user, signIn, clearUser} = useAuth();
    const navigation = useNavigation();

    function handleChangeAccount(){
        navigation.navigate('Login');
    }
    function handleClear(){
        clearUser();
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
                <Text style={styles.profileDesc}>Ultima atividade: 09/06/2020</Text>
            </View>
            <View style={styles.buttonList}>
                <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Sim, sou eu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChangeAccount} style={styles.btnSecond}>
                    <Text style={{color: '#111',fontWeight: 'bold'}}>Mudar de conta</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text>Não sou eu, </Text>
                    <TouchableOpacity
                        onPress={clearUser}
                    >
                        <Text style={{color: '#4a2d79'}}>remover conta!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Senha</Text>
                        <TextInput autoFocus={modalVisible} onChangeText={setPassword} secureTextEntry={true} style={styles.modalInput}/>
                        <TouchableOpacity
                            style={{ ...styles.openButton, backgroundColor: "#2196F3", }}
                            onPress={signIn}
                            >
                            <Text style={styles.textStyle}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default FastSignIn;