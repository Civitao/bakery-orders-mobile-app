import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';




interface Props extends TouchableOpacityProps {
  isOpen: boolean;
 
}


export function RemovedItemToCartModal({isOpen, ...rest}: Props) {
  return (
    <Modal  style={styles.removedModalComponent}
    visible={isOpen}
    transparent={true}
    animationType='fade'
    >
      
      <View  style={styles.removedModalComponentDiv}>
      <Ionicons style={styles.removedModalComponentIcon} name='checkmark-circle-outline'  size={88} color='green'/>
      <Text style={styles.removedModalComponentText}>Item removido com sucesso!</Text>
      
      <TouchableOpacity  {...rest} style={styles.removedModalComponentOkButton}>
        <Text style={styles.removedModalComponentOkButtonText} >Ok</Text>
      </TouchableOpacity>

 

      </View>
     
    </Modal>
  );
}