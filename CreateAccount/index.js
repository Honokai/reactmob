import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {AppButton} from '../custom/custom'


export default CreateAccount = ({navigation}) => {

    return(
        <View style={style.view}>
            <View style={style.card}>
                <Text style={style.text}>E-mail</Text>
                <TextInput style={style.input} />
                <Text style={style.text}>Senha</Text>
                <TextInput style={style.input}/>
                <Text style={style.text}>Confirme a senha</Text>
                <TextInput style={style.input}/>
                <AppButton backgroundColor="rgb(251,100,180)" title="Criar conta" onPress={()=>{navigation.push('SignIn')}}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderColor: 'transparent',
        borderBottomColor: 'white',
        fontSize: 25,
        width: 300,
        borderWidth: 2,
        alignSelf: 'center',
        color: '#000000',
        paddingLeft: 10,
        height: 50,
        marginBottom: 15
    },
    text: {
        marginLeft: 75,
        fontSize: 25,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    focus: {
        borderColor: '#440055'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(130,150,200)'
    },
    card: {
        backgroundColor: 'rgb(180,150,200)',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'rgb(180,120,200)',
        marginLeft: 30,
        marginRight: 30,
        height: 500,
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#000000',
        elevation: 8
    }
})


