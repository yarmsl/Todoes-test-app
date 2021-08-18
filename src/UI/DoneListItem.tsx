import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';

const DoneListItem = () => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);

	const styles = StyleSheet.create({
		listItem: {
			height: 50,
			maxHeight: 50,
			backgroundColor: theme.colors.background,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		},
		doneTitle: {
			textDecorationLine: 'line-through',
			color: theme.colors.placeholder
		}
	});

	return (
		<List.Item
			left={() => <List.Icon icon='check' color={'green'} />}
			title='задача 12312'
			titleStyle={styles.doneTitle}
			style={styles.listItem}
		/>
	);
};

export default DoneListItem;