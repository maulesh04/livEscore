import {createNativeStackNavigator} from "@react-navigation/native-stack";
import EsportsScreen from '../screens/EsportsScreen';
import Tournament from "../screens/Tournament";

const Stack=createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Esport" 
            component={EsportsScreen}
            options={{ headerShown:false}}/>
            <Stack.Screen name="Tournament" 
            component={Tournament}
            options={{ headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;