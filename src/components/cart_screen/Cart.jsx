import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import withBackgroundColor from './withBackgroundColor';
import CartHeader from './CartHeader';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox} from 'react-native-paper';

const CartHeaderWithBackground = withBackgroundColor(CartHeader, 'white');

export default function Cart({navigation}) {
  const deviceWidth = Dimensions.get('window').width;
  const [showPolicy, setShowPolicy] = useState(false);
  const [checked, setChecked] = useState(false);

  let totalCart = 5;

  const openModal = () => setShowPolicy(true);
  const closeModal = () => setShowPolicy(false);
  return (
    <>
      <CartHeaderWithBackground cartSize={totalCart} />
      <ScrollView>
        <View style={{marginBottom: 10}}>
          {Array.from({length: 5}).map((_, index) => (
            <View
              key={index}
              style={{
                backgroundColor: 'white',
                padding: 8,
                // border: 'transparent',
                // elevation: 2,
                borderRadius: 2,
                marginTop: 10,
                // marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    flex: 0.2,
                    // alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      alignSelf: 'flex-start',
                    }}
                    source={{
                      uri: 'https://ik.imagekit.io/faskf16pg/dslr-cameras/38_OgbjFNvll.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661426226096',
                    }}
                  />
                </View>
                <View style={{flex: 0.6, justifyContent: 'center'}}>
                  <View>
                    <Text style={{fontSize: 15, color: '#333'}}>
                      {'Rental for Canon EOS 5D Mark'.length < 10
                        ? 'Canon EOS 5D Mark'
                        : 'Rental for Canon EOS 5D Mark'.substring(0, 25) +
                          '...'}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#01007B',
                        marginTop: 5,
                        marginBottom: 5,
                      }}>
                      {'Mani Enterprises'}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 15,
                          fontWeight: '500',
                        }}>
                        <MaterialIcons
                          name="currency-rupee"
                          // size={13}
                          color="black"
                        />
                        {'1000'}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    // justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 17,
                      marginBottom: 10,

                      // justifyContent: 'center',
                    }}>
                    <EvilIcons
                      name="trash"
                      size={27}
                      color="#333"
                      style={{textAlign: 'center'}}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#DADDF8',
                      // paddingLeft: 7,
                      // paddingRight: 7,
                      borderRadius: 5,
                      padding: 10,
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        // justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <AntDesign name="minus" size={15} color="#01007B" />
                    </TouchableOpacity>
                    <View
                      style={{
                        marginLeft: 5,
                        marginRight: 5,
                        // padding: 9,
                      }}>
                      <Text
                        style={{
                          color: '#01007B',
                          fontWeight: '500',
                        }}>
                        {' '}
                        5{' '}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        // justifyContent: 'flex-end',
                        alignContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <AntDesign name="plus" size={15} color="#01007B" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={{backgroundColor: 'white', padding: 10}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eee',
              padding: 15,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomColor: '#e1e1e1',
              // borderBottomWidth: 2,
              // backgroundColor: 'white',
              // elevation: 1,
            }}>
            <Text style={{color: '#2c2c2c', fontSize: 15, fontWeight: '500'}}>
              Price Details
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderTopWidth: 0,
              padding: 15,
              borderColor: '#eee',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{color: 'black'}}>Total Item</Text>
              </View>
              <View>
                <Text style={{color: 'black'}}>₹1025000 </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <Text style={{color: 'black'}}>Event Box Fee</Text>
              </View>
              <View>
                <Text style={{color: 'black'}}>₹20000 </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <Text style={{color: 'black'}}>GST 18%</Text>
              </View>
              <View>
                <Text style={{color: 'black'}}>₹10000 </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                  You Pay
                </Text>
              </View>
              <View>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
                  {' '}
                  ₹1045000{' '}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <View
              style={{
                borderColor: '#E3A400',
                borderWidth: 1,
                borderRadius: 5,
                height: 80,
                marginLeft: 10,
              }}></View>
            <Pressable>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#E7B32C', '#E39200']}
                style={{
                  // backgroundColor: '#E3A400',
                  marginTop: -70,
                  elevation: 1,
                  borderColor: 'transparent',
                  borderWidth: 0,
                  marginLeft: -2,
                  marginRight: 10,
                  height: 80,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 15,
                }}>
                <Image
                  source={require('../../../assets/write.png')}
                  style={{width: 50, height: 50}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '900',
                    padding: 10,
                  }}>
                  DESIGN YOUR MOOD BOARD{' '}
                </Text>
                <AntDesign
                  style={{marginLeft: 50}}
                  name="right"
                  color={'white'}
                  size={15}
                />
              </LinearGradient>
            </Pressable>
          </View>
          <View>
            <TouchableOpacity onPress={openModal}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  color: 'green',
                  fontWeight: '600',
                  textDecorationLine: 'underline',
                }}>
                {' '}
                Terms & Conditions{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          borderTopColor: '#e1e1e1',
          borderWidth: 1,
          borderColor: 'transparent',
        }}>
        <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
          <View style={{flex: 0.4}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              ₹1045000
            </Text>
            <Text style={{fontSize: 15, color: '#555', marginTop: 5}}>
              Grand Total
            </Text>
          </View>
          <View style={{flex: 0.6}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#01007B',
                padding: 15,
                borderRadius: 7,
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
              }}
              onPress={() => {
                navigation.navigate(
                  'Add Address',
                  // {product:product,product2:product2,product3:product3,product4
                  //  {
                  //   category: category,
                  // }
                );
              }}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
                Add Address
              </Text>
              <AntDesign
                style={{marginTop: 4}}
                name="arrowright"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationIn="slideInUp"
        isVisible={showPolicy}
        deviceWidth={deviceWidth}
        style={{margin: 20}}
        transparent={true}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            // top: '25%',
            width: '100%',
            elevation: 5,
            backgroundColor: 'white',
            // padding: 10,
            shadowColor: '#000',
          }}>
          <AntDesign
            style={{
              // marginLeft: 50,
              position: 'absolute',
              top: -14,
              right: -10,
            }}
            name="closecircleo"
            color={'black'}
            size={25}
            onPress={closeModal}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: 'black',
              textAlign: 'center',
              padding: 10,
            }}>
            Terms & Conditions
          </Text>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                // marginTop: 10,
                // marginBottom: 10,
                padding: 10,
              }}>
              <View style={{flex: 0.1}}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <View style={{flex: 0.9}}>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                  Once booked service, you will get to chat with
                  vendors/Celebrities/DJs/ etc. You will be provided with their
                  managers or PAs numbers. Please DO NOT misuse or engage in
                  shady activities. Your account will be terminated immediately.
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
              <View style={{flex: 0.1}}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <View style={{flex: 0.9}}>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                  Once booked service, an item will have a breathing room of 2
                  HRS, after that you will charged a fee amount.
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
              <View style={{flex: 0.1}}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <View style={{flex: 0.9}}>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
              <View style={{flex: 0.1}}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <View style={{flex: 0.9}}>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', padding: 10}}>
              <View style={{flex: 0.1}}>
                <Checkbox
                  status={checked ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
              <View style={{flex: 0.9}}>
                <Text style={{color: 'black', fontSize: 14, fontWeight: '500'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={{padding: 20}}>
            <Pressable
              onPress={closeModal}
              style={{
                backgroundColor: '#DADDF8',
                padding: 10,
                borderColor: '#2F4E9E',
                borderWidth: 1,
              }}>
              <Text
                style={{color: '#2F4E9E', fontSize: 15, textAlign: 'center'}}>
                Done
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}
