import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Card from "../components/Card";


const EsportsScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <FlatList 
                data={esportlist}
                renderItem={({item}) => {
                    return <Card info={item} />;
                }} 
                keyExtractor={(esportli) => esportli.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );  

}

export default EsportsScreen;


const esportlist = [
    {
        id:1,
        title: 'Valorant',
        bgimage:require('../assets/background_red.png'),
        logoimage:require('../assets/valorant.png'),
        site:'https://liquipedia.net/valorant/Main_Page'
    },
    {
        id:2,
        title: 'CSGO',
        bgimage:require('../assets/background_yellow.png'),
        logoimage:require('../assets/csgoo.png'),
        site:'https://liquipedia.net/counterstrike/Main_Page'
    },
    {
        id:3,
        title: 'COD Mobile',
        bgimage:require('../assets/background_black.png'),
        logoimage:require('../assets/codm.png'),
        site:'https://liquipedia.net/callofduty/Main_Page'
    },
    {
        id:4,
        title: 'BGMI',
        bgimage:require('../assets/background_green.png'),
        logoimage:require('../assets/bgmi.png'),
        site:'https://liquipedia.net/pubgmobile/Battlegrounds_Mobile_India'
    },
    
    {
        id:5,
        title: 'FIFA',
        bgimage:require('../assets/background_greenblue.png'),
        logoimage:require('../assets/fifa.png'),
        site:'https://liquipedia.net/fifa/Main_Page'
    },
    
    {
        id:6,
        title: 'Apex',
        bgimage:require('../assets/background_blue.png'),
        logoimage:require('../assets/apex.png'),
        site:'https://liquipedia.net/apexlegends/Main_Page'
    },
    {
        id:7,
        title: 'DOTA 2',
        bgimage:require('../assets/background_red.png'),
        logoimage:require('../assets/dota-2.png'),
        site:'https://liquipedia.net/dota2/Main_Page'
    },
    {
        id:8,
        title: 'LOL',
        bgimage:require('../assets/background_purple.png'),
        logoimage:require('../assets/lol.png'),
        site:'https://liquipedia.net/leagueoflegends/Main_Page'
    },
    {
        id:9,
        title: 'PUBG PC',
        bgimage:require('../assets/background_black.png'),
        logoimage:require('../assets/bgmi.png'),
        site:'https://liquipedia.net/pubg/Main_Page'
    },
    {
        id:10,
        title: 'Overwatch',
        bgimage:require('../assets/background_orange.png'),
        logoimage:require('../assets/overwatch.png'),
        site:'https://liquipedia.net/overwatch/Main_Page'
    },
    {
        id:11,
        title: 'Rainbow Six',
        bgimage:require('../assets/background_darkblue.png'),
        logoimage:require('../assets/rainbow6.png'),
        site:'https://liquipedia.net/rainbowsix/Main_Page'
    },
    {
        id:12,
        title: 'Rocket League',
        bgimage:require('../assets/background_blue.png'),
        logoimage:require('../assets/rocketLeague.png'),
        site:'https://liquipedia.net/rocketleague/Main_Page'
    },
    


];


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fbbcc'
    },
});
