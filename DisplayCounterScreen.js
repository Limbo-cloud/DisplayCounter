import {useState, useEffect} from 'react';
import {
View, 
Text, 
Button,
StyleSheet
} from react-native ;

const DisplayCounterScreen = ({navigation, route}) => {
    const count = route.params.count;

    return(
        <View style={styles.container}>
        <View>
        <Text style={styles.textDisp}>
        Count : {count}
        </Text>
        </View>
        
        </View>
    );
}
 
const styles = StyleSheet.create({

    container: {
		flex: 1,
		padding: 10,
	},
    
	textDisp: {
		fontSize: 32,
		fontWeight: 'bold',
	},

});


export default DisplayCounterScreen;