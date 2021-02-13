import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { playBlack, homeBlack } from '../resources/assets';

const BottomNavigation = ({ navigation, rightArrow }) => {
	return (
		<View style={styles.navigationContainer}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image source={playBlack} style={[styles.image, { transform: [{ rotate: '180deg' }] }]} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
				<Image source={homeBlack} style={styles.image} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate(rightArrow)}>
				<Image source={playBlack} style={styles.image} />
			</TouchableOpacity>
		</View>
	);
};

export default BottomNavigation;

const styles = StyleSheet.create({
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
