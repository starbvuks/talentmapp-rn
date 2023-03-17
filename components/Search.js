import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const domainNames = ['tech talent', 'medical talent', 'design talent', 'marketing talent', 'legal talent'];
  const randomDomain = domainNames[Math.floor(Math.random() * domainNames.length)];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Search for ${randomDomain}`}
        placeholderTextColor="#A8A8A8"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.userButton}>
        <FontAwesome name="user" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: "87%",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 20,
    shadowColor: "midnightblue",
    elevation: 12,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
},
input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  userButton: {
    marginLeft: 10,
  },
});

export default SearchBar;
