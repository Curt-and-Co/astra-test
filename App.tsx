import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/api';
import Root from './src/navigation';

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Root />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
