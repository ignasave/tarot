import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { calaveraWhite } from '../resources/assets';
import WhiteText from './WhiteText';
import TarotAbsalonSubH from '../components/TarotAbsalonSubH';

const TopBarTitle = ({ rigthImage = null }) => {
	return (
		<View style={styles.title}>
			<View>
				<Image source={calaveraWhite} style={styles.image} />
			</View>
			<View style={styles.titleMessage}>
				<WhiteText>
					<Text style={styles.cursed}>Mazo Maldito</Text>
				</WhiteText>
				<TarotAbsalonSubH />
			</View>
			<View>{rigthImage ? <Image source={rigthImage} style={styles.rigthImage} /> : <View style={styles.emptyBox} />}</View>
		</View>
	);
};

export default TopBarTitle;

const styles = StyleSheet.create({
	image: {
		width: 75,
		height: 75,
		resizeMode: 'contain',
	},
	rigthImage: {
		marginLeft: 15,
		width: 60,
		height: 60,
		resizeMode: 'contain',
	},
	title: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop: 30,
		marginHorizontal: 30,
		borderBottomColor: 'white',
		borderBottomWidth: 1,
	},
	titleMessage: {
		marginHorizontal: 10,
		alignItems: 'center',
	},
	cursed: {
		fontFamily: 'Abibas',
		fontSize: 30,
	},
	emptyBox: {
		width: 75,
		height: 75,
	},
});
