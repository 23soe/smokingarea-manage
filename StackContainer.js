import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import TabMenu from './TabContainer';

const tabMenu="흡연구역";

const Stack=createStackNavigator();

export default function StackContainer(){
    return (
        <Stack.Navigator>
            <Stack.Screen name={tabMenu} component={TabMenu} options={{}}/>
            
        </Stack.Navigator>
    );
}

const styles=StyleSheet.create({

})