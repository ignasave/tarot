import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Share } from 'react-native';

import { eyeWhite, documentWhite, shareWhite, clockWhite, instruccionesWhite, writeWhite } from '../resources/assets';

import BottomNavigation from '../components/BottomNavigation';
import FontAndBackGround from '../components/FontAndBackGround';
import TopBarTitle from '../components/TopBarTitle';
import WhiteText from '../components/WhiteText';

const HomeScreen = ({ navigation }) => {
	const onShare = async () => {
		try {
			const result = await Share.share({
				message:
					'Mazo Maldito | "Malos augurios acechan el futuro de todos y cada uno" ¿Se atreve a desafiarlo? https://github.com/ignasave',
				title: 'Mazo Malito',
			});
			if (result.action === Share.sharedAction) {
				navigation.navigate('ShareScreen');
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<View style={styles.columns}>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('TrowScreen')}>
							<Image source={eyeWhite} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Tirada</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('Inform')}>
							<Image source={documentWhite} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Informe</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity onPress={onShare}>
							<Image source={shareWhite} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Compartir</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.columns}>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('TimesShuffle')}>
							<Image source={clockWhite} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Tiempos</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('InstructionsScreen')}>
							<Image source={instruccionesWhite} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Instrucciones</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('SaveScreen')}>
							<Image source={writeWhite} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Guardar</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<BottomNavigation />
		</FontAndBackGround>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		flexDirection: 'row',
	},
	columns: {
		flex: 1,
	},
	row: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	images: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
	},
	textMargin: {
		marginTop: 10,
		alignItems: 'center',
	},
});
