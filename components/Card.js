import React from 'react';
import {Text,Image,StyleSheet,Dimensions,Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";

import { 
  Anton_400Regular 
} from '@expo-google-fonts/anton';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


const Card = props => {
  let [fontsLoaded,error] = useFonts({Anton_400Regular});
  if (!fontsLoaded) {
    return <AppLoading/>
  }
  const navigation=useNavigation();
  const onPress = () => {
    navigation.navigate("Tournament",{site: props.info.site});
  };
  return (
    <Pressable onPress={onPress} style={styles.card}>
        <Image style={styles.bgimagestyle} source={props.info.bgimage}/>
        <Text style={styles.titletext}>{props.info.title}</Text>
        <Image style={styles.logoimagestyle} source={props.info.logoimage}/>
    </Pressable>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  card: {
    alignItems:'center',
    width: deviceWidth - 20,
    height: 135,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 30,
    margin:10,
  },
  bgimagestyle: {
    width: '100%',  
    height: '100%',
    resizeMode:'stretch'
},
  logoimagestyle: {
    height:78,
    width:100,
    left:100,
    bottom:155
  },
  titletext:{
    fontFamily:'Anton_400Regular',
    fontSize:25,
    bottom:100,
    right:75
  }
});
export default Card;