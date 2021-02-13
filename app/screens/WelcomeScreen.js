import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { ThrowContext } from '../components/ThrowContextProvider';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { calaveraWhite, playBlack } from '../resources/assets';

import FontAndBackGround from '../components/FontAndBackGround';
import TarotAbsalonSubH from '../components/TarotAbsalonSubH';
import WhiteText from '../components/WhiteText';

import { getTranslationSection } from '../resources/translationHandler';

const WelcomeScreen = ({ navigation }) => {
	const [state, setState] = useContext(ThrowContext);
	const { getItem } = useAsyncStorage('userData');

	const readItemFromStorage = async () => {
		const userDataJSON = await getItem();
		const userData = JSON.parse(userDataJSON);
		setState((state) => ({ ...state, userData }));
	};

	useEffect(() => {
		readItemFromStorage();
	}, []);

	let translation = getTranslationSection('welcomeScreen', true);

	return (
		<FontAndBackGround>
			<View style={styles.container}>
				<WhiteText>
					<Text style={styles.title}>{translation.mazoMaldito}</Text>
				</WhiteText>
				<TarotAbsalonSubH />
				<Image source={calaveraWhite} style={styles.skullImage} />
				<WhiteText>
					<Text style={styles.text}>{translation.malosAugurios}</Text>
				</WhiteText>
				<WhiteText>
					<Text style={styles.dare}>{translation.seAtreve}</Text>
				</WhiteText>
				<TouchableOpacity onPress={() => navigation.navigate('WelcomeLeyendScreen')} style={styles.playButton}>
					<Image source={playBlack} style={styles.playImage} />
				</TouchableOpacity>
			</View>
		</FontAndBackGround>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 40,
		fontFamily: 'Abibas',
	},
	text: {
		fontSize: 18,
		fontFamily: 'Belleza',
	},
	dare: {
		fontSize: 27,
		fontFamily: 'Belleza',
	},
	skullImage: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
	playImage: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	playButton: {
		marginTop: 30,
	},
});

export default WelcomeScreen;
