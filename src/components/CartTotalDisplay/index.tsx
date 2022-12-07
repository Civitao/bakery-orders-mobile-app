
import {  Text } from 'react-native';
import { CartItemProps } from '../CartItem';
import { styles } from './styles';


interface Props extends CartItemProps {
  data: CartItemProps;
}

export function CartTotalDisplay({data, ...rest}: Props) {
  return (
    <Text style={styles.container}  {...rest}>{data.price}</Text>
  );
}