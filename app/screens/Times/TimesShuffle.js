import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import { roundSkullWhite } from '../../resources/assets';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import TopBarTitle from '../../components/TopBarTitle';

import { ThrowContext } from '../../components/ThrowContextProvider';

const TimesSuffle = ({ navigation }) => {
	const [state] = useContext(ThrowContext);

	let spinValue = new Animated.Value(0);

	useEffect(() => {
		Animated.loop(
			Animated.timing(spinValue, {
				toValue: 1,
				duration: 3000,
				easing: Easing.linear,
				useNativeDriver: true,
			}),
		).start();
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => redirect(), 3000);
		return () => clearTimeout(timer);
	}, []);

	const redirect = () => {
		if (state.userData) {
			navigation.navigate('TimesShow');
		} else {
			navigation.navigate('TimesRedirect');
		}
	};

	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<View
					style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}
				>
					<Animated.Image style={[styles.skullImage, { transform: [{ rotate: spin }] }]} source={roundSkullWhite} />
				</View>
			</View>
			<BottomNavigation />
		</FontAndBackGround>
	);
};

export default TimesSuffle;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		justifyContent: 'center',
		alignItems: 'center',
	},
	skullImage: {
		width: 400,
		height: 400,
		resizeMode: 'contain',
	},
});
