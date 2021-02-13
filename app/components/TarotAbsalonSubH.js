import React from 'react'
import { Text, StyleSheet } from 'react-native'

import WhiteText from './WhiteText'

const TarotAbsalonSubH = () => {
    return (
        <WhiteText><Text style={styles.subHeader}>Tarot Absalón</Text></WhiteText>
    )
}

const styles = StyleSheet.create({
    subHeader: {
        fontSize: 25,
        fontFamily: 'Abibas',
    }
});

export default TarotAbsalonSubH
