import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import BottomNavigation from '../../components/BottomNavigation'
import FontAndBackGround from '../../components/FontAndBackGround'

const ThrowCardSee = ({route, navigation }) => {
    return (
        <FontAndBackGround>
            <View style={styles.container}>
                <Image source={route.params.image} style={styles.image} />
            </View>
            <BottomNavigation navigation={navigation} rightArrow='HomeScreen' />
        </FontAndBackGround>
    )
}

export default ThrowCardSee

const styles = StyleSheet.create({
    container: {
        flex: 12,
        padding: 20
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
})
