import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { shareWhite } from '../../resources/assets';
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
				<InstructionsPage page={10} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Sorprende a tus amigos</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								Si esta aplicación te gusto, comparte esta APP con tus amigos y en redes sociales, para que ellos tambien
								puedan prepararse para lo que vendrá.
							</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Puedes hacerlo haciendo clic en una imagen como la siguiente:</Text>
						</WhiteText>
					</View>
					<Image source={shareWhite} style={styles.image} />
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='InstructionsScreen' />
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
