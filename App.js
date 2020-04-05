import React from 'react';
import {Alert} from 'react-native';
import Loading from "./loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "048bbae6a579143ea37c9ce156f3feae";

export default class extends React.Component {
    state = {
        isLoading: true
    };
    getWeather = async (latitude,longitude) => {
        const {
            data: {
                main: {temp},
                weather
            }
        } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
        this.setState({isLoading:false, condition:weather[0].main, temp});

    }
    getLocation = async () => {
        try{
            await Location.requestPermissionsAsync();
            const {coords: {latitude, longitude}} =  await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);

        }catch(error){
            Alert.alert("Can't find you.","So sad");
        }
        const location =  await Location.getCurrentPositionAsync();
        console.log(location);
    }
    componentDidMount(){
        this.getLocation();
    }


    render(){
        const { isLoading, temp, condition} = this.state;
        return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
    }
}
