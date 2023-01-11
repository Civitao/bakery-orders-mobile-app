import { useFonts, Inter_300Light, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { CartItemsProvider } from './src/contexts/CartItemsState'
import { Routes } from './src/routes';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold
  });

  return (
    <CartItemsProvider>
      <Background>
        <StatusBar 
         barStyle="dark-content"
         backgroundColor='transparent'
         translucent
        />
         {fontsLoaded ? <Routes /> :  <Loading/>}
      </Background>
    </ CartItemsProvider>
  );
}

