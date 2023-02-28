import { useContext, useState } from 'react';
import { InputContext } from '../App';

const Header = () => {
	const [value, setValue] = useState('');
	const { inputValue, setInputValue } = useContext(InputContext);

	const handleInputChange = (e) => setValue(e.target.value);

	const handleSubmit = () => {
		setInputValue(value);
		setValue('');
	};

	const handleInputKeyDown = (e) => {
		if (e.key === 'Enter') {
			setInputValue(value);
			setValue('');
		}
	};

	return (
		<>
			<input
				type="search"
				placeholder="Search... "
				onChange={handleInputChange}
				onKeyDown={handleInputKeyDown}
				value={value}
			/>
			<button onClick={handleSubmit}>Search</button>

			{inputValue && (
				<h3>
					Results for: <span>{inputValue}</span>
				</h3>
			)}
		</>
	);
};

export default Header;
