import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [fontsLoaded] = Font.useFonts({
            'Aeonik-Bold': require('./src/assets/fonts/Aeonik/Aeonik-Bold.ttf'),
            'Aeonik-BoldItalic': require('./src/assets/fonts/Aeonik/Aeonik-BoldItalic.ttf'),
            'Aeonik-Light': require('./src/assets/fonts/Aeonik/Aeonik-Light.ttf'),
            'Aeonik-LightItalic': require('./src/assets/fonts/Aeonik/Aeonik-LightItalic.ttf'),
            'Aeonik-Medium': require('./src/assets/fonts/Aeonik/Aeonik-Medium.ttf'),
            'Aeonik-Regular': require('./src/assets/fonts/Aeonik/Aeonik-Regular.ttf'),
            'Aeonik-RegularItalic': require('./src/assets/fonts/Aeonik/Aeonik-RegularItalic.ttf'),
    
  })

  console.log('Does font loaded',fontsLoaded)

  return (
    <View style={styles.container}>
      <Text style = {{
        fontFamily : 'Aeonik-BoldItalic'
      }}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
