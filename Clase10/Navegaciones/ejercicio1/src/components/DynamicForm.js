import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: ""
    };
  }

  onSubmit() {
    console.log('Comentario enviado:', this.state.comentario);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de Comentarios</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribí tu comentario..."
          value={this.state.comentario}
          onChangeText={(text) => this.setState({ comentario: text })}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default DynamicForm;
