import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {AppButton} from '../custom/custom';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default Informacao = () => {

    return(
        <View style={styles.view}>
            <Card style={styles.card}>
                <Card.Title title="Dados" style={styles.labelTitle}/>
                <Card.Content>
                    <Text style={styles.label}> Nome </Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.label}> E-mail </Text>
                    <TextInput style={styles.input}/>
                    <Text style={styles.label}> Instituição </Text>
                    <TextInput style={styles.input}/>
                </Card.Content>
                <Card.Actions style={styles.left}>
                    <AppButton backgroundColor='rgb(150,100,180)' title="Salvar"/>
                </Card.Actions>
            </Card>
                
        </View>
    )
}

const styles  = StyleSheet.create({
    text: {
        fontSize: 25,
        alignSelf: 'center',
        backgroundColor: '#000454',
        color: '#ffffff',
        borderRadius: 15,
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 10
    },
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
    label: {
        fontSize: 25,
        color: '#000000',
        marginLeft: 75
    },
    view: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgb(50,50,50)'
    },
    card: {
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10
    },
    left: {
        alignContent: 'flex-end'
    },
    labelTitle: {
        fontSize: 25
    }
})