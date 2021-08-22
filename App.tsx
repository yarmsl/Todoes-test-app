import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import Screens from './Screens';
import { fetchTodoes } from './state/actions';
import MainContext from './state/MainCtx';
import store from './state/store';

const theme = {
	...DefaultTheme,
	dark: false,
	colors: {
		...DefaultTheme.colors,
		background: '#fff',
		primary: '#fff',
		accent: '#2196f3'
	}
}

const Main = () => {
	store.dispatch<any>(fetchTodoes);
	return (
		<StoreProvider store={store}>
			<MainContext>
				<PaperProvider theme={theme}>
					<Screens />
				</PaperProvider>
			</MainContext>
		</StoreProvider>
	);
}

export default Main