import FlashScreen from '../screens/FlashScreen';
import Login from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpScreen from '../screens/OtpScreen';
import BottomTab from './BottomTab';
import AddAddress from '../components/cart_screen/AddAddress';
import Project from '../mood board/Project';
import OrderSummary from '../components/cart_screen/OrderSummary';
import AddLocality from '../components/cart_screen/AddLocality';
import Notification from '../components/notification/Notification';
// import BottomTab from './BottomTab';
// import VendorProfile from '../components/vendor/VendorProfile';
// import ProductFiltered from '../components/ProductFiltered';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FlashScreen"
        component={FlashScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="Otp"
        component={OtpScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add Address"
        component={AddAddress}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Add Locality"
        component={AddLocality}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order Summary"
        component={OrderSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create New Project"
        component={Project}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
