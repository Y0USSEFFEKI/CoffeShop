/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Acceuil from './src/components/pages/Acceuil';
import { useEffect } from 'react';
import BootSplash from "react-native-bootsplash";
import Home from './src/components/pages/Home';
import Product from './src/components/pages/Product';
import Favorite from './src/components/pages/Favorite';
import Cart from './src/components/pages/Cart';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* <Acceuil></Acceuil> */}
      {/* <Home></Home> */}
      {/* <Product></Product> */}
      {/* <Favorite></Favorite> */}
      <Cart></Cart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
