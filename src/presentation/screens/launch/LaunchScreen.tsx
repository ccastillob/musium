import {Image, Pressable, StyleSheet, View} from 'react-native';
import {globalColors} from '../../theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/stack/StackNavigator';

export const LaunchScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Welcome')}>
        <Image source={require('../../assets/musium_logo.png')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors['background-black'],
  },
});
