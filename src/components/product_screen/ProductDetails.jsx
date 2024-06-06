import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProductDetails({navigation, route}) {
  const product = route.params.ele;
  console.log('product', product);
  const code = 'Mayiru';
  return (
    <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{backgroundColor: 'white', paddingBottom: 20}}>
        <Pressable style={{flex: 0.1}}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={30}
            color="black"
            style={styles.goBackIcon}
            onPress={() => navigation.goBack()}
          />
        </Pressable>
      </View>
      <View style={{backgroundColor: 'white', paddingBottom: 20}}>
        <Image
          style={styles.productImage}
          source={{
            uri: product.productImage,
          }}
        />
      </View>
      <View style={{padding: 15}}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: '400',
                  marginBottom: 6,
                }}>
                {product.shopName}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <AntDesign name="star" size={14} color="#fdd663" />
              <AntDesign name="star" size={14} color="#fdd663" />
              <AntDesign name="star" size={14} color="#fdd663" />
              <AntDesign name="star" size={14} color="#fdd663" />
              <AntDesign name="star" size={14} color="#fdd663" />
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  marginTop: -2,
                  marginLeft: 5,
                }}>
                4.1
              </Text>
            </View>
          </View>
          <Text style={styles.productName}>{product.productName} </Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 8,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.productPrice}>
                <MaterialIcons name="currency-rupee" size={13} color="black" />
                {product.productPrice}{' '}
              </Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 5}}>
              <TouchableOpacity style={styles.qtyIcon}>
                <AntDesign name="minus" size={13} color="white" />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  borderColor: '#01007B',
                  borderWidth: 1,
                  padding: 9,
                  // paddingLeft: 9,
                  // paddingRight: 9,
                }}>
                <Text
                  style={{
                    color: '#01007B',
                    fontWeight: '500',
                  }}>
                  {' '}
                  45{' '}
                </Text>
              </View>
              <TouchableOpacity style={styles.qtyIcon}>
                <AntDesign name="plus" size={13} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.descTitle}>Description...</Text>
            <Text style={styles.desc}>{product.productDescription} </Text>
          </View>
          {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}> */}
          <TouchableOpacity style={styles.cartButton}>
            <Text
              style={{
                fontSize: 18,
                color: '#01007B',
                textAlign: 'center',
                fontWeight: '500',
              }}>
              Add to cart
            </Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: 'black',
              fontSize: 23,
              fontWeight: 'bold',
              padding: 2,
              marginBottom: 10,
            }}>
            You might also like
          </Text>
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              // paddingLeft: 10,
              // paddingRight: 10,
              paddingBottom: 15,
              marginBottom: 20,
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Array.from({length: 8}).map((_, index) => (
                <TouchableOpacity key={index} style={styles.addsOnView}>
                  <Image
                    style={styles.addsOnImage}
                    source={{
                      uri: 'https://ik.imagekit.io/faskf16pg/dslr-cameras/38_OgbjFNvll.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661426226096',
                    }}
                  />
                  <View style={{padding: 8}}>
                    <Text style={styles.addsOnText}>
                      {'JBL Flip 5 Wireless Portable Bluetooth Speaker, Signature Sound with Powerful Bass Radiator, Vibrant Colors with Rugged Fabric Design, Party Boost, IPX7 Waterproof & Type C (Without Mic, Black)'
                        .length < 28
                        ? 'JBL Flip 5 Wireless Portable Bluetooth Speaker, Signature Sound with Powerful Bass Radiator, Vibrant Colors with Rugged Fabric Design, Party Boost, IPX7 Waterproof & Type C (Without Mic, Black)'
                        : 'JBL Flip 5 Wireless Portable Bluetooth Speaker, Signature Sound with Powerful Bass Radiator, Vibrant Colors with Rugged Fabric Design, Party Boost, IPX7 Waterproof & Type C (Without Mic, Black)'.substring(
                            0,
                            25,
                          ) + '...'}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <AntDesign name="star" size={14} color="#fdd663" />
                      <AntDesign name="star" size={14} color="#fdd663" />
                      <AntDesign name="star" size={14} color="#fdd663" />
                      <AntDesign name="star" size={14} color="#fdd663" />
                      <AntDesign name="star" size={14} color="#fdd663" />
                      <View style={{marginLeft: 9}}>
                        <Text style={{color: 'black', fontSize: 14}}>45</Text>
                      </View>
                    </View>
                    <Text style={styles.productPrice}>
                      <MaterialIcons
                        name="currency-rupee"
                        size={13}
                        color="black"
                      />
                      {/* {ele.productPrice} */}1000
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productImage: {
    // marginTop: 20,
    width: 250,
    height: 250,
    alignSelf: 'center',
    // elevation: 2,
  },
  goBackIcon: {
    marginTop: 25,
    marginLeft: 10,
  },
  productName: {
    fontSize: 23,
    // fontWeight: '600',
    color: '#01007B',
    marginBottom: 6,
    // textAlign: 'center',
  },
  // productPrice: {
  //   marginBottom: 5,
  //   fontSize: 24,
  //   color: 'black',
  //   fontWeight: '500',
  // },
  qtyIcon: {
    borderColor: '#01007B',
    borderWidth: 1,
    padding: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#01007B',
    backgroundColor: '#01007B',
  },
  descTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
    color: 'black',
  },
  desc: {
    fontSize: 15,
    // fontWeight: '400',
    marginBottom: 4,
    color: '#575757',
    // fontStyle: 'italic',
  },
  cartButton: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#DADDF8',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    // width: '50%',
  },
  addsOnView: {
    margin: 5,
    borderWidth: 2,
    borderColor: '#ededf1',
    backgroundColor: 'white',
    // width: '13%',
  },
  addsOnImage: {
    // width: '50%',
    // padding: 5,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: '#ededed',
    alignSelf: 'center',
  },
  productPrice: {
    fontSize: 20,
    color: '#414242',
    fontWeight: '500',
  },
  addsOnText: {
    fontSize: 17,
    color: 'black',
    marginBottom: 7,
    // width: 200,
    // fontWeight: '500',
    // color: 'black',
    // marginBottom: 10,
  },
});
