import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#00C2CB',
  background: '#1E1E1E',
  'background-black': '#000000',
  'text-primary': '#FFFFFF',
  'text-secondary': '#8A9A9D',
};

export const globalStyle = StyleSheet.create({
  'general-bg': {
    flex: 1,
    backgroundColor: globalColors.background,
  },
});
