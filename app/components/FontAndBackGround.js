import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from '@use-expo/font';
import { background } from '../resources/assets';

const FontAndBackGround = ({ children }) => {
	const [fontLoaded, fontError] = useFonts({
		Abibas: require('../assets/fonts/Abibas.ttf'),
		Belleza: require('../assets/fonts/Belleza-Regular.ttf'),
	});
	if (!fontLoaded) return null;
	if (fontError) {
		console.error('font error on loading', fontError);
		return null;
	}

	return (
		<ImageBackground style={styles.background} source={background}>
			{children}
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#350000',
	},
});

export default FontAndBackGround;
