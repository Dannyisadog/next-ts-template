import { ContextProperty } from 'providers/shared/constants';
import React, { createContext, FunctionComponent, useContext } from 'react';

import { ProviderProps } from './constants';

export const ExampleContext = createContext({ data: {} } as ContextProperty);

const ExampleProvider: FunctionComponent<{
  children: React.ReactNode;
  data: ContextProperty;
}> = ({ children, data }) => {
	return (
		<ExampleContext.Provider value={data}>{children}</ExampleContext.Provider>
	);
};

export const useExampleContext = () => {
	const context = useContext(ExampleContext);
	if (!context) {
		throw new Error('useExampleContext must be used within ExampleProvider');
	}
	return context;
};

export default ExampleProvider;
