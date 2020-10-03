import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {AppButton} from '../custom/custom';

export default Habilidades = () => {

    return(
        <View>
            <Text style={styles.text}>Suas habilidades</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.header,{flex:2}]}>Nível</Text>
                <Text style={[styles.header,{flex:2}]}>Habilidade</Text>
                <Text style={[styles.header,{flex:2}]}>Tipo</Text>
                <Text style={[styles.header,{flex:1}]}>Editar</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:2}]}>5</Text>
                <Text style={[styles.inner,{flex:2}]}>Conversação</Text>
                <Text style={[styles.inner,{flex:2}]}>Soft</Text>
                <Text style={[styles.inner,{flex:1}]}><AppButton width='icon' title={<Icon name="content-save-edit"/>} onPress={()=>{alert('Abrir edicao')}} /></Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:2}]}>2</Text>
                <Text style={[styles.innerA,{flex:2}]}>Alternado</Text>
                <Text style={[styles.innerA,{flex:2}]}>Hard</Text>
                <Text style={[styles.innerA,{flex:1}]}><AppButton width='icon' title={<Icon name="content-save-edit"/>} onPress={()=>{alert('Abrir edicao')}} /></Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:2}]}>5</Text>
                <Text style={[styles.inner,{flex:2}]}>Conversação</Text>
                <Text style={[styles.inner,{flex:2}]}>Soft</Text>
                <Text style={[styles.inner,{flex:1}]}><AppButton width='icon' title={<Icon name="content-save-edit"/>} onPress={()=>{alert('Abrir edicao')}} /></Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:2}]}>2</Text>
                <Text style={[styles.innerA,{flex:2}]}>Alternado</Text>
                <Text style={[styles.innerA,{flex:2}]}>Hard</Text>
                <Text style={[styles.innerA,{flex:1}]}><AppButton width='icon' title={<Icon name="content-save-edit"/>} onPress={()=>{alert('Abrir edicao')}} /></Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.inner,{flex:2}]}>5</Text>
                <Text style={[styles.inner,{flex:2}]}>Conversação</Text>
                <Text style={[styles.inner,{flex:2}]}>Soft</Text>
                <Text style={[styles.inner,{flex:1}]}><AppButton width='icon' title={<Icon name="content-save-edit"/>} onPress={()=>{alert('Abrir edicao')}} /></Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.innerA,{flex:2}]}>2</Text>
                <Text style={[styles.innerA,{flex:2}]}>Alternado</Text>
                <Text style={[styles.innerA,{flex:2}]}>Hard</Text>
                <Text style={[styles.innerA,{flex:1}]}><AppButton width='icon' title={<Icon name="content-save-edit"/>} onPress={()=>{alert('Abrir edicao')}} /></Text>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    header: {
        fontSize: 25,
        backgroundColor: 'rgb(50,50,50)',
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