import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View, Text, Image } from 'react-native';


import { styles } from './styles';

export interface SearchItemProps {
  id: string,
  name: string,
  pictureUrl: string;
  about: string;
  quantity: number;
  flavor: string;
  iprice: string;
  price: number;
  unitId: string;
  description: string;
  familyId: string;
  cost: number;
  flavors: string;
}

interface Props extends TouchableOpacityProps {
data: SearchItemProps;

}



export function SearchItem({data, ...rest}: Props) {

 

  return (

    <View style={styles.containerShadow}>

    <View style={styles.mainContainer}>
      <Image style={styles.image} source={{ uri: data.pictureUrl}} />
      <View style={styles.detailsContainer}>
        <Text style={styles.itemName}> {data.name}   </Text>
        <Text style={styles.itemFlavor}> {data.about}   </Text>

        <Text style={styles.itemPrice}> R${data.iprice}   </Text>

        <TouchableOpacity {...rest} 
        style={styles.orderButton}
        activeOpacity={0.6}
        >
          <Text style={styles.orderButtonText }>
            Encomendar
          </Text>
        </TouchableOpacity>

      </View>
    </View>
    
    </View>
  );
}