import React from "react";
import {View,Text,StyleSheet,StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4da0b0","#d39d38"]
    },
    Thunderstorm:{
        iconName: "weather-lightning",
        gradient:["#01dbb8","#057dd7"]
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient:["#89F7FE","#66A6FF"]
    },
    Rain:{
        iconName: "weather-rainy",
        gradient:["#00c6fb","#005bea"]
    },
    Snow:{
        iconName: "weather-snowy",
        gradient:["#7de2fc","#B9B6E5"]
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient:["#89f7fe","#66A6FF"]
    },
    Clear:{
        iconName: "weather-sunny",
        gradient:["#1c92d2","#f2fcfe"],
        Title:"Clear",
        SubTitle:"go get some fresh air outside!"
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient:["#D7D2CC","#304325"]
    },

};


export default function Weather({temp, condition}){
    return (

        <LinearGradient
         colors={weatherOptions[condition].gradient}
         style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={90} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.Title}>{weatherOptions[condition].Title}</Text>
                <Text style={styles.SubTitle}>{weatherOptions[condition].SubTitle}</Text>
            </View>
         </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp:{
        fontSize: 30,
        color: "white"
    },
    halfContainer:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    Title:{
        fontSize: 45,
        color:"white",
        fontWeight:"300",
        marginBottom: 10
    },
    SubTitle:{
        fontWeight:"600",
        color:"white",
        fontSize: 22,
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems: "flex-start"
    }

});
