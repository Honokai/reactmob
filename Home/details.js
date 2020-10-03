import React from 'react';
import {View, Text, StyleSheet, ScrollView, ta} from 'react-native';


export default HomeDetails = () => {

    return(
        <View style={styles.viewExterna}>
            <Text style={styles.cabecalho}>Atividades na semana</Text>
            <ScrollView style={styles.scrollView}>
                <View style={styles.viewInterna}>
                    <Text style={styles.text}> Maiores interações </Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.header,{flex:2}]}>Grupo</Text>
                        <Text style={[styles.header,{flex:2}]}>Atividade</Text>
                        <Text style={[styles.header,{flex:2}]}>Edit</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'white'
    },
    viewExterna: {
        backgroundColor: 'rgb(20,20,20)',
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    },
    viewInterna: {
        backgroundColor: 'rgb(100,100,100)',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 15,
        marginTop: 20,
        padding: 10
    },
    scrollView: {
        flex: 1
    },
    header: {
        textAlign: 'center',
        fontSize:20,
        color: '#eeeeee'
    }
})