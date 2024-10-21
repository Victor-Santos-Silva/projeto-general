import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.tituloContato}>Seja Bem-Vindo!</Text>
            <Text style={styles.tituloInfo}>Mais informações.</Text>
            <Card
                title="Sobre"
                content="Saiba mais sobre nos e nossos servicos."
                buttonText="Ir para sobre."
                onPress={() => navigation.navigate('Sobre')}
            />

            <Card
                title="Contato"
                content="Entre em contato conosco"
                buttonText="Ir para Contato."
                onPress={() => navigation.navigate('Contato')}
            />

            <Card
                title="Fac"
                content="Veja as perguntas do Fac."
                buttonText="Ir para Fac."
                onPress={() => navigation.navigate('Fac')}
            />
            {/* <Button
                title="Ir para Contato"
                onPress={() => navigation.navigate('Contato')}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    tituloContato: {
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30
    },
    tituloInfo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    }
})
