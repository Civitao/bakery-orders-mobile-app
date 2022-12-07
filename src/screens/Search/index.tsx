import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { styles } from './styles';
import { Fontisto } from '@expo/vector-icons';
import { SearchItem, SearchItemProps } from '../../components/SearchItem';

export function Search() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState<SearchItemProps[]>([]);  
  
  
  


    useEffect(() => {
    fetch('http://192.168.0.197:5555/items/')
    .then(Response => Response.json())
    .then(data => setItemsList(data))
  }, [search])

  function handleOpenItem({id, name, iprice, description, familyId, pictureUrl, quantity, about, cost, flavors}: SearchItemProps) {
    
    navigation.navigate('product', {id, name, iprice, familyId, description, pictureUrl, quantity, about, cost, flavors})
  };


  return (
    <SafeAreaView style={styles.container}>
  <View style={styles.header}>
         <TouchableOpacity 
         onPress={() => navigation.goBack()} 
         style={styles.goBackButton}
         activeOpacity={0.6}
         >
      <AntDesign name="arrowleft" size={32} color="black"/>
      </TouchableOpacity>
      <Text style={styles.headerTittle}>Procurar</Text>
      <TouchableOpacity
       onPress={() => navigation.navigate('home')} 
       style={styles.goHomeButton}
       activeOpacity={0.6}
       >
      <SimpleLineIcons   
      name="home" 
      color="black" 
      size={22} />

     </TouchableOpacity>
  </View>

<View style={styles.searchContainerShadow}>
 <View style={styles.searchContainer}>
  <TextInput 
   style={styles.searchInput}  
   placeholder='Encontre sua delícia aqui' 
   onChangeText={(text: string) => setSearch(text)}
   />  
    <Fontisto 
   name="search" 
   color="black" 
   size={22}/>  
  </View>
  </View>

    <View style={styles.searchResults}>
      
    <FlatList
    showsVerticalScrollIndicator={false} 
    data={(itemsList.filter(item => item.name.toLowerCase().includes(search)))}
    renderItem={({item, index}) => (
      <SearchItem
        data={item}
        key={index}
        onPress={() => handleOpenItem(item)}
      />
  )}
    ListEmptyComponent={() => <View style={styles.searchContainer}></View> }
    contentContainerStyle={styles.searchContainerFlat}
    />
    {/* {itemsList.map((item, index) => ([
      <View key={index}>
        <Text> {item.name} </Text>
        <Text> {item.about} </Text>
       
        
      </View>
    ]))} */}

    </View>

  </SafeAreaView>



  );
}