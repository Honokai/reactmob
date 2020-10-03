import React, {Tab} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AuthContext} from '../context';
import {AppButton} from '../custom/custom'

export default Home = ({navigation}) => {

    const {signOut} = React.useContext(AuthContext);
    
    return(        
        <View>
            <Text style={styles.cabecalho}>Olá, nomeaqui</Text>
            <AppButton title="Ver detalhes" onPress ={() => {navigation.push('HomeDetails')}} />
            <AppButton title="Sair" backgroundColor="#ff2222" onPress={() => {signOut()}}/>   
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        fontSize: 30
    }
})