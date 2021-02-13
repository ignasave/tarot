import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import { useAsyncStorage } from '@react-native-async-storage/async-storage';

import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';
import { dateExists, get3RandomDates } from '../../resources/dates';
import { ThrowContext } from '../../components/ThrowContextProvider';
import { get3RandomCards } from '../../resources/cards';

const TrowScreen = ({ navigation }) => {
	const [name, setName] = useState('Tu Nombre');
	const [day, setDay] = useState('Dia');
	const [month, setMonth] = useState('Mes');
	const [year, setYear] = useState('Año');
	const [state, setState] = useContext(ThrowContext);
	const { getItem, setItem } = useAsyncStorage('userData');

	const writeItemToStorage = async (userData) => {
		await setItem(JSON.stringify(userData));
		setState((state) => ({ ...state, userData }));
	};

	const setUserData = () => {
		const date = new Date();
		const userData = {
			name,
			birthDay: day,
			birthMonth: month,
			birthYear: year,
			cards: get3RandomCards(),
			cardDates: get3RandomDates(year),
			throwDate: {
				year: date.getFullYear(),
				month: date.getMonth(),
				day: date.getDate(),
			},
		};
		writeItemToStorage(userData);
	};

	const handleDayChange = (text) => {
		text = text.replace(/[^0-9]/g, '');
		if (text.length > 0) {
			let intText = Number(text);
			if (intText < 1) {
				intText = 1;
			} else if (intText > 31) {
				intText = 31;
			}
			let stringText = intText.toString();
			setDay(stringText);
		} else {
			setDay('');
		}
	};

	const handleMonthChange = (text) => {
		text = text.replace(/[^0-9]/g, '');
		if (text.length > 0) {
			let intText = Number(text);
			if (intText < 0) {
				intText = 1;
			} else if (intText > 12) {
				intText = 12;
			}
			let stringText = intText.toString();
			setMonth(stringText);
		} else {
			setMonth('');
		}
	};

	const handleYearChange = (text) => {
		text = text.replace(/[^0-9]/g, '');
		if (text.length > 0) {
			let intText = Number(text);
			if (intText < 0) {
				intText = 0;
			} else if (intText > 3000) {
				intText = 3000;
			}
			let stringText = intText.toString();
			setYear(stringText);
		} else {
			setYear('');
		}
	};

	const handleReset = () => {
		setName('Tu Nombre');
		setDay('Dia');
		setMonth('Mes');
		setYear('Año');
	};

	const handleShuffle = () => {
		if (dateExists(day, month, year)) {
			setUserData();
			navigation.navigate('ThrowShuffle');
		}
	};

	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.titleContainer}>
				<WhiteText>
					<Text style={styles.title}>Tirada de Augurios</Text>
				</WhiteText>
			</View>
			<View style={styles.container}>
				<View>
					<WhiteText>
						<Text style={styles.text}>* Pulse botón "Mezclar".</Text>
					</WhiteText>
				</View>
				<View>
					<WhiteText>
						<Text style={styles.text}>* Aparecerán 3 cartas. Interprete según el orden de aparición:</Text>
					</WhiteText>
				</View>
				<View>
					<WhiteText>
						<Text style={styles.text}>* 1° Carta: cumplimiento en el futuro inmediato (días).</Text>
					</WhiteText>
				</View>
				<View>
					<WhiteText>
						<Text style={styles.text}>* 2° Carta: futuro a mediano plazo (meses).</Text>
					</WhiteText>
				</View>
				<View>
					<WhiteText>
						<Text style={styles.text}>* 3° Carta: futuro lejano (años).</Text>
					</WhiteText>
				</View>
				<View>
					<WhiteText>
						<Text style={styles.text}>* Pulsa el botón "Reiniciar" para una nueva lectura.</Text>
					</WhiteText>
				</View>
				<View style={styles.textInputContainer}>
					<TextInput style={styles.textInput} onChangeText={(text) => setName(text)} value={name} />

					<View style={styles.dateInputContainer}>
						<TextInput style={styles.textInputDate} onChangeText={(text) => handleDayChange(text)} value={day} />
						<TextInput style={styles.textInputDate} onChangeText={(text) => handleMonthChange(text)} value={month} />
						<TextInput style={styles.textInputDate} onChangeText={(text) => handleYearChange(text)} value={year} />
					</View>
				</View>
				<View style={styles.actionContainer}>
					<TouchableOpacity onPress={handleReset} style={styles.actionOptionContainer}>
						<Image source={require('../../assets/reset-white.png')} style={styles.actionImage} />
						<WhiteText>
							<Text style={styles.actionText}>Reiniciar</Text>
						</WhiteText>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleShuffle} style={styles.actionOptionContainer}>
						<Image source={require('../../assets/cards-gold.png')} style={styles.actionImage} />
						<WhiteText>
							<Text style={styles.actionText}>Mezclar</Text>
						</WhiteText>
					</TouchableOpacity>
				</View>
			</View>
			<BottomNavigation />
		</FontAndBackGround>
	);
};

export default TrowScreen;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		justifyContent: 'center',
		paddingHorizontal: 40,
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	title: {
		fontFamily: 'Belleza',
		fontSize: 30,
	},
	text: {
		fontFamily: 'Belleza',
		fontSize: 20,
	},
	textInput: {
		height: 50,
		backgroundColor: '#212121',
		color: 'white',
		padding: 10,
	},
	textInputContainer: {
		marginTop: 20,
	},
	textInputDate: {
		height: 50,
		backgroundColor: '#212121',
		color: 'white',
		padding: 10,
		width: '33%',
	},
	dateInputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingBottom: 50,
	},
	actionContainer: {
		flex: 0.5,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	},
	actionText: {
		fontSize: 20,
	},
	actionImage: {
		width: 50,
		height: 50,
		resizeMode: 'contain',
	},
	actionOptionContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
});
