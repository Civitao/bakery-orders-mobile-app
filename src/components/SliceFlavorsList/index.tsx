import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

export function SliceFlavorsList() {
  return (
    <Picker>
    <Picker.Item label='disco' value='disco' />
    <Picker.Item label='turn' value='turn' />
    <Picker.Item label='table' value='table' />
    </Picker>

  );
}