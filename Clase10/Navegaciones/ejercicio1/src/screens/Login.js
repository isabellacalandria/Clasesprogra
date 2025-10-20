import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';

class Login extends Component{
    constructor(props){
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
            <Text style={styles.title}>Login</Text>
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
                <Text>Login</Text>
            </Pressable>


            <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate("Register")}> 
                <Text style={styles.botonTexto}>Ir al registro</Text> 
            </Pressable>
            <Pressable style={styles.botondos} onPress={() => this.props.navigation.navigate('HomeMenu')}> 
                <Text style={styles.botondosTexto}>Entrar a la app</Text> 
            </Pressable>
        </View>
    )
}}

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
    botondos: {
        borderColor: '#6c5ce7',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    botondosTexto: {
        color: '#6c5ce7',
        fontSize: 16,
    },

  })

export default Login;