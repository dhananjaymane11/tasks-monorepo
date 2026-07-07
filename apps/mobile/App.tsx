import {StyleSheet, View, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { getWelcomeMessage } from '@packages/shared';

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>{getWelcomeMessage('mobile')}</Text>
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
