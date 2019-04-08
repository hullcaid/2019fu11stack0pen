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

const Sum = ({amount, text}) => (
	<div>{text} {amount}</div>
)

const Average = ({good, bad, total, text}) => {
	let average = 0
	if (total >0) {
		average = (good-bad)/total
	}
	return (
	<div>
		{text} {average}
	</div>
	)
}

const Positive = ({good, total, text}) => {
	let positives = 0
	if(total > 0) {
		positives = (good / total) *100
	}
	return(
		<div>
			{text} {positives} %
		</div>
	)
}

const App = () => {
	//tilojen määrittelyt
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)
	//labelit napeille ja statistiikoille	
	const goodLabel = 'hyvä'
	const neutralLabel = 'neutraali'
	const badLabel = 'huono'
	const totalLabel = 'yhteensä'
	const averageLabel = 'keskiarvo'
	const positiveLabel = 'positiivisia'

	const handleGood = () => {
		setGood(good + 1)
		setTotal(total + 1)
	}

	const handleNeutral = () => {
		setNeutral(neutral + 1)
		setTotal(total + 1)
	}

	const handleBad = () => {
		setBad(bad + 1)
		setTotal(total + 1)
	}

	return (
	  <div>
			<Header text='anna palautetta' />
			<Button handleClick={handleGood} text={goodLabel} />
			<Button handleClick={handleNeutral} text={neutralLabel} />
			<Button handleClick={handleBad} text={badLabel} />
			<Header text='statistiikka' />
			<Sum amount={good} text={goodLabel} />
			<Sum amount={neutral} text={neutralLabel} />
			<Sum amount={bad} text={badLabel} />
			<Sum amount={total} text={totalLabel} />
			<Average good={good} bad={bad} total={total} text={averageLabel} />
			<Positive good={good} total={total} text={positiveLabel} />
	  </div>
	)
  }

ReactDOM.render(<App />, document.getElementById('root'));


