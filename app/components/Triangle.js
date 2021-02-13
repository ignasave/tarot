import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Triangle = () => {
	return <View style={styles.triangle} />;
};

const styles = StyleSheet.create({
	triangle: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 10,
		borderRightWidth: 10,
		borderBottomWidth: 20,
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: 'white',
	},
});

export const GetTriangles = ({ n }) => {
	if (n === 1) {
		return (
			<Text>
				<Triangle />
				{'     '}
			</Text>
		);
	} else if (n === 2) {
		return (
			<Text>
				<Triangle />
				{'     '}
				<Triangle />
				{'     '}
			</Text>
		);
	} else if (n === 3) {
		return (
			<Text>
				<Triangle />
				{'     '}
				<Triangle />
				{'     '}
				<Triangle />
				{'     '}
			</Text>
		);
	}
};

export default Triangle;
