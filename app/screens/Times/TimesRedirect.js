import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { playBlack } from '../../resources/assets';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

const TimesRedirect = ({ navigation, inform, save }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<View style={styles.principalContainer}>
					<WhiteText>
						<Text style={styles.principalText}>No te apresures</Text>
					</WhiteText>
				</View>

				<WhiteText>
					<Text style={styles.text}>
						Primero debes hacer la tirada antes de {inform ? 'ver el informe' : save ? 'guardar' : 'saber los tiempos'}
					</Text>
				</WhiteText>

				<TouchableOpacity onPress={() => navigation.navigate('TrowScreen')} style={styles.playButton}>
					<Image source={playBlack} style={styles.playImage} />
				</TouchableOpacity>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='TrowScreen' leftArrow='HomeScreen' />
		</FontAndBackGround>
	);
};

export default TimesRedirect;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
	},
	text: {
		fontFamily: 'Belleza',
		fontSize: 23,
	},
	principalText: {
		fontFamily: 'Abibas',
		fontSize: 30,
	},
	playImage: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	playButton: {
		marginTop: 50,
	},
	principalContainer: {
		marginBottom: 30,
	},
});
