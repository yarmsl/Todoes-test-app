import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { Child } from '../../lib/types';

const styles = StyleSheet.create({
	wrapper: {
		width: '100%',
		height: '100%',
	}
});

const MainLayout = ({ children }: Child) => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.wrapper} forceInset={{bottom: 'never'}}>
					{children}
			</SafeAreaView>
		</SafeAreaProvider>

	);
};

export default MainLayout;