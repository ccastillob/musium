import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen} from '../../screens/welcome/WelcomeScreen';
import {SignInScreen} from '../../screens/signIn/SignInScreen';
import {LaunchScreen} from '../../screens/launch/LaunchScreen';
import {globalColors} from '../../theme/theme';

export type RootStackParams = {
  Launch: undefined;
  Welcome: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: globalColors['background-black'],
        },
        headerShown: false,
      }}>
      <Stack.Screen name="Launch" component={LaunchScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};
