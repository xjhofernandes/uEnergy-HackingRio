import React from 'react';
import { View } from 'react-native'
import { Text, Button, Icon, ListItem} from 'react-native-elements';
import styles from './styles';
import HeaderComponent from '../../components/Header'
import { ScrollView,  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function AvailableServices(){
    const navigation = useNavigation();
    const list = [
        {
          title: 'Ordem de Serviço 1',
          km: '3 km de distancia'
        },
        {
          title: 'Ordem de Serviço 2',
          km: '2 km de distancia'
        },
      ]
    
    return (
        <ScrollView>
         <HeaderComponent/>

         <View>
            {
                list.map((item, i) => (
                <ListItem button  key={i} bottomDivider
                onPress={() => {navigation.navigate('DetailsService')}}>
                    <ListItem.Content >
                    <ListItem.Title>{item.title}</ListItem.Title>
                    <ListItem.Subtitle>{item.km} </ListItem.Subtitle> 
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                ))
           }

         </View>   
        
        </ScrollView>
    )
}