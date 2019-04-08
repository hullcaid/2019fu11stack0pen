import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text})  => (
	 <div>
		 <h1>{text}</h1>
	 </div>
)


const Button =({ handleClick, text}) => (
		<button onClick={handleClick}>
			{text}
		</button>
)

const Stat = ({amount, text}) => (
	<p>{text} {amount}</p>
)


const App = () => {
	//tilojen määrittelyt
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	const goodLabel = 'hyvä'
	const neutralLabel = 'neutraali'
	const badLabel = 'huono'

	const handleGood = () => {
		setGood(good +1)
	}

	const handleNeutral = () => {
		setNeutral(neutral +1)
	}

	const handleBad = () => {
		setBad(bad +1)
	}

	return (
	  <div>
			<Header text='anna palautetta' />
			<Button handleClick={handleGood} text={goodLabel} />
			<Button handleClick={handleNeutral} text={neutralLabel} />
			<Button handleClick={handleBad} text={badLabel} />
			<Header text='statistiikka' />
			<Stat amount={good} text={goodLabel} />
			<Stat amount={neutral} text={neutralLabel} />
			<Stat amount={bad} text={badLabel} />
	  </div>
	)
  }

ReactDOM.render(<App />, document.getElementById('root'));


