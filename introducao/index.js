import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import {AppButton} from '../custom/custom';

export default Introducao = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.bemVindo}>Bem-vindo</Text>
            <View style={styles.vertical}>
                <View style={styles.card}>
                    <Text style={styles.cardText}> O que é o Grupou?</Text>
                    <Text style={styles.cardResponse}> texknflkasdlas dsaj lkasjd lsakjdllkajsd lkjasdl iwqod ima odkm oimasd j klklsakjd</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}> O que é o Grupou?</Text>
                    <Text style={styles.cardResponse}> texknflkasdlas dsaj lkasjd lsakjdllkajsd lkjasdl iwqod ima odkm oimasd j klklsakjd</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}> O que é o Grupou?</Text>
                    <Text style={styles.cardResponse}> texknflkasdlas dsaj lkasjd lsakjdllkajsd lkjasdl iwqod ima odkm oimasd j klklsakjd</Text>
                </View>
            </View>
            <AppButton title="Próximo" backgroundColor="rgb(150,120,180)" onPress={() => {navigation.push("Introdução2")} }/>
        </View>
    )
}

const styles = StyleSheet.create({
    bemVindo: {
        fontSize: 50,
        alignSelf: 'center',
        color: '#ffffff'
    },
    view: {
        flex: 1,
        backgroundColor: 'rgb(120,120,200)'
    },
    card: {
        marginTop: 10,
        fontSize: 40,
        padding: 15,
        shadowColor: '#000000',
        elevation: 8,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        flex:1
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