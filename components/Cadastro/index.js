import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import firebase from '../config/firebaseConnection';

export default function Cadastro() {
    const [nome, setNome] = useState();
    const [cargo, setCargo] = useState();

    async function cadastrar() {
        if(nome !== '' && cargo !== ''){
            let usuarios = await firebase.database.ref('usuarios');
            let chave = usuarios.push().key;

            usuarios.child(chave).set({
                nome: nome,
                cargo: cargo
            });

            setNome('');
            setCargo('');

            alert('Registro Cadastrado');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Cadastro </Text>

            <Text style={styles.texto}> Nome: </Text>
            <TextInput 
            style={styles.input}
            value={nome}
            onChangeText={(texto)=>setNome(texto)}
            />

            <Text style={styles.texto}> Cargo: </Text>
            <TextInput
            style={styles.input}
            value={cargo}
            onChangeText={(texto)=>setCargo(texto)}
            />

            <TouchableOpacity style={styles.textoBotao} onPress={cadastrar}>
                <Text style={styles.textoBotao}> Inserir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textoBotao}>
                <Text style={styles.textoBotao}> Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textoBotao}>
                <Text style={styles.textoBotao}> Alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textoBotao}>
                <Text style={styles.textoBotao}> Deletar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 30,
        textAlign:'center',
        marginTop:20
    },
    botao: {
        backgroundColor: '#ccc',
        marginTop: 20,
        width:Dimensions.get('window').width-20,
        marginLeft: 10,
        marginRight: 10,
    },
    textoBotao:{
        fontSize:25,
        textAlign:'center'
    },
    input: {
        width: Dimensions.get('window').width-20,
        height:40,
        borderColor:'#000',
        borderWidth: 1,
        marginLeft:10,
        marginRight:10,
        fontSize: 20,
    },
    texto: {
        fontSize: 20,
        marginLeft: 10
    }
})