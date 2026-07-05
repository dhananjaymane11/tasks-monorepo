import {StyleSheet, View, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>text text text</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
