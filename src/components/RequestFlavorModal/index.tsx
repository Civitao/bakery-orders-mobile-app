import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';




interface Props extends TouchableOpacityProps {
  isOpen: boolean;
 
}


export function RequestFlavorModal({isOpen, ...rest}: Props) {
  return (
    <Modal  style={styles.requestFlavorModalComponent}
    visible={isOpen}
    transparent={true}
    animationType='fade'
    >
      
      <View  style={styles.requestFlavorModalComponentDiv}>
      <AntDesign style={styles.requestFlavorModalComponentIcon} name='exclamation'  size={62} color='red'/>
      <Text style={styles.requestFlavorModalComponentText}>Selecione um sabor</Text>
      
      <TouchableOpacity  {...rest} style={styles.requestFlavorModalComponentOkButton}>
        <Text style={styles.requestFlavorModalComponentOkButtonText} >Ok</Text>
      </TouchableOpacity>

 

      </View>
     
    </Modal>
  );
}