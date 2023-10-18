import {NavigationContainer} from  '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/ native-stack';

import CounterScreen from './CounterScreen';
import DisplayCounterScreen from './DisplayCounterScreen';

const Stack = createNativeStackNavigator;

function App(){
return(
    ‹NavigationContainer>  
    ‹Stack.Navigator >
    ‹Stack.Screen name="Home" component={CounterScreen} >
    ‹Stack.Screen name="DisplayScreen" component={DisplayCounterScreen} >
    </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;