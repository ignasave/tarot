import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InstructionsPage = ({ page }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>INSTRUCCIONES {page}/10</Text>
		</View>
	);
};

export default InstructionsPage;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	text: {
		color: 'gold',
		fontFamily: 'Belleza',
		fontSize: 25,
	},
});
