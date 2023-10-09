import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Suggestions from '../components/Suggestions';
const HomeScreen = () => {
  return (
    <View>
      <Header />
      <SearchBar />
      <Categories />
      <Suggestions />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
