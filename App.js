import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

export default function App () {
	clicou = () => {
		Alert.alert("Sandro Torres", "Você clicou em Login!")
	}

	return (
		<View style={styles.container}>
			<Image 
				style={styles.logo}
				source={require('./assets/icon.png')}
			/>

			<TextInput 
				style={styles.input}
				placeholder='Digite seu E-mail'
			/>

			<TextInput 
				style={styles.input}
				secureTextEntry={true}
				placeholder='Digite sua senha'
			/>

			<TouchableOpacity 
				style={styles.btnLogin}
				onPress={() => {this.clicou()}}
			>
				<Text style={styles.btnText}>Login</Text>
			</TouchableOpacity>

		</View>
	  )  
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2C3E50',
		alignItems: 'center',
		justifyContent: 'center',
  	},
  	logo: {
		width: 130,
		height: 130,
		marginBottom: 30
	},
	input: {
		marginTop: 10,
		width: '80%',
		height: 45,
		padding: 10,
		borderRadius: 7,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnLogin: {
		backgroundColor: '#0c73b8',
		marginTop: 15,
		width: '80%',
		height: 45,
		borderRadius: 7,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnText: {
		color: '#FFF',
		fontSize: 18,
		fontWeight: 'bold'
	}
	 
});
