import Header from './components/Header';
import { useState, createContext } from 'react';
import ResultList from './components/ResultList';

// Create Context
export const InputContext = createContext();

function App() {
	const [inputValue, setInputValue] = useState('');

	const value = {
		inputValue,
		setInputValue,
	};

	return (
		<InputContext.Provider value={value}>
			<div className="app">
				<Header />
				<ResultList />
			</div>
		</InputContext.Provider>
	);
}

export default App;
