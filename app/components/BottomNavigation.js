import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { playBlack, homeBlack } from '../resources/assets';

const BottomNavigation = ({ navigation, rightArrow = null, leftArrow = null }) => {
	return (
		<View style={styles.navigationContainer}>
			<TouchableOpacity onPress={() => (leftArrow ? navigation.navigate(leftArrow) : navigation.goBack())}>
				<Image source={playBlack} style={[styles.image, styles.transform]} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
				<Image source={homeBlack} style={styles.image} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => (rightArrow ? navigation.navigate(rightArrow) : null)}>
				<Image source={playBlack} style={styles.image} />
			</TouchableOpacity>
		</View>
	);
};

export default BottomNavigation;

const styles = StyleSheet.create({
	transform: {
		transform: [{ rotate: '180deg' }],
	},
	image: {
		width: 50,
		height: 50,
	},
	navigationContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginBottom: 30,
	},
});
