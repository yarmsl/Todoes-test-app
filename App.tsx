import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import Screens from './Screens';
import MainContext from './state/MainCtx';

const theme = {
	...DefaultTheme,
	dark: false,
	colors: {
		...DefaultTheme.colors,
		background: '#fff'
	}
}

const Main = () => {
	return (
		//  <StoreProvider store={store}>
		<MainContext>
			<PaperProvider theme={theme}>
				<Screens />
			</PaperProvider>
		</MainContext>

		//  </StoreProvider>
	);
}

export default Main