import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

    interface Props extends TouchableOpacityProps {
      isOpen: boolean;
    }


    export function AddedItemToCartModal({isOpen, ...rest}: Props) {
      return (
        <Modal  
        style={styles.addModalComponent}
        visible={isOpen}
        transparent={true}
        animationType='fade'
        >
          <View style={styles.addModalComponentDiv}>
            <Ionicons 
            style={styles.addModalComponentIcon} 
            name='checkmark-circle-outline'  
            size={88} 
            color='green'
            />
            <Text style={styles.addModalComponentText}>
            Item adicionado com sucesso!
            </Text>
            <TouchableOpacity 
            {...rest} 
            style={styles.addModalComponentOkButton}
            >
              <Text 
              style={styles.addModalComponentOkButtonText}>
              Ok
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      );
    };