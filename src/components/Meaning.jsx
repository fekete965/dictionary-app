import { useEffect } from 'react';

const Meaning = (props) => {
	return (
		<div>
			{/* 

			{props.meaning.map((item) =>
				item.meanings.map((means) => (
					<div key={means.partOfSpeech}>{means.partOfSpeech}</div>
				))
			)} */}

			{props.meaning.map((item) =>
				item.meanings.map((means) =>
					means.definitions.map((def) => (
						<li key={def.definition}>{def.definition}</li>
					))
				)
			)}

			{props.meaning.map((item) => {
				console.log(item);
			})}
		</div>
	);
};

export default Meaning;
