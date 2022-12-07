import { TouchableOpacity, TouchableOpacityProps ,Text } from 'react-native';

import { styles } from './styles';


 export interface OrderButtonProps {
  style: string;
 }

 
export function OrderButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text  style={styles.order}>
        Encomendar
      </Text>
    </TouchableOpacity>
  );
}