import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WhiteText from '../components/WhiteText';
import FontAndBackGround from '../components/FontAndBackGround';
import TopBarTitle from '../components/TopBarTitle';
import BottomNavigation from '../components/BottomNavigation';

const WelcomeLeyendScreen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<WhiteText>
						<Text style={styles.text}>Este tarot no maldice</Text>
					</WhiteText>
				</View>
				<View style={styles.textContainer}>
					<WhiteText>
						<Text style={styles.text}>Sencillamente anticipa posibles infortunios.</Text>
					</WhiteText>
				</View>
				<View style={styles.textContainer}>
					<WhiteText>
						<Text style={styles.text}>El sabio comprende esto y actúa para anular o evitarlos</Text>
					</WhiteText>
				</View>
				<View style={styles.textContainer}>
					<WhiteText>
						<Text style={styles.text}>
							El necio o miedoso, posiblemente continúe el camino hacia su destino, del que tal vez sea víctima
						</Text>
					</WhiteText>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='HomeScreen' />
		</FontAndBackGround>
	);
};

export default WelcomeLeyendScreen;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
	},
	text: {
		fontFamily: 'Belleza',
		fontSize: 20,
	},
	textContainer: {
		marginVertical: 20,
		textAlign: 'justify',
	},
});
