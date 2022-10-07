import React from "react";
import {View,StyleSheet,Text,Dimensions} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

const Header = () =>{
    let [fontsLoaded,error] = useFonts({
        'RaceSport':require('../assets/fonts/RaceSport-BWPLV.ttf')
    });
        if (!fontsLoaded) {
        return <AppLoading/>
    }

    return(
    <View style={styles.Header}>
        <Text style={styles.Headertxt}>LIVE SCORE</Text>
    </View>
    );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    Header: {
        width:deviceWidth,
        height:70,
        justifyContent: 'flex-end',
        alignItems:'center',
        backgroundColor: '#8fbbcc'
    },
    Headertxt:{
        fontSize:30,
        fontWeight:'500',
        fontFamily:'RaceSport'
    }
});

export default Header;
