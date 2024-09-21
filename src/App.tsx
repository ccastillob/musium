import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {Image, Platform, Text, View, Pressable} from 'react-native';
import {PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={{flex: 1, backgroundColor: '#41C3D6'}}>
          <View
            style={{
              position: 'absolute',
              backgroundColor: Platform.OS === 'ios' ? '#0b475b' : undefined,
              borderRadius: 100,
              top: '2%',
              left: '5%',
              width: 150,
              height: 150,
              opacity: Platform.OS === 'ios' ? 0.22 : 0.8,
              shadowColor: '#121111',
              shadowOffset: {width: -4, height: 8},
              shadowOpacity: 1,
              shadowRadius: 22,
              elevation: 10,
            }}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: Platform.OS === 'ios' ? '#0b475b' : undefined,
              borderRadius: 150,
              top: '5%',
              right: '10%',
              width: 78,
              height: 78,
              opacity: Platform.OS === 'ios' ? 0.22 : 0.8,
              shadowColor: '#121111',
              shadowOffset: {width: -4, height: 8},
              shadowOpacity: 1,
              shadowRadius: 22,
              elevation: 10,
            }}
          />
          <View
            style={{
              position: 'absolute',
              backgroundColor: Platform.OS === 'ios' ? '#0b475b' : undefined,
              borderRadius: 150,
              top: '20%',
              right: '5%',
              width: 103,
              height: 103,
              opacity: Platform.OS === 'ios' ? 0.22 : 0.8,
              shadowColor: '#121111',
              shadowOffset: {width: -4, height: 8},
              shadowOpacity: 1,
              shadowRadius: 22,
              elevation: 10,
              zIndex: 999,
            }}
          />
          <Image
            style={{
              height: '100%',
              bottom: 40,
              width: '100%',
              resizeMode: 'contain',
            }}
            source={require('./img_girl.png')}
          />
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#121111',
              height: '36%',
              width: '100%',
              borderTopLeftRadius: 54,
              borderTopRightRadius: 54,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              paddingHorizontal: 24,
              paddingVertical: 32,
            }}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={4}
              style={{
                position: 'relative',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                fontWeight: 'bold',
              }}>
              From the
              <Text style={{color: '#76D7E6', fontWeight: 'medium'}}>
                {' latest '}
              </Text>
              to the
              <Text style={{color: '#7ceeff', fontWeight: 'medium'}}>
                {' greatest '}
              </Text>
              hits, play your favorite tracks on
              <Text style={{color: '#06A0B5'}}>{' musium '}</Text>now!
            </Text>
            <View
              style={{
                width: '40%',
                height: 9,
                marginTop: 2,
              }}>
              <View
                style={{
                  backgroundColor: '#00C2CB',
                  position: 'absolute',
                  width: Platform.OS === 'ios' ? '60%' : '50%',
                  left: 0,
                  height: '100%',
                  borderTopStartRadius: 50,
                  borderBottomStartRadius: 50,
                }}></View>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: '#ffffff',
                  left: '50%',
                  width: '50%',
                  height: '100%',
                  borderTopEndRadius: 50,
                  borderBottomEndRadius: 50,
                }}></View>
            </View>
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
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                Get Started
              </Text>
            </Pressable>
          </View>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};
