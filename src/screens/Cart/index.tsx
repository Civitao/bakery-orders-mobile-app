import { AntDesign,FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, View, Text, FlatList, RefreshControl,Linking, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { CartItem } from '../../components/CartItem';
import { THEME } from '../../theme';
import { RemovedItemToCartModal } from '../../components/RemovedFromCartModal';
import { useCartItems } from '../../hooks/CartItemsHook';
import { api } from '../../services/api'; 
import { SentOrderModal } from '../../components/SentOrderModal';
import { DeleteItemModal } from '../../components/DeleteItemModal';



 export interface BadgeProps {
   itemCount: number;
 }

 export interface OrderProps {
    data: string;  
    id: number;
    items: any[];
    totalCost: number; 
 }

 export function Cart() {

    const navigation = useNavigation();
    const { cartItemsList, setCartItemsList } = useCartItems();
    const [askDelModalIsOpen, setAskDelModalIsOpen] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedId, setSelectedId] = useState(String);
    const [orderResponse, setOrderResponse] = useState<OrderProps | undefined>()
    const [activeRemovedModal, setActiveRemovedModal] = useState(false);
    const [sentOrderModal, setSentOrderModal] = useState(false);


    const calc = cartItemsList.reduce((accumulator, {price}) => {
      return accumulator + price;
    }, 0)
    
    const formatTotalValue = calc / 100;
    const totalValue = formatTotalValue.toFixed(2).replace('.', ',');


      function refreshList() {
          setRefreshing(true);
          setTimeout(() => {
          setRefreshing(false)
        },1000);
      }
    
      function catchSelectedId(unitId: string) {
        setSelectedId(unitId);
      }
    
      async function deleteCartItem(selectedId: string) {

        try {
          await api.delete(`cartItems/${selectedId}`)
            .then(() => refreshList())
            .then(() => setActiveRemovedModal(true))
        } catch (error) {
            alert('Erro ao deletar item.');
            console.log(error);
        }
      }
      
    
      async function postOrder() {
        
         const convertCartItems = cartItemsList.map(items => items); 
         const createDate = new Date();
         const orderDate = createDate.toLocaleString('pt-BR');

         const orderBody = {
            totalCost: calc,
            items: JSON.stringify(convertCartItems),
            date: JSON.stringify(orderDate)
        };
        
        if(cartItemsList.length === 0) return alert('Carrinho Vazio!');

        try {
          await api({
            method: 'post',
            url: '/orders',
            headers: { "Content-type" : "application/json" },
            data: JSON.stringify(orderBody)
           }).
          then(function(response) {
            setOrderResponse(response.data);
            refreshList();
          }).
          then(() => 
            setSentOrderModal(true));
        } catch (error) {
            alert('Erro ao enviar pedido.');
            console.log(error);
          };
      };


    function sendOrderDataToWhatsapp() {
      
      
      try {
        
        if(orderResponse === undefined) return;
         
          Linking.openURL('whatsapp://send?text=' 
           + 'Olá Tia Ni! pedi esses itens: \n'  
           + cartItemsList.map(item => (
          `\n${item.name} \n Sabor: ${item.flavor}\n Quantidade: ${item.quantity}\n Preço: R$${item.price / 100 + ',' + '00'}\n`)).join('') + `\n Pedido 000${orderResponse?.id} \n Total: R$${totalValue}` + '&phone=5511930078537'
          );
      } catch(error) {
          console.log(error);            
      } finally {
          setSentOrderModal(false);
          api.delete('/cartItems');

      };
    };
    

  return (

    <SafeAreaView style={styles.container}>
      <RemovedItemToCartModal 
       onPress={() => setActiveRemovedModal(false)} 
       isOpen={activeRemovedModal} 
      />
    
      <SentOrderModal 
       isOpen={sentOrderModal} 
       onPress={() => sendOrderDataToWhatsapp()} 
       orderId={orderResponse?.id} 
      />


      <View style={styles.header}>
        <TouchableOpacity
         onPress={() => navigation.goBack()}
         style={styles.goBackButton}
         activeOpacity={0.6}
        >
          <AntDesign 
           name="arrowleft" 
           size={32} 
           color="black" 
          />
        </TouchableOpacity>
        <Text style={styles.headerTittle}>
          Carrinho
        </Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('home')}
         style={styles.goHomeButton}
         activeOpacity={0.6}>

          <SimpleLineIcons
           name="home"
           color="black"
           size={22} 
          />

        </TouchableOpacity>
      </View>

      <View style={styles.cartItems}>

        <FlatList
         ListEmptyComponent={() => (
           <View style={styles.emptyComponent}>
             <Text style={styles.emptyText}>
               Não há delicias ainda.
             </Text>
             <TouchableOpacity
              style={styles.emptyPlusButton}
              activeOpacity={1}
              onPress={() => navigation.navigate('cart')}
             >
               <AntDesign
                name='pluscircleo'
                size={48}
                color={THEME.COLORS.MAIN_300}
                />
             </TouchableOpacity>
            </View>
          )}

         refreshControl={
           <RefreshControl
            refreshing={refreshing}
            onRefresh={() => refreshList()} 
           />
         }
         showsVerticalScrollIndicator={false}
         data={cartItemsList}
         contentContainerStyle={styles.cartItemsList} 
         renderItem={({item, index}) => (
           <>
             <CartItem
              key={index}
              onPress={() => {catchSelectedId(item.unitId); 
              setAskDelModalIsOpen(!askDelModalIsOpen);}}
              data={item}
              activeOpacity={0.6}
             />

             <DeleteItemModal isVisible={askDelModalIsOpen} 
              onPressCancel={() => setAskDelModalIsOpen(!askDelModalIsOpen)} 
              onPressDelete={() => {deleteCartItem(selectedId); 
              setAskDelModalIsOpen(!askDelModalIsOpen)}} 
             />
           </>
         )}
        />
      </View> 

      <View style={styles.cartFooterShadow}>
        <View style={styles.cartFooter}>
          <Text style={styles.cartFooterTotal}>
            Total R${(totalValue)}
          </Text>

          <TouchableOpacity
           onPress={() => postOrder()}
           style={styles.cartSubmitButton}
           activeOpacity={0.6}
          >
            <Text style={styles.cartSubmitButtonText}>
              Finalizar Pedido
            </Text>
            <FontAwesome5 
             name='smile-beam' 
             color='white' 
             size={24} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
} 
