import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Button} from 'react-native';
import {
  Div,
  Icon,
  Input,
  Dropdown,
  ThemeProvider,
} from 'react-native-magnus';

function Login({navigation}) {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('./assets/loading.jpg')} />
    
    <Input
          mx="xl"
          mt="md"
          px="md"
          py="sm"
          borderColor="gray200"
          borderWidth={2}
          prefix={
            <Div row alignItems="center">
            <Button
            title="Id :"
            bg="white"
            alignItems="center"
            color="black">
            </Button>
            <Div bg="gray200" w={1} h={25} ml="sm" />
            </Div>
          }
          keyboardType="email-address"
        />
  
    <Input
          mx="xl"
          mt="md"
          px="md"
          py="sm"
          borderColor="gray200"
          borderWidth={2}
          prefix={
            <Div row alignItems="center">
            <Button
            title="Pw :"
            bg="white"
            alignItems="center"
            color="black">
            </Button>
            <Div bg="gray200" w={1} h={25} ml="sm" />
            </Div>
          }
          keyboardType="email-address"
        />
    <Button
    onPress={onPressLearnMore}
    title="로그인"
    color="#00ff00"
    />
    <Button
    
    title="회원가입"
    color="#01A9DB"
    onPress={() => navigation.navigate('Join')}
    />
    </View>
    
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    felx:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
    backgroundColor: '#ffffff',
  },
});

function onPressLearnMore(){
  alert("환영합니다!");
}