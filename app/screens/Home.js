import React from 'react'
import { View, StatusBar } from 'react-native'

import {Container} from '../componets/container';
import {Logo} from '../componets/Logo'

export default () => (
    <Container>
        <StatusBar 
            translucent = {false} barStyle = "light-content"
        />
        <Logo />
        <View />
    </Container>
)