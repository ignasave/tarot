import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import InstructionsPage from '../../components/InstructionsPage';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

const InstructionsScreen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<InstructionsPage page={1} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>¿Por que malos augurios?</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								Los malos augurios de este Mazo Maldito, no son caprichosos. Se basan en las enseñanzas esotéricas propias
								de la Numerología, la Cábala, la Astrologia, que tomaron forma en las energías propias del Tarot clásico y
								egipcio.
							</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								El Mazo Maldito refleja los aspectos negativos de la realidad, ya que cada elemento de la vida posee dos
								polaridades potenciales: positiva y negativa.
							</Text>
						</WhiteText>
					</View>
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions2Screen' />
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
		marginVertical: 20
	}
});
