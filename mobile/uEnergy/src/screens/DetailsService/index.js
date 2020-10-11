import React from 'react';
import { View } from 'react-native'
import { Text, Button, Icon} from 'react-native-elements';
import styles from './styles';
import HeaderComponent from '../../components/Header'
import { ScrollView,  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Map from '../../components/Map'

export default function DetailsService(){
    const navigation = useNavigation();

    return (           
            <View style={styles.container}>
                <HeaderComponent/>
                <Text style={styles.mainText}>

                    <Text h4 style={styles.text}>
                        Ordem de Serviço <Text>158181</Text>                 
                    </Text>

                    <Text style={styles.text}>
                        {"\n"}Tipo do Serviço: <Text>Medição de relógio</Text>                
                    </Text>

                    <Text style={styles.text}>
                    {"\n"}Endereço: <Text>Rua Iracema de Alencar 20, Taquara, Rio de Janeiro, RJ. CEP: 22725-290 (Há 2km da sua atual localização)</Text>
                    </Text>

                    <Text style={styles.text}>
                    {"\n"}Remuneração Aproximada: <Text>R$:10,00 + R$:00,50 por km percorrido</Text>
                    </Text>
                </Text>


            
                <View style={styles.containerIcon}>
                    <Icon
                    name='check'
                    type='fontisto'
                    color='green'
                    size={70}
                    style={styles.divIcon}
                    onPress={() => {navigation.goBack()}}>
                    </Icon>

                    <Icon
                    name='close-a'
                    type='fontisto'
                    color='red'
                    size={70}
                    style={styles.divIcon}
                    onPress={() => {navigation.goBack()}}>
                    </Icon>
                </View> 
                
                <Map />
            </View>

    )
}
