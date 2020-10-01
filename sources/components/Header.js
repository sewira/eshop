import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

const Header = () => {
  return (
    <View style={styles.Header}>
      <View style={styles.IconContainer}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          style={{height: '100%', width: '100%'}}
        />
        <Text style={{fontSize: 20}}>eShop</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    marginHorizontal: 16,
    marginTop: 10,
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IconContainer: {
    height: 40,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarContainer: {
    width: 200,
  },
  searchBar: {
    height: 30,
    width: ' 100%',
    borderColor: '#727C8E',
    borderWidth: 1,
    borderRadius: 5,
  },
});
