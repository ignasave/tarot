import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import WelcomeLeyendScreen from '../screens/WelcomeLeyendScreen';
import HomeScreen from '../screens/HomeScreen';
import Inform from '../screens/Inform/Inform';
import InstructionsScreen from '../screens/Instructions/InstructionsScreen';
import Instructions2Screen from '../screens/Instructions/Instructions2Screen';
import Instructions3Screen from '../screens/Instructions/Instructions3Screen';
import Instructions4Screen from '../screens/Instructions/Instructions4Screen';
import Instructions5Screen from '../screens/Instructions/Instructions5Screen';
import Instructions6Screen from '../screens/Instructions/Instructions6Screen';
import Instructions7Screen from '../screens/Instructions/Instructions7Screen';
import Instructions8Screen from '../screens/Instructions/Instructions8Screen';
import Instructions9Screen from '../screens/Instructions/Instructions9Screen';
import Instructions10Screen from '../screens/Instructions/Instructions10Screen';
import TrowScreen from '../screens/Trow/TrowScreen';
import ThrowShuffle from '../screens/Trow/ThrowShuffle';
import ThrowCardsShow from '../screens/Trow/ThrowCardsShow';
import TimesShuffle from '../screens/Times/TimesShuffle';
import TimesShow from '../screens/Times/TimesShow';
import TimesRedirect from '../screens/Times/TimesRedirect';
import ShareScreen from '../screens/ShareScreen';
import SaveScreen from '../screens/SaveScreen';
import ThrowCardSee from '../screens/Trow/ThrowCardSee';

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='WelcomeScreen'
				screenOptions={{ headerShown: false, gestureDirection: 'horizontal', ...TransitionPresets.FadeFromBottomAndroid }}
			>
				<Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
				<Stack.Screen name='WelcomeLeyendScreen' component={WelcomeLeyendScreen} />
				<Stack.Screen name='HomeScreen' component={HomeScreen} />
				<Stack.Screen name='Inform' component={Inform} />
				<Stack.Screen name='InstructionsScreen' component={InstructionsScreen} />
				<Stack.Screen name='Instructions2Screen' component={Instructions2Screen} />
				<Stack.Screen name='Instructions3Screen' component={Instructions3Screen} />
				<Stack.Screen name='Instructions4Screen' component={Instructions4Screen} />
				<Stack.Screen name='Instructions5Screen' component={Instructions5Screen} />
				<Stack.Screen name='Instructions6Screen' component={Instructions6Screen} />
				<Stack.Screen name='Instructions7Screen' component={Instructions7Screen} />
				<Stack.Screen name='Instructions8Screen' component={Instructions8Screen} />
				<Stack.Screen name='Instructions9Screen' component={Instructions9Screen} />
				<Stack.Screen name='Instructions10Screen' component={Instructions10Screen} />
				<Stack.Screen name='TrowScreen' component={TrowScreen} />
				<Stack.Screen name='ThrowShuffle' component={ThrowShuffle} />
				<Stack.Screen name='ThrowCardsShow' component={ThrowCardsShow} />
				<Stack.Screen name='TimesShuffle' component={TimesShuffle} />
				<Stack.Screen name='TimesShow' component={TimesShow} />
				<Stack.Screen name='TimesRedirect' component={TimesRedirect} />
				<Stack.Screen name='ShareScreen' component={ShareScreen} />
				<Stack.Screen name='SaveScreen' component={SaveScreen} />
				<Stack.Screen name='ThrowCardSee' component={ThrowCardSee} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
