import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AuthContext} from '../context';
import {AppButton} from '../custom/custom'


export default SignIn = ({navigation}) => {

    const {signIn} = React.useContext(AuthContext);

    return(
        <View style={styles.view}>
            <Image style={styles.grupou} source={require('../assets/grupou.png')} />
            <AppButton title="Criar conta" backgroundColor="rgb(80,0,120)" onPress={() => { navigation.push("CreateAccount")}}/>
            <AppButton title="Entrar" backgroundColor="rgb(80,80,150)" onPress={() => { signIn()}} />
        </View>
    )
}


const styles = StyleSheet.create({
    grupou: {
        width: 350,
        alignSelf: 'center',
        borderRadius: 15
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
})