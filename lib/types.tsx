import React, {Dispatch, ReactElement, SetStateAction} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

export interface Child  {
	children: ReactElement;
}

export type RootStackParamList = {
	Todoes: undefined;
	AddTodo: undefined;
}

export interface MainCTX {
	openBottomSheet: boolean;
	setOpenBottomSheet: Dispatch<SetStateAction<boolean>>;
}

export type TodoesScreenProp = StackNavigationProp<RootStackParamList, 'Todoes'>;

export interface Action {
	type: string;
	title: string;
	id: number;
}

export interface todo {
	checked: boolean;
	created_at: string;
	id: number;
	list_id: number;
	text: string;
	updated_at: string;
}

export interface todoList {
	candidate_id: number;
	created_at: string;
	id: number;
	title: string;
	todos: todo[];
}

export interface ListItemBottom {
	title: string;
	id: number;
}