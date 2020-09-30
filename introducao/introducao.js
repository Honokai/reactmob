import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {AppButton} from '../custom/custom';

export default Introducao2 = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.bemVindo}>Entendendo sobre suas Habilidades</Text>
            <View style={styles.vertical}>
                <View style={styles.card}>
                    <Text style={styles.cardText}> O que são soft-skills?</Text>
                    <Text style={styles.cardResponse}> São jhasldjhaskdhasd lakjslklsac loaksnclk lkajdlskajdlkjasd?</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}> O que são hard-skills?</Text>
                    <Text style={styles.cardResponse}> São jhasldjhaskdhasd lakjslklsac loaksnclk lkajdlskajdlkjasd?</Text>
                </View>
            </View>
            <AppButton title="Estou pronto, entrar" width='big' backgroundColor="rgb(150,120,255)" onPress={() => { navigation.push("SignIn")}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    bemVindo: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#ffffff'
    },
    view: {
        flex: 1,
        backgroundColor: 'rgb(100,100,230)'
    },
    card: {
        marginTop: 10,
        flex: 1,
        fontSize: 30,
        padding: 15,
        shadowColor: '#000000',
        elevation: 8,
        backgroundColor: '#ffffff',
        borderRadius: 15
    },
    vertical: {
        flex: 1,
        backgroundColor: 'rgb(150,120,180)',
        height: 500,
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        elevation: 8,
        padding: 15
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 25
    },
    cardResponse: {
        fontSize: 25,
        color: 'rgb(100,200,100)'
    }
})