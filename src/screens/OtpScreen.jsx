import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function OtpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.helperText}>OTP</Text>
      <TextInput style={styles.input} />

      <Text
        style={{
          color: '#7d8592',
          fontSize: 15,

          fontWeight: '500',
          textAlign: 'center',
          padding: 25,
        }}>
        Enter OTP received on previously entered mobile number
      </Text>
      <View style={{marginTop: '20%', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.otpBtn}
          onPress={() => navigation.navigate('BottomTab')}>
          <Text style={{color: '#01007B', fontWeight: '600', fontSize: 17}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
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
  helperText: {
    color: 'black',
    fontSize: 15,
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'left',
    fontWeight: '500',
  },
  input: {
    // backgroundColor: '#EFEFEF',
    borderColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#787878',
    width: '80%',
    height: 30,
    padding: 5,
    color: '#4b4b4b',
    fontSize: 18,
    paddingLeft: 16,
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
  },
});
export default OtpScreen;
