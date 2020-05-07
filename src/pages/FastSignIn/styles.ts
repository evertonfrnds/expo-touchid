import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4a2d79',
        marginTop: 20
    },
    profileContainer:{
        flex:5,
        justifyContent:'center',
        alignItems:'center',
    },
    imageProfile:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    profileTitle:{
        fontWeight:'bold',
        marginTop: 20,
    },
    profileDesc:{
        color: '#aaa',
        
    },
    buttonList: {
        flex: 3,
        alignItems: 'center'
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4a2d79',
        width: Dimensions.get('window').width*0.85,
        height: 55,
        borderRadius: 10,
        marginTop: 10,
        opacity: 0.9
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    },
    btnSecond:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C7CAD6',
        width: Dimensions.get('window').width*0.85,
        height: 55,
        borderRadius: 10,
        marginTop: 10,
    }
});

export default styles;