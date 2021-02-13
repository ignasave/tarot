import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { instruccionesYellow } from '../../resources/assets';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import InstructionsPage from '../../components/InstructionsPage';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

const InstructionsScreen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle rigthImage={instruccionesYellow} />
			<View style={styles.container}>
				<InstructionsPage page={7} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Mazo Maldito - Tarot Absalón. Todos los derechos reservados. 2021. México</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Contacto: Academia Rein Tienda Esotérica Absalón</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>academiarein.wixsite.com/academiarein</Text>
						</WhiteText>
					</View>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions8Screen' />
		</FontAndBackGround>
	);
};

export default InstructionsScreen;

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
});
