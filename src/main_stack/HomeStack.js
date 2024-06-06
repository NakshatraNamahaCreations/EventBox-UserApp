import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../components/home_screen/Home';
import VendorProfile from '../components/vendor/VendorProfile';
import ProductFiltered from '../components/product_screen/ProductFiltered';
import ProductDetails from '../components/product_screen/ProductDetails';
import AllVendors from '../components/vendor/AllVendors';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductFiltered"
        component={ProductFiltered}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VendorProfile"
        component={VendorProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="All Vendors"
        component={AllVendors}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
