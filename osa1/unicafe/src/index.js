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

const Statistic =({text, value}) => {
	console.log(text, value)
	return(
	<div>{text} {value}</div>
	)
}

const Statistics = ({good, neutral, bad, total}) => {
	if (total === 0){
		return(
			<p>Ei yhtään palautetta annettu</p>
		)
	}
	return(
		<div>
			<Statistic value={good} text='hyvä' />
			<Statistic value={neutral} text='neutraali' />
			<Statistic value={bad} text='huono' />
			<Statistic value={total} text='yhteensä' />
			<Statistic value={(good-bad)/total}  text='keskiarvo' />
			<Statistic value={(good / total *100 + ' %')} text='positiivisia' />
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


	if (total ===0){
		return (
	  	<div>
				<Header text='anna palautetta' />
				<Button handleClick={handleGood} text={goodLabel} />
				<Button handleClick={handleNeutral} text={neutralLabel} />
				<Button handleClick={handleBad} text={badLabel} />
				<Header text='statistiikka' />
				<p>Ei yhtään palautetta annettu</p>
			</div>
		)
	} 
	return(<div>
		<Header text='anna palautetta' />
		<Button handleClick={handleGood} text={goodLabel} />
		<Button handleClick={handleNeutral} text={neutralLabel} />
		<Button handleClick={handleBad} text={badLabel} />
		<Header text='statistiikka' />
		<Statistics good={good} neutral={neutral} bad={bad} total={total}/>

	</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));


