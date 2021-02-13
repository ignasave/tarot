import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import { checkGold } from '../resources/assets';

import BottomNavigation from '../components/BottomNavigation';
import FontAndBackGround from '../components/FontAndBackGround';
import { ThrowContext } from '../components/ThrowContextProvider';
import TopBarTitle from '../components/TopBarTitle';
import WhiteText from '../components/WhiteText';
import TimesRedirect from './Times/TimesRedirect';

const SaveScreen = ({ navigation }) => {
	const [state, setState] = useContext(ThrowContext);
	const { setItem } = useAsyncStorage('userData');

	const writeItemToStorage = async (userData) => {
		await setItem(JSON.stringify(userData));
		setState((state) => ({ ...state, userData }));
	};

	useEffect(() => {
		writeItemToStorage(state.userData);
	}, []);

	if (!state.userData) {
		return <TimesRedirect save={true} />;
	}

	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<WhiteText>
					<Text style={styles.text}>Informe Guardado</Text>
				</WhiteText>
				<Image source={checkGold} style={styles.image} />
			</View>
			<BottomNavigation navigation={navigation} rightArrow='HomeScreen' />
		</FontAndBackGround>
	);
};

export default SaveScreen;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
	},
	text: {
		fontFamily: 'Belleza',
		fontSize: 28,
	},
	image: {
		marginTop: 40,
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
});
