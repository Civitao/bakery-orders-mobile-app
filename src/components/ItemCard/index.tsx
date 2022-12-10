import { Image  , TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './styles';


    export interface ItemCardProps {
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
      data: ItemCardProps;      
    }


  export function ItemCard({ data, ...rest}: Props) {
    
    return (

      <View style={styles.containerShadow}>
        <TouchableOpacity 
         key={data.id}   
         style={styles.container} 
         {...rest}
        >
          <Image
           style={styles.picture}
           source={{uri: data.pictureUrl}}
          />
          <View style={styles.footer}>    
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
              <TouchableOpacity 
               {...rest}  
               style={styles.orderContainer}
               activeOpacity={0.6}
              >
                <Text style={styles.order}>
                 Encomendar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };