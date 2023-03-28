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

function Join() {
  return(
    <View>
    <Text >
       회원가입 페이지입니다.

      </Text>
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
      title="가입하기"
      color="#01A9DB"
      onPress={onPressLearnMore}
    />
    </View>
  );
}


export default Join;

function onPressLearnMore(){
  alert("환영합니다!");
}