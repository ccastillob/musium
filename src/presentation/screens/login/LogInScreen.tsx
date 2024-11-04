import {
  Image,
  StyleSheet,
  View,
  Platform,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalColors} from '../../theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/stack/StackNavigator';

export const LogInScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <ScrollView
      style={{
        marginTop: Platform.OS === 'android' ? 10 : top + 10,
      }}>
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={require('../../assets/musium_logo.png')}
        />
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
          Login to your account
        </Text>
        <View style={styles.containerForm}>
          <View style={styles.containerCheck}>
            <View style={styles.contentCheck}></View>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
              Remember me
            </Text>
          </View>
        </View>
        <View style={styles.containerBottom}>
          <Pressable
            style={{
              backgroundColor: '#06A0B5',
              borderRadius: 50,
              paddingHorizontal: 20,
              paddingVertical: 24,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}>
              Log in
            </Text>
          </Pressable>
          <Text style={{color: '#7CEEFF', fontWeight: 'bold', fontSize: 16}}>
            Forgot the password?
          </Text>
        </View>
        <View style={styles.contentSeparator}>
          <View style={styles.separatorLeft} />
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            or continue with
          </Text>
          <View style={styles.separatorRight} />
        </View>
        <View style={styles.contentLoginButtonAndDescriptionNewAccount}>
          <View style={styles.containerButtons}>
            <Pressable style={styles.button}>
              <View style={styles.contentButton}>
                <Image
                  style={styles.imageButton}
                  source={require('../../assets/google.png')}
                />
              </View>
            </Pressable>
            <Pressable style={styles.button}>
              <View style={styles.contentButton}>
                <Image
                  style={styles.imageButton}
                  source={require('../../assets/fb.png')}
                />
              </View>
            </Pressable>
            <Pressable style={styles.button}>
              <View style={styles.contentButton}>
                <Image
                  style={styles.imageButton}
                  source={require('../../assets/apple.png')}
                />
              </View>
            </Pressable>
          </View>
          <Text style={{color: '#fff', fontWeight: 'medium', fontSize: 16}}>
            Don't have an account?
            <Text style={{color: '#7CEEFF', fontWeight: 'bold', fontSize: 16}}>
              {' Sign Up '}
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
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
  imageContainer: {
    width: 400,
    height: 320,
  },
  containerForm: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginTop: 44,
    marginBottom: 40,
  },
  containerCheck: {
    display: 'flex',
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCheck: {
    display: 'flex',
    width: 18,
    height: 18,
    borderStyle: 'solid',
    borderColor: '#00C2CB',
    borderWidth: 2,
    borderRadius: 4,
  },
  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 36,
    marginBottom: 32,
    width: '80%',
  },
  button: {
    height: 48,
    width: 48,
    display: 'flex',
    borderRadius: 48,
    borderColor: '#DBE7E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  contentButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    borderRadius: 48,
    width: 32,
    height: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: Platform.OS === 'android' ? 24 : 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
    color: globalColors['text-primary'],
  },
  containerBottom: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 24,
  },
  contentSeparator: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 44,
    paddingHorizontal: 20,
  },
  separatorLeft: {
    position: 'absolute',
    top: '50%',
    left: 20,
    width: '25%',
    height: 2,
    backgroundColor: '#fff',
  },
  separatorRight: {
    position: 'absolute',
    top: '50%',
    right: 20,
    width: '25%',
    height: 2,
    backgroundColor: '#fff',
  },
  contentLoginButtonAndDescriptionNewAccount: {
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
