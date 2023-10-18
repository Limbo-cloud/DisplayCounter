import {useState, useEffect} from 'react'
import {
	View,
	Button,
	Text,
	StyleSheet,
} from 'react-native'

function App(){

  const [count, setCount] = useState(0);
		const [dispText, SetDispText] = useState('');

 

		useEffect(() => {
			SetDispText('Effect - The count is ' + count);
		}, [count]);
    
return(
    <View style={styles.container}>

<View>
    <Text style={styles.textDisp}>
					Counter
</Text>
</View>

<View style={styles.buttons}>
<Button
						title = 'Increment'
						onPress={() => setCount(count + 1)}
					/>
</View>

<View>
<Text style={styles.textDisp}> Count: {count}</Text>
<Text style={styles.textDisp}> {dispText}</Text>
</View>

<Button 
title="View Counter"
onPress={() => {
navigation.navigate('DisplayScreen')
}}/>


    </View>
);
}

const styles = StyleSheet.create({

    container: {
		flex: 1,
		padding: 10,
	},
    buttons: {
		margin: 5,
		padding: 5,
	},
	textDisp: {
		fontSize: 32,
		fontWeight: 'bold',
	},

});

export default CounterScreen;