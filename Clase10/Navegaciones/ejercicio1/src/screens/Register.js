import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';


class Register extends Component{
    constructor(props) {
        super(props)
        this.state={
            email:"",
            user: "",
            password:"",

        }
    }
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText= {text => this.setState({email: text})}
                value={this.state.email}
            />
            <TextInput style={styles.input}
                placeholder="Usuario"
                onChangeText= {text => this.setState({user: text})}
                value={this.state.user}
            />
            <TextInput style={styles.input}
                placeholder="Password"
                keyboardType= "default"
                secureTextEntry = {true}
                onChangeText= {text => this.setState({password: text})}
                value={this.state.password}
            />
            <Pressable onPress={() => this.onSubmit()}> 
                <Text>Registrate</Text>
            </Pressable>


            <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate("Login")}> 
                <Text style={styles.botonTexto}>Ya tengo una cuenta</Text> 
            </Pressable>
        </View>
       
    )}}


const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
    title: {
        fontSize: 24,
        marginBottom: 30,
        fontWeight: 'bold',
        color: '#222',
    },
    boton: {
        backgroundColor: '#6c5ce7',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 15,
    },
    botonTexto: {
        color: '#fff',
        fontSize: 16,
    },
})

export default Register;