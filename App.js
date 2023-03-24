import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

//import from local files
import SmokingArea from './smokingarea/SmokingArea'
SmokingArea;

export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <SmokingArea/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:8,
  }
})