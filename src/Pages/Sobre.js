import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function Sobre() {
    const [contatos, setContatos] = useState([])

    // funcao para buscar contatos do servidor
    const listContatos = () => {
        axios
            .get("http://10.0.2.2:3000/contatos")
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar conatos.", error);
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listContatos();
    }, [])

    return (
        <View style={style.container}>
            <Text style={style.title}>Lista de Contatos</Text>
            {contatos.length > 0 ? (
                contatos.map((contato, index) => (
                    <View key={index} style={style.contatoItem}>
                        <Text>{contato.nome}</Text>
                        <Text>{contato.telefone}</Text>
                    </View>
                ))
            ) : (
                <Text style={style.noContacts}>Nenhum contato disponivel.</Text>
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
