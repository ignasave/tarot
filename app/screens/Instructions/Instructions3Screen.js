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
				<InstructionsPage page={3} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Clases de malos augurios</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								<Triangle/>   Leves: problemas propios de la vida.
								Daños temporales
							</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
							<Triangle/>     <Triangle/>    Medios: desgracias y daños graves,
								que dejan secuelas.
							</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
							<Triangle/>     <Triangle/>     <Triangle/>    Fuertes: daños, catástrofes que 
								arruinan a sus víctimas. Daños 
								permanentes. Generalmente intervienen 
								Entidades malignas.
							</Text>
						</WhiteText>
					</View>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions4Screen' />
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
