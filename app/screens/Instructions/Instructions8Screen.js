import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { instruccionesYellow } from '../../resources/assets';
import { clockWhite } from '../../resources/assets';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import InstructionsPage from '../../components/InstructionsPage';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

const Instructions2Screen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle rigthImage={instruccionesYellow} />
			<View style={styles.container}>
				<InstructionsPage page={8} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Cálculo de Tiempo</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								Para conocer los "Timepos de Cumplimiento" de cada mal augurio, haga click en una imagen como la siguiente:
							</Text>
						</WhiteText>
					</View>
					<Image source={clockWhite} style={styles.image} />
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								Sistema le llevará a realizar una segunda mezcla para que usted seleccione una carta. El numero de esa carta
								equivale a la cantidad de dias, meses o años que faltan transcurrir hasta la llegada del infortunio
								consultado.
							</Text>
						</WhiteText>
					</View>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions9Screen' />
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
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
});
