import React from 'react';

import Navigation from './app/components/Navigation';
import { ThrowContextProvider } from './app/components/ThrowContextProvider';

export default function App() {
	return (
		<ThrowContextProvider >
			<Navigation/>
		</ThrowContextProvider>
	);
}
