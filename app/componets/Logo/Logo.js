import React from 'react';
import {View, Image, Text} from 'react-native'
import styles from './styles'

const Logo =() =>(
    <View style = {styles.container}>
        <Image style ={styles.containerImage}  source = {require('./images/background.png')} />
            <Image source = {require('./images/logo.png')}/>
        <Text>Currency Converter</Text>
    </View>
)

export default Logo;