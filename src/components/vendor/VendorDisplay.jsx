import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
// import ViewSlider from 'react-native-view-slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

export default function VendorDisplay() {
  const navigation = useNavigation();
  const vendor = [
    {
      shopName: 'Shri Vinayaka Rents',
      vendorName: 'Vinayaka',
      location: 'Channasandra',
      vendorBannerImage: [
        {
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU',
        },
        {
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-qEOjAIUbs_tt9F5PFoFXzTsCvcTCr-xEpJsbaaEyp2mXkCZzv-yjkn1MzV5TEUr1rw&usqp=CAU',
        },
      ],
    },
    {
      shopName: 'Nayak Digitals',
      vendorName: 'Nayakan',
      location: 'Banashankari',
      vendorBannerImage: [
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipOV6toil7D3V_8hdR04NcbKC3tpOaG6BQKrwNR-=s680-w680-h510',
        },
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipN5gR_rQob6ywAzN6KgTasz7-NEU6seZjtHs6Q6=s680-w680-h510',
        },
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipOvmutDqf12OuCsy-f_NRf6B03W46ZRqhPe7bch=s680-w680-h510',
        },
      ],
    },
    {
      shopName: 'Mani Enterprises',
      vendorName: 'Mani Thiruvenkadam',
      location: 'Majestic',
      vendorBannerImage: [
        {
          imageUrl:
            'https://lh3.googleusercontent.com/p/AF1QipPXLvQb1Va5haLR42be6Jnz35WemPmaJDjmJX6W=s680-w680-h510',
        },
        {
          imageUrl:
            'https://content.jdmagicbox.com/comp/nalgonda/m3/9999p8682.8682.201203170035.l9m3/catalogue/-8t9w2ohcqk.jpg',
        },
        {
          imageUrl:
            'https://www.daytonlocal.com/images/profiles/covers/special-occasions-party-supply.jpg',
        },
      ],
    },
  ];

  const scrollViewRef = useRef(null);
  const [imgActive, setImgActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgActive < vendor.length - 1) {
        scrollViewRef.current.scrollTo({
          x: (imgActive + 1) * width,
          animated: true,
        });
      } else {
        scrollViewRef.current.scrollTo({x: 0, animated: true});
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [imgActive]);

  const onChange = event => {
    const slide = Math.ceil(
      event.contentOffset.x / event.layoutMeasurement.width,
    );
    if (slide !== imgActive) {
      setImgActive(slide);
    }
  };

  return (
    <>
      {vendor.map((vdr, vIndex) => (
        <Pressable
          key={vIndex}
          style={{marginTop: 15}}
          onPress={() => {
            navigation.navigate('VendorProfile', {
              vendorProfile: vdr,
            });
          }}>
          <ScrollView
            ref={scrollViewRef}
            onScroll={({nativeEvent}) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.viewBox}>
            {vdr.vendorBannerImage?.map((e, index) => (
              <ScrollView
                key={index}
                style={styles.imageContainer}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal>
                <Image
                  key={index}
                  resizeMode="stretch"
                  style={styles.bannerImage}
                  source={{uri: e.imageUrl}}
                  onError={() =>
                    console.log('Error loading image:', e.imageUrl)
                  }
                />
              </ScrollView>
            ))}
          </ScrollView>
          <View style={styles.vendorDe}>
            <View style={{marginLeft: 25}}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  fontWeight: '500',
                }}>
                <Fontisto name="shopping-store" size={16} color="black" />{' '}
                {vdr.shopName}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  marginTop: 5,
                }}>
                <SimpleLineIcons name="location-pin" size={15} color="black" />{' '}
                {vdr.location}
              </Text>
            </View>
            <View style={{marginRight: 25}}>
              <View style={{flexDirection: 'row'}}>
                {Array.from({length: 5}).map((_, index) => (
                  <AntDesign
                    key={index}
                    name="star"
                    size={14}
                    color="#fdd663"
                  />
                ))}
                <View style={{marginLeft: 9}}>
                  <Text style={{color: 'black', fontSize: 14}}>45</Text>
                </View>
              </View>
              <View style={{marginTop: 5, alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                  }}>
                  (20,202)
                </Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.wrapDot}>
        {imagenew.map((e, index) => (
          <Text
            key={index}
            style={imgActive === index ? styles.dotActive : styles.dot}>
            ●
          </Text>
        ))}
      </View> */}
          {/* <ViewSlider
        renderSlides={
          <>
            {vendor.map((vd, index) => (
              <>
                <View style={styles.viewBox} key={index}>
                  <Image
                    source={{
                      uri: `${vd.imageUrl}`,
                    }}
                    style={styles.bannerImage}
                  />
                </View>
              </>
            ))}
          </>
        }
        style={styles.slider}
        slideCount={3}
        dotActiveColor="white"
        dotInactiveColor="gray"
        dotsContainerStyle={styles.dotContainer}
        dots={true}
        autoSlide={true}
        slideInterval={11000}
      /> */}
        </Pressable>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: width - 40,
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  imageContainer: {
    borderRadius: 10,
    marginHorizontal: 10,
  },
  viewBox: {
    width: width,
    height: 200,
  },
  dotContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    bottom: 50,
  },
  dot: {
    margin: 3,
    color: 'yellow',
  },
  dotActive: {
    margin: 3,
    color: 'white',
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  vendorDe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
  },
});
