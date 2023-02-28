import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { InputContext } from '../App';
import Meaning from './Meaning';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const ResultList = () => {
	const { inputValue } = useContext(InputContext);
	const [response, setResponse] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const fetchData = async (param) => {
		try {
			setLoading(true);
			const res = await axios(`/${param}`);
			setResponse(res.data);
			setError(null);
		} catch {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (inputValue.length) {
			fetchData(inputValue);
		}
	}, [inputValue]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h3>Nothing doing buddy!</h3>;
	}

	return (
		<div className="container">
			{response && (
				<>
					<h1>Meaning</h1>
					<Meaning meaning={response} />
					<h2>Synonyms</h2>
				</>
			)}
		</div>
	);
};

export default ResultList;


