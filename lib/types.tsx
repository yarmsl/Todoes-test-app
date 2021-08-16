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