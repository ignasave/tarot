import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { angelWhite } from '../../resources/assets';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import InstructionsPage from '../../components/InstructionsPage';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

const Instructions2Screen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<InstructionsPage page={6} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								Acedemia Rein - Tienda Esotérica academiarein.wixsite.com/academiarein Enlace Código QR
							</Text>
						</WhiteText>
					</View>
					<Image source={angelWhite} style={styles.image} />
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>CODIGO DE BENDICION: M7XY6UXOGA</Text>
						</WhiteText>
					</View>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions7Screen' />
		</FontAndBackGround>
	);
};

export default Instructions2Screen;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'Belleza',
		fontSize: 20,
	},
	textContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 20,
	},
	textView: {
		marginVertical: 20,
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
});
