import React, { useState } from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import Ads from './Ads';
import Chats from './Chats';
import Bookmarks from './Bookmarks';
 const Drawer = createDrawerNavigator();
const HomeScreen = ({}) => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
        // <NavigationContainer>
        //     <Drawer.Navigator initialRouteName='HomeScreen'>
        //     <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        //     <Drawer.Screen name="Ads" component={Ads} />
        //     <Drawer.Screen name="Chats" component={Chats} />
        //     <Drawer.Screen name="Bookmarks" component={Bookmarks} />
        //     </Drawer.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
