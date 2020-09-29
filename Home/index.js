import React, {Tab} from 'react';
import {View, Text, Image} from 'react-native';
import {AuthContext} from '../context';
import {AppButton} from '../custom/custom'

export default Home = ({navigation}) => {

    const {signOut} = React.useContext(AuthContext);

    return(        
        <View>
            <Text>Testando contigo</Text>
            <AppButton title="Ver detalhes" onPress ={() => {navigation.push('HomeDetails')}} />
            <AppButton title="Sair" backgroundColor="#ff2222" onPress={() => {signOut()}}/>   
        </View>
    )
}