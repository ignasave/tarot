import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import InstructionsPage from '../../components/InstructionsPage';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

const Instructions4Screen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<InstructionsPage page={4} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Ayuda Espiritual Exclusiva</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								Esperamos que Usted pueda resolver o minimizar estos augurios.
								 Con éste Mazo Maldito Absalón obtiene 1 Código de Bendición
								, para dirigirse a nuestra Tienda Esotérica web, y acceder a importante información
								sobre diversas fórmulas mágicas y espirituales para anular o prevenir cada tipo de Mal Augurio.
							</Text>
						</WhiteText>
					</View>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions5Screen' />
		</FontAndBackGround>
	);
};

export default Instructions4Screen;

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
		marginVertical: 20
	}
});
