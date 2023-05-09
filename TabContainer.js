import React from 'react'
import {View,Text,StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import S06F from './smokingarea/S06F';
import S05F from './smokingarea/S05F';

const S05Floor="S05";
const S06Floor="S06";

const Tab=createBottomTabNavigator();

export default function TabContainer(){
    return (
        <Tab.Navigator>
            <Tab.Screen name={S05Floor} component={S05F} options={{headerShown:false}}/>
            <Tab.Screen name={S06Floor} component={S06F} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

const styles=StyleSheet.create({

})