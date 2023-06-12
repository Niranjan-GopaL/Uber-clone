import { StyleSheet, Text, View, Dimensions } from "react-native";
// import React from 'react'

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: 30,
        paddingTop: parameters.statusBarHeight,
    },

    header: {
        backgroundColor: colors.blue,
        height: parameters.headerHeight,
        alignItems: "flex-start",
    },

    image1: {
        height: 100,
        width: 100,
    },

    image2: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },

    home: {
        backgroundColor: colors.blue,
        paddingLeft: 20,
    },

    text1: {
        color: colors.white,
        fontSize: 21,
        paddingBottom: 20,
        paddingTop: 20,
    },

    text2: {
        color: colors.white,
        fontSize: 16,
    },

    view1: {
        flexDirection: "row",
        flex: 1,
        paddingTop: 30,
    },

    button1: {
        height: 40,
        width: 150,
        backgroundColor: colors.black,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },

    button1Text: {
        color: colors.white,
        fontSize: 17,
        marginTop: -2,
    },

    card: {
        alignItems: "center",
        margin: SCREEN_WIDTH / 22,
    },

    view2: { marginBottom: 5, borderRadius: 15, backgroundColor: colors.grey6 },

    title: {
        color: colors.black,
        fontSize: 16,
    },



});
