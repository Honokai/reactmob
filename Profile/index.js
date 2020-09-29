import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AppButton} from '../custom/custom';

export default Profile = ({navigation}) => {

    return(
        <View>
            <Text style={styles.text}>Bem vindo, usuario</Text>
            <Image style={styles.img} source={require('../assets/profile.png')} />
            <AppButton title="Minhas informações" width="med" backgroundColor="#425886" onPress={() => { navigation.push("Informacao")}} />
            <AppButton title="Minhas habilidades" backgroundColor="#ff3355" onPress={() => { navigation.push("Habilidades")}}/>
            <AppButton title="Meus grupos" backgroundColor="#333386" onPress={() => { navigation.push("Grupos")}}/>
        </View>
    )
}

const styles  = StyleSheet.create({
    text: {
        fontSize: 25    
    },
    img: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
})