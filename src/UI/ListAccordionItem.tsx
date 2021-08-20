import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';
import { AccordionItemProps } from '../../lib/types';
import DoneListItem from './DoneListItem';

const ListAccordionItem = ({ todos }: AccordionItemProps) => {

	const theme = useTheme();
	const [expanded, setExpanded] = useState(false);
	const styles = StyleSheet.create({
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
		<>
			{todos?.filter(item => item.checked === true).length > 0 && <List.Accordion
				left={() => <List.Icon icon={expanded ? 'chevron-up' : 'chevron-down'} />}
				right={() => null}
				title='Завершенные'
				expanded={expanded}
				onPress={() => setExpanded(p => !p)}
				style={[styles.listItem, styles.listTitleCenter]}
			>
				{todos.filter(item => item.checked === true).map(todoes => {
					return (
						<DoneListItem key={todoes.id} title={todoes.text} id={todoes.id} list_id={todoes.list_id} />
					)
				})}
			</List.Accordion>}
		</>
	);
};

export default ListAccordionItem;