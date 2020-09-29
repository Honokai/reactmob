import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppButton} from '../custom/custom';

export default Habilidades = () => {

    return(
        <View>
            <Text style={styles.text}>Suas habilidades</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.header,{flex:1}]}>Nível</Text>
                <Text style={[styles.header,{flex:1}]}>Habilidade</Text>
                <Text style={[styles.header,{flex:1}]}>Tipo</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:1}]}>5</Text>
                <Text style={[styles.inner,{flex:1}]}>Conversação</Text>
                <Text style={[styles.inner,{flex:1}]}>Soft</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:1}]}>2</Text>
                <Text style={[styles.innerA,{flex:1}]}>Alternado</Text>
                <Text style={[styles.innerA,{flex:1}]}>Hard</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:1}]}>5</Text>
                <Text style={[styles.inner,{flex:1}]}>Conversação</Text>
                <Text style={[styles.inner,{flex:1}]}>Soft</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:1}]}>2</Text>
                <Text style={[styles.innerA,{flex:1}]}>Alternado</Text>
                <Text style={[styles.innerA,{flex:1}]}>Hard</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:1}]}>5</Text>
                <Text style={[styles.inner,{flex:1}]}>Conversação</Text>
                <Text style={[styles.inner,{flex:1}]}>Soft</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:1}]}>2</Text>
                <Text style={[styles.innerA,{flex:1}]}>Alternado</Text>
                <Text style={[styles.innerA,{flex:1}]}>Hard</Text>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    header: {
        fontSize: 25,
        backgroundColor: 'rgb(50,50,50)',
        padding: 10,
        color: '#ffffff'
    },
    inner: {
        backgroundColor: 'rgb(90,90,90)',
        fontSize: 20,
        color: '#ffffff',
        paddingLeft: 10
    },
    innerA: {
        backgroundColor: 'rgb(200,200,200)',
        fontSize: 20,
        color: '#000000',
        paddingLeft: 10
    },
    text: {
        fontSize: 25,
        alignSelf: 'center',
        backgroundColor: '#000454',
        color: '#ffffff',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    },
    img: {
        width: 20,
        height: 50
    }
})