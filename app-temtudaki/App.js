import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/MainStyle';

export default function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    console.log("entrou")
    console.log(email)
    console.log(password)
  }

  return (
    <View style={[styles.container, specifcStyle.specificContainer]}>

      <Text h3>Entre no TemTudaki</Text>

      <Input
      placeholder="E-mail"
      leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />

      <Input
      placeholder="Sua senha"
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />

      <Button
              icon={
                <Icon
                  name="check"
                  size={15}
                  color="white"
                />
              }
              title="Entrar"
              onPress={() => entrar()}
      />

    </View>
  );
}


const specifcStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#def"
  }
})