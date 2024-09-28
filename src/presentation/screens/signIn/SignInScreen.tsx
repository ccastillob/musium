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

export const SignInScreen = () => {
  const {top} = useSafeAreaInsets();

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
          Let's get you in
        </Text>
        <View style={styles.containerButtons}>
          <Pressable style={styles.button}>
            <View style={styles.contentButton}>
              <Image
                style={styles.imageButton}
                source={require('../../assets/google.png')}
              />
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.buttonText}>
                Continue with Google
              </Text>
            </View>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={styles.contentButton}>
              <Image
                style={styles.imageButton}
                source={require('../../assets/fb.png')}
              />
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.buttonText}>
                Continue with Facebook
              </Text>
            </View>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={styles.contentButton}>
              <Image
                style={styles.imageButton}
                source={require('../../assets/apple.png')}
              />
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.buttonText}>
                Continue with Apple
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.contentSeparator}>
            <View style={styles.separatorLeft} />
            <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
              or
            </Text>
            <View style={styles.separatorRight} />
          </View>
          <View style={styles.contentLoginButtonAndDescriptionNewAccount}>
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
                Log in with a password
              </Text>
            </Pressable>
            <Text style={{color: '#fff', fontWeight: 'medium', fontSize: 16}}>
              Don't have an account?
              <Text
                style={{color: '#7CEEFF', fontWeight: 'bold', fontSize: 16}}>
                {' Sign Up '}
              </Text>
            </Text>
          </View>
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
  containerButtons: {
    display: 'flex',
    gap: 16,
    marginTop: 44,
  },
  button: {
    maxHeight: 60,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: '#DBE7E8',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#1E1E1E',
    paddingVertical: 12,
  },
  contentButton: {
    maxHeight: 60,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageButton: {
    marginRight: 12,
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
    paddingHorizontal: 20,
  },
  contentSeparator: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  separatorLeft: {
    position: 'absolute',
    top: '50%',
    left: 20,
    width: '40%',
    height: 2,
    backgroundColor: '#fff',
  },
  separatorRight: {
    position: 'absolute',
    top: '50%',
    right: 20,
    width: '40%',
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
