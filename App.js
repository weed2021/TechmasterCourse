import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 500 }}>HELLO <Text style={{ color: 'red' }}>WORD</Text></Text>
      <Text style={{ fontWeight: 500, marginTop: '10px' }}>HELLO{' '}
        <Text style={{ textDecorationLine: 'underline', fontStyle: 'italic', color: 'blue' }}>
          WORD
        </Text>
      </Text>
      <Text style={{ fontWeight: 500, marginTop: '10px' }}>HELLO{' '}
        <Text style={{ backgroundColor: 'black', color: 'white' }}>
          WORD
        </Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
