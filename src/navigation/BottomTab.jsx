import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import HomeStack from '../main_stack/HomeStack';
import OrdersStack from '../main_stack/OrdersStack';
import CartStack from '../main_stack/CartStack';
import MyProfile from '../components/profile_screen/MyProfile';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    // <Tab.Navigator
    //   initialRouteName="home"
    //   screenOptions={{
    //     tabBarActiveTintColor: '#01007B',
    //     headerTintColor: '#01007B',
    //   }}>
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       headerShown: false,
    //       tabBarIcon: ({color, size}) => (
    //         <MaterialCommunityIcons name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Orders"
    //     component={Orders}
    //     options={{
    //       tabBarLabel: 'Orders',
    //       headerShown: false,
    //       tabBarIcon: ({color, size}) => (
    //         <MaterialIcons name="receipt" color={color} size={size} />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Cart"
    //     component={Orders}
    //     options={{
    //       tabBarLabel: 'Cart',
    //       tabBarLabelStyle: {
    //         color: 'black',
    //       },
    //       headerShown: false,
    //       tabBarIcon: ({color, size}) => (
    //         <MaterialCommunityIcons
    //           name="tape-measure"
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="TabStack"
    //     component={TabStack}
    //     options={{
    //       tabBarLabel: 'More',
    //       headerShown: true,
    //       tabBarIcon: ({color, size}) => (
    //         <MaterialCommunityIcons
    //           name="dots-horizontal"
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     }}
    //   />
    //   {/*
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarLabelStyle: {
    //         color: 'black',
    //       },
    //       headerShown: false,
    //       tabBarIcon: ({color, size}) => (
    //         <MaterialCommunityIcons
    //           name="tape-measure"
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarLabelStyle: {
    //         color: 'black',
    //       },
    //       headerShown: true,
    //       tabBarIcon: ({color, size}) => (
    //         <Entypo name="tools" color={color} size={size} />
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarLabelStyle: {
    //         color: 'black',
    //       },
    //       headerShown: true,

    //       tabBarIcon: ({color, size}) => (
    //         <MaterialIcons
    //           name="add-circle-outline"
    //           color={color}
    //           size={size}
    //         />
    //       ),
    //     }}
    //   /> */}
    // </Tab.Navigator>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#01007B',
        headerTintColor: '#01007B',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarLabel: 'Orders',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="format-list-bulleted-add"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cart-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="You"
        component={MyProfile}
        options={{
          tabBarLabel: 'You',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
