import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';
import DoneListItem from './DoneListItem';
import SwipableListItem from './SwipableListItem';

const CategoryItem = () => {
	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);
	const styles = StyleSheet.create({
		root: {
			width: '100%',
		},
		title: {
			textTransform: 'uppercase',
			marginLeft: 10
		},
		listItem: {
			height: 50,
			maxHeight: 50,
			backgroundColor: theme.colors.background,
		},
		listTitleCenter: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		},
	});

	return (
		<List.Section style={styles.root}>
			<List.Subheader style={styles.title}>заголовок</List.Subheader>
			<SwipableListItem/>
			<SwipableListItem/>
			<SwipableListItem/>
			<List.Accordion
				left={() => <List.Icon icon={expanded ? 'chevron-up' : 'chevron-down'} />}
				right={() => null}
				title='Завершенные'
				expanded={expanded}
				onPress={() => setExpanded(p => !p)}
				style={[styles.listItem, styles.listTitleCenter]}
				
			>
				<DoneListItem/>
				<DoneListItem/>
				<DoneListItem/>
				<DoneListItem/>
			</List.Accordion>
		</List.Section >
	);
};

export default CategoryItem;