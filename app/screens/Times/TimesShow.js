import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import FadeInOut from 'react-native-fade-in-out';

import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';

import { ThrowContext } from '../../components/ThrowContextProvider';

const cardBackSource = require('../../assets/card-back.png');
const cardFrontSource = require('../../assets/card-front.jpg');

const TimesShow = () => {
	const cards = new Array(3).fill(1);

	const [state] = useContext(ThrowContext);

	const cardDates = state.userData.cardDates;

	const [visibleDays, setVisibleDays] = useState(false);
	const [visibleMonth, setVisibleMonth] = useState(false);
	const [visibleYear, setVisibleYear] = useState(false);

	const [visibleFrontDays, setVisibleFrontDays] = useState(false);
	const [visibleFrontMonth, setVisibleFrontMonth] = useState(false);
	const [visibleFrontYear, setVisibleFrontYear] = useState(false);

	const [counter, setCounter] = useState(0);

	const handleCardPress = () => {
		switch (counter) {
			case 0:
				setVisibleDays(true);
				break;
			case 1:
				setVisibleMonth(true);
				break;
			case 2:
				setVisibleYear(true);
				break;
		}

		if (counter < 2) {
			setCounter(counter + 1);
		}
	};

	const revealCardDay = () => setVisibleFrontDays(true);
	const revealCardMonth = () => setVisibleFrontMonth(true);
	const revealCardYear = () => setVisibleFrontYear(true);

	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<View style={styles.topCardsContainer}>
					<View style={styles.topCard}>
						<WhiteText>
							<Text style={styles.cardText}>Dias</Text>
						</WhiteText>
						<FadeInOut visible={!visibleDays}>
							<View style={visibleDays ? styles.displayNone : styles.cardView} />
						</FadeInOut>
						<FadeInOut visible={visibleDays && !visibleFrontDays}>
							<TouchableOpacity onPress={revealCardDay}>
								<Image
									source={cardBackSource}
									style={visibleDays && !visibleFrontDays ? styles.cardImage : styles.displayNone}
								/>
							</TouchableOpacity>
						</FadeInOut>
						<FadeInOut visible={visibleFrontDays}>
							<ImageBackground source={cardFrontSource} style={visibleFrontDays ? styles.cardImage : styles.displayNone}>
								<View style={styles.viewCardDates}>
									<WhiteText>
										<Text style={styles.styleCardDates}>{cardDates.days}</Text>
									</WhiteText>
								</View>
							</ImageBackground>
						</FadeInOut>
					</View>
					<View style={styles.topCard}>
						<WhiteText>
							<Text style={styles.cardText}>Meses</Text>
						</WhiteText>
						<FadeInOut visible={!visibleMonth}>
							<View style={visibleMonth ? styles.displayNone : styles.cardView} />
						</FadeInOut>
						<FadeInOut visible={visibleMonth && !visibleFrontMonth}>
							<TouchableOpacity onPress={revealCardMonth}>
								<Image
									source={cardBackSource}
									style={visibleMonth && !visibleFrontMonth ? styles.cardImage : styles.displayNone}
								/>
							</TouchableOpacity>
						</FadeInOut>
						<FadeInOut visible={visibleFrontMonth}>
							<ImageBackground source={cardFrontSource} style={visibleFrontMonth ? styles.cardImage : styles.displayNone}>
								<View style={styles.viewCardDates}>
									<WhiteText>
										<Text style={styles.styleCardDates}>{cardDates.months}</Text>
									</WhiteText>
								</View>
							</ImageBackground>
						</FadeInOut>
					</View>
					<View style={styles.topCard}>
						<WhiteText>
							<Text style={styles.cardText}>Años</Text>
						</WhiteText>
						<FadeInOut visible={!visibleYear}>
							<View style={visibleYear ? styles.displayNone : styles.cardView} />
						</FadeInOut>
						<FadeInOut visible={visibleYear && !visibleFrontYear}>
							<TouchableOpacity onPress={revealCardYear}>
								<Image
									source={cardBackSource}
									style={visibleYear && !visibleFrontYear ? styles.cardImage : styles.displayNone}
								/>
							</TouchableOpacity>
						</FadeInOut>
						<FadeInOut visible={visibleFrontYear}>
							<ImageBackground source={cardFrontSource} style={visibleFrontYear ? styles.cardImage : styles.displayNone}>
								<View style={styles.viewCardDates}>
									<WhiteText>
										<Text style={styles.styleCardDates}>{cardDates.years}</Text>
									</WhiteText>
								</View>
							</ImageBackground>
						</FadeInOut>
					</View>
				</View>
				<View style={{ flex: 1 }}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} removeClippedSubviews={true}>
						{cards.map((card, i) => (
							<TouchableOpacity key={i} onPress={() => handleCardPress()}>
								<Image style={styles.card} source={cardBackSource} />
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>
			</View>
			<BottomNavigation />
		</FontAndBackGround>
	);
};

export default TimesShow;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		justifyContent: 'center',
		alignItems: 'center',
	},
	topCardsContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	viewCardDates: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	styleCardDates: { fontSize: 45, fontFamily: 'Abibas' },
	displayNone: { display: 'none' },
	cardImage: { height: 140, width: 80, borderRadius: 10, margin: 0, padding: 0, resizeMode: 'cover' },
	topCard: { marginHorizontal: 10, alignItems: 'center' },
	cardView: { height: 140, width: 80, borderColor: 'white', borderWidth: 1, borderStyle: 'solid', borderRadius: 10, marginTop: 5 },
	cardText: { fontFamily: 'Belleza', fontSize: 25 },
	card: { marginHorizontal: 5, height: 140, width: 80, borderRadius: 10 },
});
