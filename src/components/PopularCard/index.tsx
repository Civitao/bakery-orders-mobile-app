import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Image, View, Text } from 'react-native';

import { styles } from './styles';

export interface PopularCardProps {
  id: string;
  name: string;
  pictureUrl: string;
  description: string;
  iprice: string;
  about: string; 
  quantity: number;
  familyId: string;
  cost: number;
  flavors: string;
}

interface Props extends TouchableOpacityProps {
  data: PopularCardProps;
}

export function PopularCard({data, ...rest}: Props) {
  return (
    <View style={styles.containerShadow}>
    <TouchableOpacity style={styles.container}
    {...rest}>
      <Image style={styles.picture}
      source={{ uri: data.pictureUrl }}
      />

<View 
       style={styles.footer}>    
      <Text
      
      style={styles.itemName}>
        {data.name}
      </Text>

      <Text style={styles.about}>
        {data.about}
      </Text>

      <Text style={styles.iprice}>
          R${data.iprice}

      </Text>

      <View style={styles.orderComponent}>
      <TouchableOpacity {...rest} 
      style={styles.orderContainer}
      activeOpacity={0.6}
      >
      <Text  style={styles.order}>
        Encomendar
      </Text>
    </TouchableOpacity>
    </View>

      </View>

    </TouchableOpacity>
    </View>
    );
}