import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

export default function FlashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  input: {
    backgroundColor: '#EFEFEF',
    elevation: 6,
    borderRadius: 15,
    width: '80%',
    height: 50,
    paddingLeft: 15,
    padding: 5,
    margin: 15,
  },
});
