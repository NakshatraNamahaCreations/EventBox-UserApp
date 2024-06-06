import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ScrollView} from 'react-native';

export default function AddLocality({navigation}) {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState({
    latitude: 12.900531187593806,
    longitude: 77.52318729384943,
  });
  const destinationLocation = {
    latitude: 12.903257357603737,
    longitude: 77.52074313137831,
  };
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <MapView
        ref={mapRef}
        style={{width: '100%', height: '30%'}}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        onRegionChange={x => {
          // console.log(x);
        }}>
        <Marker
          coordinate={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          }}
        />
        <Marker coordinate={destinationLocation} />
        <MapViewDirections
          origin={userLocation}
          destination={destinationLocation}
          apikey="AIzaSyBF48uqsKVyp9P2NlDX-heBJksvvT_8Cqk" // Replace with your Google Maps API key
          strokeWidth={7}
          strokeColor="#3dabdd"
        />
      </MapView>
      <ScrollView
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderColor: 'transparent',
          backgroundColor: 'white',
          padding: 10,
          //   elevation: 3,
          position: 'relative',
          top: -10,
          width: '100%',
        }}>
        <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
          <SimpleLineIcons name="location-pin" color="black" size={25} />{' '}
          Madiwala
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'black',
            marginTop: 4,
          }}>
          Madiwala, 1st Stage, Bommanahalli, Bengaluru, Karnataka 560068
        </Text>
        <View
          style={{
            marginTop: 20,
            borderRadius: 6,
            backgroundColor: '#fffafa',
            padding: 10,
            borderColor: '#b63d42',
            borderWidth: 1,
          }}>
          <Text style={{color: '#b63d42', fontSize: 12}}>
            A detailed address will help our Delivery Partner reach your
            doorstep easily
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <TextInput
            placeholder="HOUSE / FLAT / BLOCK"
            placeholderTextColor="gray"
            style={{
              height: 40,
              // padding: 5,
              color: 'black',
              backgroundColor: 'transparent',
              fontSize: 14,
              borderColor: 'transparent',
              borderBottomWidth: 1,
              borderBottomColor: '#e3e3e3',
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <TextInput
            placeholder="ROAD / AREA (OPTIONAL)"
            placeholderTextColor="gray"
            style={{
              height: 40,
              // padding: 5,
              color: 'black',
              backgroundColor: 'transparent',
              fontSize: 14,
              borderColor: 'transparent',
              borderBottomWidth: 1,
              borderBottomColor: '#e3e3e3',
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '500',
              marginBottom: 20,
            }}>
            {/* DIRECTIONS TO REACH (OPTIONAL) */}
            Directions to reach (Optional)
          </Text>
          <TextInput
            placeholder="Road / Area"
            placeholderTextColor="gray"
            multiline
            numberOfLines={4}
            maxLength={200}
            style={{
              height: 120,
              padding: 10,
              color: 'black',
              backgroundColor: '#e3e3e326',
              fontSize: 14,
              borderColor: '#e3e3e3',
              borderWidth: 1,
              //   borderBottomColor: '#e3e3e3',
              textAlignVertical: 'top',
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{marginTop: 30, marginBottom: 30}}>
          <TouchableOpacity
            style={{
              // marginTop: 15,
              backgroundColor: '#01007B',
              padding: 15,
              borderRadius: 5,
            }}
            onPress={() => {
              navigation.navigate('Order Summary');
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                textAlign: 'center',
                fontSize: 18,
              }}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
