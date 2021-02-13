import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import FontAndBackGround from '../../components/FontAndBackGround';
import TopBarTitle from '../../components/TopBarTitle';
import WhiteText from '../../components/WhiteText';
import { GetTriangles } from '../../components/Triangle';
import { ThrowContext } from '../../components/ThrowContextProvider';
import TimesRedirect from '../Times/TimesRedirect';

const Inform = ({ navigation }) => {
	const [{ userData }] = useContext(ThrowContext);

	if (!userData) {
		return <TimesRedirect inform={true} />;
	}

	return (
		<FontAndBackGround>
			<TopBarTitle />
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<WhiteText>
						<Text style={styles.title}>Informe</Text>
					</WhiteText>
				</View>
				<View style={styles.informContainer}>
					<View>
						<WhiteText>
							<Text style={styles.consultantData}>Consultante: {userData.name}</Text>
						</WhiteText>
						<WhiteText>
							<Text style={styles.consultantData}>
								Nacimiento: {userData.birthYear}/{userData.birthMonth}/{userData.birthDay}
							</Text>
						</WhiteText>
						<WhiteText>
							<Text style={styles.consultantData}>
								Fecha de lectura: {userData.throwDate.year}/{userData.throwDate.month}/{userData.throwDate.day}
							</Text>
						</WhiteText>
					</View>
					<View style={styles.cardsInformContainer}>
						<View>
							<WhiteText>
								<Text style={styles.consultantData}>Cartas: </Text>
							</WhiteText>
						</View>
						<View style={styles.cardSeparation}>
							<WhiteText>
								<Text style={styles.consultantData}>
									<View style={{ marginRight: 10, paddingRight: 10 }}>
										<WhiteText>
											<Text style={styles.consultantData}>1°.</Text>
										</WhiteText>
									</View>
									<GetTriangles n={userData.cards[0].type} />
									Num.{userData.cards[0].id}.*{userData.cards[0].title}* {userData.cards[0].leyend} Nombre:
									{userData.cards[0].name}. "{userData.cards[0].subtitle}" Tiempo: {userData.cardDates.days} días
								</Text>
							</WhiteText>
						</View>
						<View style={styles.cardSeparation}>
							<WhiteText>
								<Text style={styles.consultantData}>
									<View style={{ marginRight: 10, paddingRight: 10 }}>
										<WhiteText>
											<Text style={styles.consultantData}>2°.</Text>
										</WhiteText>
									</View>
									<GetTriangles n={userData.cards[1].type} />
									Num.{userData.cards[1].id}.*{userData.cards[1].title}* {userData.cards[1].leyend} Nombre:
									{userData.cards[1].name}. "{userData.cards[1].subtitle}" Tiempo: {userData.cardDates.months} meses
								</Text>
							</WhiteText>
						</View>
						<View style={styles.cardSeparation}>
							<WhiteText>
								<Text style={styles.consultantData}>
									<View style={{ marginRight: 10, paddingRight: 10 }}>
										<WhiteText>
											<Text style={styles.consultantData}>3°.</Text>
										</WhiteText>
									</View>
									<GetTriangles n={userData.cards[2].type} />
									Num.{userData.cards[2].id}.*{userData.cards[2].title}* {userData.cards[2].leyend} Nombre:
									{userData.cards[2].name}. "{userData.cards[2].subtitle}" Tiempo: {userData.cardDates.years} años
								</Text>
							</WhiteText>
						</View>
					</View>
				</View>
			</View>
			<BottomNavigation />
		</FontAndBackGround>
	);
};

export default Inform;

const styles = StyleSheet.create({
	container: {
		flex: 11,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
	},
	title: {
		fontFamily: 'Abibas',
		fontSize: 30,
	},
	informContainer: {
		flex: 1,
	},
	consultantData: {
		fontFamily: 'Belleza',
		fontSize: 15,
	},
	titleContainer: {
		marginVertical: 30,
	},
	cardsInformContainer: {
		flex: 1,
		marginTop: 20,
	},
	cardSeparation: {
		marginVertical: 10,
	},
});
