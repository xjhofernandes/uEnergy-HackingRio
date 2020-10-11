import React, { useState, useEffect } from 'react';
import { Image, View, Platform } from 'react-native';
import { Button } from 'react-native-elements';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import styles from './styles';

export default function AnexoFotos() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Ooops, Precisamos da sua permissão para acessar as imagens');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View>
            <View>
                <Button title="Anexar Foto" titleStyle={styles.caixaFotoTexto} type="outline" buttonStyle={styles.caixaFotoAnexo} onPress={pickImage} />
            </View>
            <View style={{ alignItems: "center" }}>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 4,  marginBottom: 4}} />}
            </View>
        </View>
    );
}