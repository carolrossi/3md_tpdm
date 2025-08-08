import { styles } from './styles';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.area1}>
          <Text style={styles.title}>
            Taylor Swift
          </Text>
        </View>
        <View style={styles.area2}>
          <Text style={styles.title}>
            Olivia Rodrigo
          </Text>
        </View>
        <View style={styles.area3}>
          <Text style={styles.title}>
            Sabrina Carpenter
          </Text>
        </View>
    </View>
  );
}

