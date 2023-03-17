import React from 'react'
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import StackView from "../components/Stack"
import Search from '../components/Search'


const StackScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Search />
        <StackView navigation={navigation}/>
    </SafeAreaView>
  )
}

export default StackScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  userButton: {
    marginBottom: 25,
  },
});