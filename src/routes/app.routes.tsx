import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Product } from '../screens/Product';
import { Cart } from  '../screens/Cart'
import { Search } from '../screens/Search';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes () {
  return (
    <Navigator 
    initialRouteName="home"
    screenOptions={{headerShown: false}}>

      <Screen
      name="home"
      component={Home} 
      />

      <Screen 
      name="product"
      component={Product}
      />


      <Screen
      name="cart"
      component={Cart} 
      />

      <Screen 
      name="search"
      component={Search}
      />
        

    </Navigator>
 

  )
}