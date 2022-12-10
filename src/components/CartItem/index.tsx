import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View, Text, Image } from 'react-native';
import { styles } from './styles';


   export interface CartItemProps {
     id: string,
     name: string,
     pictureUrl: string;
     quantity: number;
     flavor: string;
     iprice: string;
     price: number;
     unitId: string;
   }

   interface Props extends TouchableOpacityProps {
     data: CartItemProps;
   }


 export function CartItem({data, ...rest}: Props) {

   const priceFormat = data.price / 100;

   return (

      <View style={styles.containerShadow}>
        <TouchableOpacity 
        {...rest} 
        activeOpacity={0.6}
        style={styles.mainContainer}
        >
          <Image 
           style={styles.image} 
           source={{ uri: data.pictureUrl}} 
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.itemName}>
              {data.name}
            </Text>
            <Text style={styles.itemQuantity}>
              Quantidade:{data.quantity}
            </Text>
            <Text style={styles.itemFlavor}>
              {data.flavor}
            </Text>

            <Text style={styles.itemPrice}>
              R${priceFormat.toFixed(2).replace('.',',')}
            </Text>

            <TouchableOpacity 
             {...rest} 
             style={styles.removeButton}
             activeOpacity={0.6}
            >
              <Text style={styles.removeButtonText}>
                Remover
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
   );
 }