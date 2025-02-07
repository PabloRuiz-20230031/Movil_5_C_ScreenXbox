import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app_screen/login';
import XboxSocialScreen from './app_screen/XboxSocialScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="XboxSocial" component={XboxSocialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

