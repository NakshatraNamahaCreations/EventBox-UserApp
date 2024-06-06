import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {TouchableOpacity} from 'react-native';

export default function OrderSummary({navigation}) {
  let todayDate = new Date();
  //   console.log('todayDate', todayDate);
  const handlePay = () => {
    alert('Booking Successful!');
    navigation.navigate('Home');
  };
  return (
    <ScrollView style={{marginTop: 25, marginLeft: 5, marginRight: 10}}>
      <View style={{backgroundColor: 'white'}}>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#2e3338'}}>
            Order Summary
          </Text>
          <View style={{marginTop: 20}}>
            {Array.from({length: 5}).map((_, index) => (
              <View
                key={index}
                style={{flexDirection: 'row', flex: 1, marginBottom: 19}}>
                <View style={{flex: 0.6}}>
                  <Text
                    style={{color: '#3c4145', fontSize: 15, textAlign: 'left'}}>
                    {'Rental for Canon EOS 5D Mark'.length < 10
                      ? 'Canon EOS 5D Mark'
                      : 'Rental for Canon EOS 5D Mark'.substring(0, 25) + '...'}
                  </Text>
                </View>
                <View style={{flex: 0.1}}>
                  <Text
                    style={{
                      color: '#3c4145',
                      fontSize: 15,
                      textAlign: 'right',
                    }}>
                    X3
                  </Text>
                </View>
                <View style={{flex: 0.3}}>
                  <Text
                    style={{
                      color: '#3c4145',
                      fontSize: 15,
                      textAlign: 'right',
                    }}>
                    <MaterialIcons
                      name="currency-rupee"
                      // size={13}
                      color="#3c4145"
                    />
                    1000
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#e2e2e2',
            borderBottomWidth: 1,
            borderColor: 'transparent',
            borderStyle: 'dashed',
            marginBottom: 15,
          }}></View>
        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row', flex: 1, marginBottom: 19}}>
            <View style={{flex: 0.6}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 15,
                  textAlign: 'left',
                }}>
                Total Item
              </Text>
            </View>

            <View style={{flex: 0.4}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 15,
                  textAlign: 'right',
                }}>
                <MaterialIcons
                  name="currency-rupee"
                  // size={13}
                  color="#3c4145"
                />
                1025000
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', flex: 1, marginBottom: 19}}>
            <View style={{flex: 0.6}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 15,
                  textAlign: 'left',
                }}>
                Event Box Fee
              </Text>
            </View>

            <View style={{flex: 0.4}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 15,
                  textAlign: 'right',
                }}>
                <MaterialIcons
                  name="currency-rupee"
                  // size={13}
                  color="#3c4145"
                />
                20000
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', flex: 1, marginBottom: 19}}>
            <View style={{flex: 0.6}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 15,
                  textAlign: 'left',
                }}>
                GST 18%
              </Text>
            </View>

            <View style={{flex: 0.4}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 15,
                  textAlign: 'right',
                }}>
                <MaterialIcons
                  name="currency-rupee"
                  // size={13}
                  color="#3c4145"
                />
                10000
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', flex: 1, marginBottom: 19}}>
            <View style={{flex: 0.6}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 17,
                  textAlign: 'left',
                  fontWeight: '500',
                }}>
                Total
              </Text>
            </View>

            <View style={{flex: 0.4}}>
              <Text
                style={{
                  color: '#3c4145',
                  fontSize: 17,
                  textAlign: 'right',
                  fontWeight: '500',
                }}>
                <MaterialIcons
                  name="currency-rupee"
                  // size={13}
                  color="#3c4145"
                />
                1045000
              </Text>
            </View>
          </View>
        </View>
        <View style={{padding: 15}}>
          <Text
            style={{
              color: '#3c4145',
              fontSize: 17,
              fontWeight: '500',
            }}>
            <MaterialCommunityIcons
              name="town-hall"
              color="#3c4145"
              size={25}
            />{' '}
            Ibis Party Hall
          </Text>
          <Text
            style={{
              color: '#3c4145',
              fontSize: 14,
              marginTop: 10,
            }}>
            No.26, 1, Hosur Rd, Zuzuvadi, Madiwala, 1st Stage, Bommanahalli,
            Bengaluru, Karnataka 560068
          </Text>
          <Text
            style={{
              color: '#3c4145',
              fontSize: 14,
              fontWeight: '500',
              marginTop: 10,
            }}>
            <MaterialCommunityIcons
              name="calendar-star"
              color="#3c4145"
              size={14}
            />{' '}
            {moment(todayDate).format('DD-MM-YYYY')}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#01007B',
          padding: 15,
          borderRadius: 5,
          marginBottom: 20,
        }}
        onPress={handlePay}>
        <Text
          style={{
            color: 'white',
            fontWeight: '500',
            textAlign: 'center',
            fontSize: 18,
          }}>
          Pay ₹1045000
        </Text>
      </TouchableOpacity>
      <View
        style={{position: 'relative', bottom: 0, width: '100%', padding: 15}}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={{flex: 0.8}}>
            <Text style={{color: 'black', fontSize: 13}}>
              Buy Authentic Products. Pay Securely
            </Text>
          </View>
          <View style={{flex: 0.2}}>
            <Image
              source={require('../../../assets/icons8-magnetic-card-48.png')}
              style={{width: 55, height: 55}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
