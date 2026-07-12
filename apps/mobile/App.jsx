import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import { AuthProvider } from '@packages/shared/contexts/auth';
import { ErrorProvider } from '@packages/shared/contexts/error';
import { ToastProvider } from '@packages/shared/contexts/toast';
import Navigation from './router';

function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <ErrorProvider>
          <ToastProvider>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </ToastProvider>
        </ErrorProvider>
      </AuthProvider>
    </PaperProvider>
  );
}

export default App;
