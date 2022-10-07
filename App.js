import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/Header';
import RootNavigator from './components/RootNavigator';


export default function App() {
  return (   
    <NavigationContainer>
        <StatusBar barStyle = "auto" hidden={false} backgroundColor='#8fbbcc' />
        <Header/>
        <RootNavigator/>
    </NavigationContainer>        
  );
}

