import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    return (
        <View style={style.card}>
            <Text style={style.cardTitle}>{props.title}</Text>
            <Text style={style.cardContent}>{props.content}</Text>
            <Button
                title={props.buttonText}
                onPress={props.onPress}
            />
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: "#4324d4",
        borderRadius: 10,
        padding: 15,
        marginTop: 12,
        elevation: 3, // Sombra para Android
        shadowOpacity: 0.2,
        shadowRadius: 1.41
    },
    cardTitle: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardContent: {
        textAlign: "center",
        color: "white",
        fontSize: 14,
        marginBottom: 10
    }


})