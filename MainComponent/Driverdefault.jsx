import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainHeader } from '../MainFolder/TopDefault';
import { MainIndex } from './MainIndex';

import { View, Text } from 'react-native'
import React from 'react'

export default function Driverdefault() {
  return (
    <SafeAreaProvider>
        <MainHeader title="Tuk-Tuk"/>
        <MainIndex />
    </SafeAreaProvider>
  )
}



