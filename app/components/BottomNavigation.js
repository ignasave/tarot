import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

const BottomNavigation = ({ navigation, rightArrow }) => {
	return (
		<View style={styles.navigationContainer}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image source={require('../assets/play-black.png')} style={[styles.image, { transform: [{ rotate: '180deg' }] }]} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
				<Image source={require('../assets/home-black.png')} style={styles.image} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate(rightArrow)}>
				<Image source={require('../assets/play-black.png')} style={styles.image} />
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
