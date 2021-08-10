import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import Screens from './Screens';
import obj from './State/state.json';

console.log(obj)
const Main = () => {
  return (
   //  <StoreProvider store={store}>
      <PaperProvider>
        <Screens />
      </PaperProvider>
   //  </StoreProvider>
  );
}

export default Main