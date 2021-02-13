import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { documentWhite } from '../../resources/assets';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import InstructionsPage from '../../components/InstructionsPage';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

const Instructions9Screen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<InstructionsPage page={9} />
				<View style={styles.textContainer}>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Sobre otras personas</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								La lectura siempre habla del Consultante y fuerzas que actúan sobre sus infortunios. ¿Puede consultarse en
								nombrte de otras personas? Si.
							</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>Informe completo</Text>
						</WhiteText>
					</View>
					<View style={styles.textView}>
						<WhiteText>
							<Text style={styles.text}>
								Puedes tener un informe completo de tu lectura para imprimir o compartir, haciendo click en un boton como el
								siguiente
							</Text>
						</WhiteText>
					</View>
					<Image source={documentWhite} style={styles.image} />
				</View>
			</View>
			<BottomNavigation navigation={navigation} rightArrow='Instructions10Screen' />
		</FontAndBackGround>
	);
};

export default Instructions9Screen;

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
