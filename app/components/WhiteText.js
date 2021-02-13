import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WhiteText = ({ children }) => {
	return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
	text: {
		color: 'white',
	},
});

export default WhiteText;
