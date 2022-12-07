import React from 'react';
import { View, TouchableOpacity,TouchableOpacityProps, Text, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';

export interface FlavorsLabelProps {
  id: string;
  name: string;
  available: boolean;
}
  

interface Props extends TouchableOpacityProps {
  data: FlavorsLabelProps;
} 
console.log()
export function FlavorsLabel({data, ...rest}: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.dropdownTouchable}>
    <Text style={styles.flavorName}> {data.name}</Text> 
   </TouchableOpacity>
    
    
  );
}