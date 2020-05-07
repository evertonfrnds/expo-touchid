import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    headerContainer: {
        width: Dimensions.get('window').width,
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
    },
    headerTitle:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 25,
        marginBottom: 5,
        opacity: 0.9
    },
    headerDesc:{
        color: '#fff',
        opacity: 0.9,
    },
    contentContainer: {
        flex: 4,
        alignItems: 'center',
        padding: 10,
        paddingTop: 15
    },
    inputContainer: {
        backgroundColor: '#e9ecfb',
        width: Dimensions.get('window').width*0.85,
        paddingVertical: 5,
        paddingHorizontal:15,
        borderRadius: 10,
        marginTop: 10
    },
    inputLabel:{
        fontSize: 12,
        color: '#C0C3CF'
    },
    inputEntry: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4a2d79',
        width: Dimensions.get('window').width*0.85,
        height: 55,
        borderRadius: 10,
        marginTop: 20,
        opacity: 0.9
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})
export default styles;