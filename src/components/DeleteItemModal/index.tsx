import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export interface DeleteItemModalProps { 
  isVisible: boolean;
  onPressCancel: any;
  onPressDelete: any;
}

export function DeleteItemModal({...props}: DeleteItemModalProps) {
  return (
    <Modal 
    style={styles.delModalComponent}
    visible={props.isVisible}
    transparent={true}
    animationType='fade'
  >

   <View style={styles.delModalComponentDiv}>
     <Feather style={styles.delModalComponentIcon} 
       name='x-circle' 
       size={78} color='red'
     />

    <Text style={styles.delModalComponentText}>
      Deseja remover este item?
    </Text>

    <TouchableOpacity
       onPress={props.onPressCancel}
       style={styles.delModalComponentCancelButton}
       activeOpacity={0.6}
    >
        <Text style={styles.delModalComponentCancelButtonText}>
          Cancelar
        </Text>
    </TouchableOpacity>

      <TouchableOpacity
        onPress={props.onPressDelete}
        style={styles.delModalComponentRemoveButton}
        activeOpacity={0.6}
      >
        <Text style={styles.delModalComponentRemoveButtonText}>
          Remover
        </Text>
      </TouchableOpacity>

    </View>
  </Modal>         
  );
}