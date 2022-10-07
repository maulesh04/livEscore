import React , {useState} from 'react';
import { WebView } from "react-native-webview";
import {StyleSheet,ActivityIndicator, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Tournament = ({navigation}) => {
    const route=useRoute();
    const site = route.params?.site;
    const [visible, setVisible] = useState(false);
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
        return(
            <>
            <WebView
                source={{uri:site}}
                onLoadStart={() => setVisible(true)}
                onLoadEnd={() => setVisible(false)}
            />
            
            
            {visible && (
                <ActivityIndicator
                color='red'
                size='large'
                style={{
                position: 'absolute',
                top: height / 2,
                left: width / 2.1,
                }}
                />
                )}
                </>

        );
    
}
export default Tournament;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5'
    },
});
