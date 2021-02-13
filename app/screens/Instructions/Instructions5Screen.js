import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { instruccionesYellow } from '../../resources/assets';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import InstructionsPage from '../../components/InstructionsPage';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';
import Triangle from '../../components/Triangle';

const InstructionsScreen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle rigthImage={instruccionesYellow} />
			<View style={styles.container}>
				<InstructionsPage page={5} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Ayuda Espiritual Exclusiva</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
							<Triangle/>   Las debilidades leves o las voluntades de otros hombres
								puedes ser anuladas o revertidas con rituales de "Rescate Mágico".
							</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
							<Triangle/>     <Triangle/>    Cuando intervienen corrupciones fuertes,
								almas malignas o calamidades, se
								requiere una intervención mas poderosa,
								como la del "Arkángel de Liberación".
							</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
							<Triangle/>     <Triangle/>     <Triangle/>    Frente a la magia negra, demonios y
								egregores, necesitamos luchar contra ellos 
								día y noche hasta vencerlos. Por ello se 
								recurre a rituales de invocación, como el
								"Ritual Cráneo Negro".
							</Text>
						</WhiteText>
					</View>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions6Screen' />
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
