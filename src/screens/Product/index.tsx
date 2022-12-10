import { useRoute, useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity , Image, FlatList, Modal } from 'react-native'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import { ProductParams } from '../../@types/navigation'
import { FlavorsLabel, FlavorsLabelProps} from '../../components/FlavorsLabel';
import { AddedItemToCartModal } from '../../components/AddedItemToCartModal';
import { RequestFlavorModal } from '../../components/RequestFlavorModal';
import { api } from '../../services/api';



export function Product() {

  const route = useRoute();
  const product = route.params as ProductParams;
  const navigation = useNavigation();
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [selectedFlavor ,setSelectedFlavor] = useState('Selecione um sabor');
  const [flavors, setFlavors] = useState<FlavorsLabelProps[]>([])
  const [itemQuantity, setItemQuantity] = useState(1);  
  const [activeAddedItemModal, setActiveAddedItemModal] = useState(false);
  const [requestFlavor, setRequestFlavor] = useState(false);
  


      function addItemToCart () {

        const postBody = {
      
          name: product.name,
          pictureUrl: product.pictureUrl,
          flavor: selectedFlavor,
          price: product.cost,
          quantity: itemQuantity,
      
        }

        if(selectedFlavor === 'Selecione um sabor') {
          setRequestFlavor(true)
        }
        else {
          api({
            method: 'post',
            url: '/cartItems',
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify(postBody)
          }).then(() => setActiveAddedItemModal(true)  

          )  
        }
      }
        

        useEffect(() => {
          api.get(`/items/${product.id}/flavors`).
          then(function(response) {
            setFlavors(response.data)
          })
        },[])

      
      function handleDropdownOpen () {
        setDropdownOpened(true)
        if(dropdownOpened === true) {
          return
        }
      }

      function handleSelectedFlavor ( name: string) {
        setSelectedFlavor(name);
        
      }

      function plusItemQuantity () {
        setItemQuantity(itemQuantity + 1);
      }

      function minusItemQuantity () {
        if(itemQuantity <= 1) {
          itemQuantity;
        } else {
          setItemQuantity(itemQuantity - 1);
        }
      };

    
      function handleGoBack() {
        navigation.goBack();
      };

    return (

    <SafeAreaView 
     style={styles.container}
    >

      <RequestFlavorModal 
       onPress={() => setRequestFlavor(false)} 
       isOpen={requestFlavor} 
       activeOpacity={0.6}
      />


      <AddedItemToCartModal 
       onPress={() => {setActiveAddedItemModal(!activeAddedItemModal); 
       navigation.goBack()}}
       isOpen={activeAddedItemModal}
       activeOpacity={0.6}
     />

      <TouchableOpacity 
       style={styles.goBack} 
       onPress={handleGoBack}
       activeOpacity={0.6}
     >
      <Entypo 
       name="chevron-thin-left" 
       color="white" 
       size={24}
      />
     </TouchableOpacity>

      <Image 
       source={{ uri: product.pictureUrl}} 
       style={styles.productImage}
      />

      <View style={styles.mainContainer}>
        <Text style={styles.productName}>
          {product.name}
        </Text> 

        <View 
        style={styles.flavorsNQuantity}>

          <View style={styles.flavorsContainer}>
            <Text style={styles.flavorsNQuantityText}>
              Sabores
            </Text>

            <View style={styles.dropdownContainerShadow}>
             <TouchableOpacity 
              activeOpacity={0.6}  
              onPress={() => handleDropdownOpen()} 
              style={styles.dropdownContainer}>

              <Text style={styles.dropdownText}>
                {selectedFlavor}
              </Text> 
              <Entypo style={styles.dropdownArrow}
               name="chevron-thin-down" 
               size={10}
               color="black"
              /> 
            </TouchableOpacity>
            </View>

            <View style={styles.openedModal}>
             <Modal  
              focusable={true}
              animationType='fade'
              visible={dropdownOpened}
              transparent={true}
              onRequestClose={() => setDropdownOpened(false)}
             >
              <TouchableOpacity 
               onPress={() => setDropdownOpened(false)}  
               style={styles.dropdownListCancelTouch}
              >

               <FlatList 
                contentContainerStyle={styles.dropdownList}
                data={flavors}
                renderItem={({item, index}) => (
                 <FlavorsLabel
                  data={item}
                  onPress={() => {handleSelectedFlavor(item.name); 
                  setDropdownOpened(false);}} 
                 />
             )}
           />

        </TouchableOpacity>
      </Modal>
      </View>
        


        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.flavorsNQuantityText}>
            Quantidade
          </Text>

          <View style={styles.quantityComponent}> 

          <View style={styles.quantityMinusShadow}>
           <TouchableOpacity 
            onPress={() => minusItemQuantity()} 
            style={styles.quantityMinus}>

            <AntDesign 
             name='minus'
             color='black' 
             size={18}
            />
          </TouchableOpacity>
          </View>

          <Text style={styles.quantityInt}>
            {itemQuantity}
          </Text>
          
          <View style={styles.quantityPlusShadow}>
           <TouchableOpacity 
            onPress={() => plusItemQuantity()} 
            style={styles.quantityPlus}
            activeOpacity={0.6}
           >

            <AntDesign 
             name='plus'
             color='black' 
             size={18}
            />
          </TouchableOpacity>
          </View>
          </View>
        </View>

        </View>

        <Text style={styles.productDescription}> 
         {(product.description.length > 0 ? 
           product.description : 
           'Descrição não disponível.'
         )}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.productPrice}>  
            R${product.iprice} 
          </Text>
        <View style={styles.addItemButtonShadow}>
          <TouchableOpacity 
           onPress={() => {addItemToCart()}} 
           style={styles.addItemButton}
           activeOpacity={0.6}>
            <Text style={styles.addItemButtonText}>
              Adicionar
            </Text>
            <Feather 
             name='shopping-cart' 
             color="white" 
             size={18} 
            />        
          </TouchableOpacity>
          
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}