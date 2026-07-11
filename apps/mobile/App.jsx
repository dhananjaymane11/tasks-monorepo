import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import { AuthProvider } from '@packages/shared/contexts/auth';
import Navigation from './router';

function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
    </PaperProvider>
  );
}

export default App;
