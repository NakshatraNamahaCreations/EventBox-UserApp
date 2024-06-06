import {NavigationContainer} from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';
// import BottomTab from './src/navigation/BottomTab';

function App() {
  return (
    <NavigationContainer>
      <MyStack />
      {/* <BottomTab /> */}
    </NavigationContainer>
  );
}

export default App;
