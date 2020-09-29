import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {AppButton} from '../custom/custom'


export default CreateAccount = () => {

    return(
        <View style={style.view}>
            <Text style={style.text}>E-mail</Text>
            <TextInput style={style.input} />
            <Text style={style.text}>Senha</Text>
            <TextInput style={style.input}/>
            <Text style={style.text}>Confirme a senha</Text>
            <TextInput style={style.input}/>
            <AppButton backgroundColor="#000000" title="Criar conta" />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderColor: 'gray',
        fontSize: 25,
        width: 300,
        borderWidth: 2,
        alignSelf: 'center',
        color: '#000000',
        paddingLeft: 10,
        height: 50
    },
    text: {
        alignSelf: 'center',
        fontSize: 25,
        color: '#000000',
    },
    focus: {
        borderColor: '#440055'
    },
    view: {
        flex: 1,
        justifyContent: 'center'
    }
})


