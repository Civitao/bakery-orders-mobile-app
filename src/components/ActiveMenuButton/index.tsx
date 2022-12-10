
import {  Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './styles';

export interface ActiveMenuButtonProps {
  menuName: string;
  iconName: string
}

export function ActiveMenuButton({menuName, iconName, ...rest}: ActiveMenuButtonProps) {
  return (
    <View style={styles.containerShadow}>
      <View {...rest} style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon 
           name={iconName}  
           size={32} 
           color={'#F9A8D4'}
          /> 
        </View>
         <Text style={styles.menuName}>
          {menuName}
         </Text>
      </View>
    </View>
  );
};