import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function Contato() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
   
    const enviarContato = async () => {
      if (!nome || !telefone) {
        Alert.alert("Erro, por favor preencha todos os campos!");
        return;
      }
   
      const novoContato = { nome, telefone};
   
      axios.post('http://10.0.2.2:3000/contatos', novoContato)
      .then(resposta => {
        if (resposta.status === 201) {
          Alert.alert("Sucesso, contato adicionado!");
          setNome('');
          setTelefone('');
        } else {
          Alert.alert("Erro, falha ao adicionar contato.");
        }
      })
    }
   
    return (
      <View style={styles.container}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          />
   
          <Text style={styles.label} >Telefone</Text>
          <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          value={telefone}
          onChangeText={setTelefone}
          />
   
          <Button title="Enviar contato" onPress={enviarContato}/>
   
      </View>
    )
  }
   
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 10,
      marginBottom: 20,
      borderRadius: 5
    }
  });