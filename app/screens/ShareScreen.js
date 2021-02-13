import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { angelGold } from '../resources/assets';
import BottomNavigation from '../components/BottomNavigation';
import FontAndBackGround from '../components/FontAndBackGround';
import TopBarTitle from '../components/TopBarTitle';
import WhiteText from '../components/WhiteText';

const ShareScreen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<WhiteText>
					<Text style={styles.text}>Gracias por Compartir</Text>
				</WhiteText>
				<Image source={angelGold} style={styles.image} />
			</View>
			<BottomNavigation />
		</FontAndBackGround>
	);
};

export default ShareScreen;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
	},
	text: {
		fontFamily: 'Belleza',
		fontSize: 30,
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
	},
});
