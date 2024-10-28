import React, { useEffect, useState } from 'react'
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios';

export default function Sobre() {
    const [contatos, setContatos] = useState([])

    // Funcao para buscar contatos do sevidor
    const listContatos = () => {
        axios
            .get('http://10.0.2.2:3000/contatos')
            .then((resposta) => {
                setContatos(resposta.data)
            })
            .catch((error) => {
                console.error("Erro ao buscar contatos", error)
            })
    }

    //Função para excluir um contato
    const deleteContato = (id) => {
        axios
            .delete(`http://10.0.2.2:3000/contatos/${id}`)
            .then(() => {
                //Atualizar a lista de contatos
                setContatos(contatos.filter((contato) => contato.id !== id));
                Alert.alert("Sucesso, contato excluido com sucesso");
            })
            .catch((error) => {
                console.log("Erro ao excluir contato", error);
                Alert.alert("Erro, não foi possivel excluir.")
            })
    }

    //Função para editar um contato
    const editarContato = (id) => {

        axios
            .put(`http://10.0.2.2:3000/contatos/${id}`)
            .then(() => {
                
                Alert.alert("Sucesso, contato editado com sucesso");
            })
            .catch((error) => {
                console.log("Erro ao editar contato", error);
                Alert.alert("Erro, não foi possivel editar.")
            })
    }

    // Use o useEffect para buscar dados
    useEffect(() => {
        listContatos();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Lista de Contatos</Text>
                {contatos.length > 0 ? (
                    contatos.map((contato, index) => (
                        <View key={index} style={styles.contatoItem}>
                            <Text>{contato.nome}</Text>
                            <Text>{contato.telefone}</Text>
                            <Button
                                title="Excluir"
                                color="#4324d4"
                                onPress={() => deleteContato(contato.id)}
                            />
                            <Button
                                title="Editar"
                                color="#4324d4"
                                onPress={() => editarContato(contato.id)}
                            />
                        </View>
                    ))
                ) : (
                    <Text style={styles.noContacts}>Nenhum contato disponivel</Text>
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    contatoItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    noContacts: {
        fontSize: 16,
        color: "gray",
        textAlign: "center",
        marginTop: 20
    }
})