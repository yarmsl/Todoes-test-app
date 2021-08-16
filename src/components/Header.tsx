import React, { ReactElement } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TodoesScreenProp } from '../../lib/types';
import { useMainCtx } from '../../state/MainCtx';

const Header = (): ReactElement => {

	const nav = useNavigation<TodoesScreenProp>();
	const {setOpenBottomSheet} = useMainCtx();
	return (
		<Appbar.Header style={styles.root}>
			<Appbar.BackAction
				style={nav.canGoBack() ? undefined : styles.back}
				disabled={!nav.canGoBack()}
				onPress={() => nav.goBack()}
			/>
			<Appbar.Content title={nav.canGoBack() ? undefined : 'Задачи'} />
			{nav.canGoBack() ? 
			<Appbar.Action icon='check' onPress={() => console.log('done')} />
			:
			<Appbar.Action icon='shape-outline' onPress={() => setOpenBottomSheet(true)} />}
		</Appbar.Header>
	);
};

const styles = StyleSheet.create({
	root: {
		elevation: 0,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0,
		shadowRadius: 0,
	},
	back: {
		opacity: 0
	}
})

export default Header;