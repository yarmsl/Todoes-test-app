import React, { ReactElement, useContext, useState, createContext } from 'react';
import { Child, MainCTX } from '../lib/types';
const mainCTX = createContext({} as MainCTX);

export const useMainCtx = (): MainCTX => useContext(mainCTX);

const MainContext = ({ children }: Child): ReactElement => {
	const [openBottomSheet, setOpenBottomSheet] = useState(false);
	const [todoTitle, setTodoTitle] = useState('');
	const [todoChecked, setTodoChecked] = useState(0);
	const [editTodo, setEditTodo] = useState(0);
	const [initListId, setInitListId] = useState(0);
	const [editTodoError, setEditTodoError] = useState(false);

	return (
		<mainCTX.Provider
			value={{
				openBottomSheet,
				setOpenBottomSheet,
				todoTitle,
				setTodoTitle,
				todoChecked,
				setTodoChecked,
				editTodo,
				setEditTodo,
				initListId, 
				setInitListId,
				editTodoError, 
				setEditTodoError
			}}
		>
			{children}
		</mainCTX.Provider>
	);
};

export default MainContext;