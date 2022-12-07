import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, Image, View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import logoImg from '../../../assets/logo-delicias-da-tia-ni-big.png'
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';


interface Props extends TouchableOpacityProps {
  orderId?: number;
  isOpen: boolean;
 
}

export function SentOrderModal({isOpen, orderId, ...rest}: Props) {
  return (
    <>
          <Modal style={styles.sentOrderModalComponent}
    visible={isOpen}
    transparent={true}
    animationType='fade'
    >
      <View  style={styles.sentOrderModalComponentDiv}>
      <Ionicons style={styles.sentOrderModalComponentIcon} 
      name='checkmark-circle-outline'  
      size={88} 
      color='green'/>

      <Image
        source={logoImg}
        style={styles.sentOrderLogo} />

      <Text style={styles.sentOrderModalComponentText}>
        Pedido Finalizado!
      </Text>
     
        <Text style={styles.sentOrderId}>
          Pedido#000{orderId}
        </Text>
     
      <TouchableOpacity  {...rest} style={styles.sentOrderModalComponentSendButton}>
        <Text style={styles.sentOrderModalComponentSendButtonText}>
          Enviar
        </Text>
        <FontAwesome name='whatsapp' 
          size={24} 
          color='white'
       /> 

      </TouchableOpacity>
      </View>
    </Modal>
    </>
  );
}