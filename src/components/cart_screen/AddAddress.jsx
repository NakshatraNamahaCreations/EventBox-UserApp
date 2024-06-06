import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

function AddAddress({navigation}) {
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
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          position: 'absolute',
          top: 1,
          // left: 1,
          zIndex: 111111,
        }}>
        <TextInput
          placeholder="Enter Address"
          placeholderTextColor="#555"
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            width: '100%',
            height: 50,
            padding: 5,
            color: 'black',
            fontSize: 18,
            paddingLeft: 16,
            marginTop: 10,
          }}
        />
      </View>

      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
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
      <View
        style={{
          backgroundColor: 'white',
          padding: 10,
          position: 'absolute',
          bottom: 1,
          width: '100%',
          paddingTop: 20,
        }}>
        <View style={{marginTop: 5, flexDirection: 'row', flex: 1}}>
          <View style={{flex: 0.1}}>
            {/* <FontAwesome6 name="location-dot" color={'#01007B'} size={25} /> */}
            <SimpleLineIcons name="location-pin" color="black" size={25} />
          </View>
          <View style={{flex: 0.9}}>
            <Text
              style={{
                fontSize: 17,
                // fontWeight: 'bold',
                color: 'black',
              }}>
              {/* 1st Floor, No.38, AVS Compound, 80 Feet Rd, 4th Block, */}
              Madiwala, 1st Stage, Bommanahalli, Bengaluru, Karnataka 560068
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
          onPress={() => {
            navigation.navigate('Add Locality');
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              textAlign: 'center',
              fontSize: 18,
            }}>
            Confirm Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddAddress;
