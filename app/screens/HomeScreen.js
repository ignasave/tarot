import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import BottomNavigation from '../components/BottomNavigation';
import FontAndBackGround from '../components/FontAndBackGround';
import TopBarTitle from '../components/TopBarTitle';
import WhiteText from '../components/WhiteText';

const HomeScreen = ({ navigation }) => {
	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<View style={styles.columns}>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('TrowScreen')}>
							<Image source={require('../assets/eye-white.png')} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Tirada</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('Inform')}>
							<Image source={require('../assets/document-white.png')} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Informe</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<Image source={require('../assets/share-white.png')} style={styles.images} />
						<View style={styles.textMargin}>
							<WhiteText>Compartir</WhiteText>
						</View>
					</View>
				</View>
				<View style={styles.columns}>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('TimesShuffle')}>
							<Image source={require('../assets/clock-white.png')} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Tiempos</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity onPress={() => navigation.navigate('InstructionsScreen')}>
							<Image source={require('../assets/instrucciones-white.png')} style={styles.images} />
							<View style={styles.textMargin}>
								<WhiteText>Instrucciones</WhiteText>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<Image source={require('../assets/write-white.png')} style={styles.images} />
						<View style={styles.textMargin}>
							<WhiteText>Guardar</WhiteText>
						</View>
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
