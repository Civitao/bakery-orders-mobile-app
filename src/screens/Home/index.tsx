
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import logoImg from '../../../assets/logo-delicias-da-tia-ni-big.png'
import { Feather, Fontisto } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ItemCard, ItemCardProps } from '../../components/ItemCard';
import { PopularCard, PopularCardProps } from '../../components/PopularCard';
import { useCartItems } from '../../hooks/CartItemsHook';
import { ActiveMenuButton } from '../../components/ActiveMenuButton';
import { api } from '../../services/api';

  // interface FamiliesProps {
  //   id: string;
  //   name: string;
  //   iconName: string;
  //   ref: number;
  // }

const familiesIdentifiers = [
  {
    id: "080f1d38-b885-4e64-a634-bf2d605dfdee",
    name: "Fatias",
    iconName: "circle-slice-1",
    ref: 0
  },
  {
    id: "c0c34dd9-35fe-4b13-821d-495e3ed5c56b",
    name: "Cones",
    iconName: "cone",
    ref: 1
  },
  {
    id: "1031b0eb-8483-4b95-b53a-a48e72b08ef5",
    name: "Sortidos",
    iconName: "candy-outline",
    ref: 2
  },
  {
    id: "c1ec0b0f-4ef2-4785-8f32-bdc43ba8ea68",
    name: "Outros",
    iconName: "cookie-outline",
    ref: 3
  }];


 export function Home() {

  const navigation = useNavigation();
  const [populars, setPopulars] = useState<PopularCardProps[]>([]);
  const [items, setItems] = useState<ItemCardProps[]>([]);
  const [selectedRef, setSelectedRef] = useState(0);
  const [selectedId, setSelectedId] = useState("080f1d38-b885-4e64-a634-bf2d605dfdee");
  const {cartItemsList, setCartItemsList} = useCartItems()
  // const [families, setFamilies] = useState<FamiliesProps[]>([])

  async function getFamilyItems(selectedId: string, ref: number) {

    ref;
    try {
      await api.get(`/families/${selectedId}/items`)
       .then(function(response) {
         setItems(response.data)   
      })

    } catch (error) {
      console.log(error)
      alert('Erro ao carregar items')
    }
  };

  useEffect(() => {
   
    // api.get('/families').
    // then(function(response) {
    //   setFamilies(response.data)
    // })
    
    getFamilyItems(selectedId, selectedRef);
    api.get('/populars').
    then(function(response) {
      setPopulars(response.data)
    });
  }, [ selectedId]);


  function handleOpenItem({...props}: ItemCardProps) {
    navigation.navigate('product', {...props})
  };
 
  return (

    <SafeAreaView
    style={styles.container}
    >
      <View 
      style={styles.cartButtonShadow}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('cart')}
          style={styles.cartButton}
        >

          <Feather
            name='shopping-cart'
            color="black"
            size={24} 
          />

          <View 
           style={styles.badge}
          >
            <Text 
             style={styles.badgeNum}
            >
              {(cartItemsList.length)} 
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View 
       style={styles.searchButtonShadow}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('search')}
          style={styles.searchButton}>
          <Fontisto
            name="search"
            color="black"
            size={20} 
          />
        </TouchableOpacity>
      </View>

      <Image
        source={logoImg}
        style={styles.logo} 
      />


      <FlatList
        data={familiesIdentifiers}
        renderItem={({ item, index }) => (
          <View
            style={(selectedRef === index ? 
              styles.activeButtonShadow :
              styles.menuButtonShadow)}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {setSelectedRef(item.ref); 
              setSelectedId(item.id);}}
              key={selectedRef}
              style={(selectedRef === index ? 
                styles.activeButton :
                styles.menuButton)}
            >

              {(selectedRef === index ? 
                <ActiveMenuButton 
                 iconName={item.iconName} 
                 menuName={item.name} 
                /> :
                <Icon 
                 name={item.iconName} 
                 size={32} 
                 color='white'
                />)}

            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.menuContainer}
      />


      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <ItemCard
            activeOpacity={0.6}
            key={index}
            data={item}
            onPress={() => handleOpenItem(item)}
          />

       )}

        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        ListEmptyComponent={() => (
          <Text 
           style={styles.emptyText}
          >
            Selecione um menu acima
          </Text>
        )}
      />

      <Text 
       style={styles.popular}
      >
        Populares
      </Text>


      <FlatList

        data={populars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PopularCard
            data={item}
            onPress={() => handleOpenItem(item)}
            activeOpacity={0.6}
          />
        )}

        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentListTwo}
      />

    </SafeAreaView>
  );
}
