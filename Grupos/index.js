import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppButton} from '../custom/custom'

export default Grupos = ({navigation}) => {


    return(
        <View>
            <Text style={styles.text}>Grupos</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.header,{flex:2}]}>Nome</Text>
                <Text style={[styles.header,{flex:2}]}>Professor</Text>
                <Text style={[styles.header,{flex:2}]}>Disciplina</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:2}]}>nuome</Text>
                <Text style={[styles.inner,{flex:2}]}>Teurom</Text>
                <Text style={[styles.inner,{flex:2}]}>Protocolos para internet</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:2}]}>Hellowa</Text>
                <Text style={[styles.innerA,{flex:2}]}>Gurom</Text>
                <Text style={[styles.innerA,{flex:2}]}>introducao a prog</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:2}]}>Grupoas</Text>
                <Text style={[styles.inner,{flex:2}]}>Kiur</Text>
                <Text style={[styles.inner,{flex:2}]}>Http</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:2}]}>Termal</Text>
                <Text style={[styles.innerA,{flex:2}]}>kilua</Text>
                <Text style={[styles.innerA,{flex:2}]}>Hard</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:2}]}>Outro grupo qualquer</Text>
                <Text style={[styles.inner,{flex:2}]}>shoin</Text>
                <Text style={[styles.inner,{flex:2}]}>Banco I</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:2}]}>BD Alo</Text>
                <Text style={[styles.innerA,{flex:2}]}>kilua</Text>
                <Text style={[styles.innerA,{flex:2}]}>Banco II</Text>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    header: {
        fontSize: 25,
        backgroundColor: 'rgb(0,0,0)',
        padding: 10,
        color: '#ffffff',
        textAlign: 'center'
    },
    inner: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgb(90,90,90)',
        fontSize: 20,
        color: '#ffffff',
        paddingLeft: 10,
        textAlign: 'center'
    },
    innerA: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'rgb(200,200,200)',
        fontSize: 20,
        color: '#000000',
        paddingLeft: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 25,
        alignSelf: 'center',
        backgroundColor: '#000444',
        color: '#ffffff',
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    },
    img: {
        width: 20,
        height: 0
    }
})