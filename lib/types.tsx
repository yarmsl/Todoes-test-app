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
	todoTitle: string;
	setTodoTitle: Dispatch<SetStateAction<string>>;
	todoChecked: number;
	setTodoChecked: Dispatch<SetStateAction<number>>;
	editTodo: number;
	setEditTodo: Dispatch<SetStateAction<number>>;
	initListId: number;
	setInitListId: Dispatch<SetStateAction<number>>;
	editTodoError: boolean;
	setEditTodoError: Dispatch<SetStateAction<boolean>>;
}

export type TodoesScreenProp = StackNavigationProp<RootStackParamList, 'Todoes'>;

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

export interface Action {
	type: string;
	title?: string;
	id?: number;
	list_id?: number;
	data?: Promise<todoList[]>;
	fetchTodoes?: (dispatch: any) => Promise<void>;
	todoesList: Promise<todoList>;
	todo: Promise<todo>;
}

export interface ListItemProps {
	title: string;
	id: number;
	list_id?: number;
}

export interface AccordionItemProps {
	todos: todo[];
}
export interface AddTodoListitemProps {
	title: string,
	list_id: number
}