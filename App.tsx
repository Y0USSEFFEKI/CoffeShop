/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Acceuil from './src/components/pages/Acceuil';
import { useEffect, useState } from 'react';
import BootSplash from "react-native-bootsplash";
import Home from './src/components/pages/Home';
import Login from './src/components/pages/Login';
import Signup from './src/components/pages/Signup';
import Favorite from './src/components/pages/Favorite';
import Cart from './src/components/pages/Cart';
import Product from './src/components/pages/Product';

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
  const [screen, setScreen] = useState<'acceuil' | 'login' | 'signup' | 'home' | 'favorite' | 'cart' | 'product'>('acceuil');

  return (
    <View style={styles.container}>
      {screen === 'acceuil' && <Acceuil onGetStarted={() => setScreen('login')} />}
      {screen === 'login' && (
        <Login onLoginSuccess={() => setScreen('home')} onGoToSignup={() => setScreen('signup')} />
      )}
      {screen === 'signup' && (
        <Signup onSignupSuccess={() => setScreen('home')} onGoToLogin={() => setScreen('login')} />
      )}
      {screen === 'home' && (
        <Home
          onGoHome={() => setScreen('home')}
          onGoFavorites={() => setScreen('favorite')}
          onGoCart={() => setScreen('cart')}
          onGoProduct={() => setScreen('product')}
        />
      )}
      {screen === 'favorite' && (
        <Favorite
          onGoHome={() => setScreen('home')}
          onGoFavorites={() => setScreen('favorite')}
          onGoCart={() => setScreen('cart')}
        />
      )}
      {screen === 'cart' && (
        <Cart
          onGoHome={() => setScreen('home')}
          onGoFavorites={() => setScreen('favorite')}
          onGoCart={() => setScreen('cart')}
        />
      )}
      {screen === 'product' && <Product onGoBack={() => setScreen('home')} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
