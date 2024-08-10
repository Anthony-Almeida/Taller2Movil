import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constantsColor";

export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 20,
        fontWeight: 'bold',
        borderRadius:30,
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 30,
    borderBottomLeftRadius:200,
    borderBottomRightRadius:200,
    },
    titleBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    descriptionBody: {
        fontSize: 16
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput: {
        marginTop: 30,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop:12
    },
    textRedirection:{
        marginTop:30,
        fontSize:17,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center'
    },
    titleBienvenido: {
        fontSize: 17,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        alignSelf:"center"
    },
    etiqueta: { 
        borderRadius:10,
        height:80,
        width:80,
        alignSelf:"center"
    },
    avisoRegistro:{
        alignSelf:"center",
        fontWeight:"bold",
        fontSize:15,
        marginTop:40,
        justifyContent:"center",
        textAlign:"center"

    }
});