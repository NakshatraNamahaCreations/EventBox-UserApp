import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        onError={() => console.log('Error loading image')} // Error handling for image
      />

      <Text style={styles.title}>Login</Text>

      <Text style={styles.helperText}>Name</Text>
      <TextInput style={styles.input} />

      <Text style={styles.helperText}>Phone Number</Text>
      <TextInput style={styles.input} keyboardType="numeric" />

      <Text
        style={{
          color: '#7d8592',
          fontSize: 15,
          marginTop: 20,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        You will get OTP on this number
      </Text>
      <TouchableOpacity
        style={styles.otpBtn}
        onPress={() => navigation.navigate('Otp')}>
        <Text style={{color: '#01007B', fontWeight: '600', fontSize: 17}}>
          Get OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 32,
  },
  title: {
    color: '#01007B',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 24,
  },
  helperText: {
    color: 'black',
    fontSize: 15,
    marginTop: 12,
    // marginBottom: 4,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  input: {
    // backgroundColor: '#EFEFEF',
    // elevation: 6,
    // borderRadius: 15,
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#787878',
    width: '90%',
    height: 40,
    // padding: 5,
    color: '#4b4b4b',
    fontSize: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
  otpBtn: {
    backgroundColor: '#DADDF8',
    width: 100,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 3,
    marginTop: 40,
  },
});
