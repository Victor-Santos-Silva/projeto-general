import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function Fac() {
    const [fac, setfac] = useState([])

    // funcao para buscar contatos do servidor
    const listFac = () => {
        axios
            .get("http://10.0.2.2:3000/fac")
            .then((resposta) => {
                setfac(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar Fac.", error);
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listFac();
    }, [])

    return (
        <View style={style.container}>
            <Text style={style.title}>Lista de Fac</Text>
            {fac.length > 0 ? (
                fac.map((fac, index) => (
                    <View key={index} style={style.contatoItem}>
                        <Text>{fac.pergunta}</Text>
                        <Text>{fac.resposta}</Text>
                    </View>
                ))
            ) : (
                <Text style={style.noContacts}>Nenhum fac disponivel.</Text>
            )
            }
        </View >
    )
}

// Estilos
const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    contatoItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#9d6ff0",
    },
    noContacts: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
        marginTop: 20
    }
})
