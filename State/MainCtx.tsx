import React, { ReactElement, useContext, useState, createContext } from 'react';
import { Child, MainCTX } from '../lib/types';
const mainCTX = createContext({} as MainCTX);

export const useMainCtx = (): MainCTX => useContext(mainCTX);

const MainContext = ({ children }: Child): ReactElement => {
	const [openBottomSheet, setOpenBottomSheet] = useState(false);
	

	return (
		<mainCTX.Provider value={{ openBottomSheet, setOpenBottomSheet }}>
			{children}
		</mainCTX.Provider>
	);
};

export default MainContext;