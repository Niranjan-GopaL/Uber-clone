import { StyleSheet, Text, View, Dimensions, ScrollView, Image, FlatList } from 'react-native';
// import { Image } from 'react-native-elements';  // <------- not this  the img tag we used is from react native 

import { Icon} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';    

// import filterData from '../globals/data'  //<------ know the difference. We are destrcuturing something here
import {filterData} from '../globals/data'

import { colors,parameters } from '../globals/styles'
const SCREEN_WIDTH = Dimensions.get("window").width;

