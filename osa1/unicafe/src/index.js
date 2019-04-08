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

	const average = () => {
		if(total > 0){
			return (
				(good - bad)/ total
			)
		} else {
			return (0)
		}
	}

	const positives = () =>{
		if (total > 0){
			const pos = (good / total)*100
			return (
				pos+ ' %'
			)
		} else {
			return (0+ ' %')
		}
	}

	return (
	  <div>
			<Header text='anna palautetta' />
			<Button handleClick={handleGood} text={goodLabel} />
			<Button handleClick={handleNeutral} text={neutralLabel} />
			<Button handleClick={handleBad} text={badLabel} />
			<Header text='statistiikka' />
			<Statistic value={good} text={goodLabel} />
			<Statistic value={neutral} text={neutralLabel} />
			<Statistic value={bad} text={badLabel} />
			<Statistic value={total} text={totalLabel} />
			<Statistic value={average()}  text={averageLabel} />
			<Statistic value={positives()} text={positiveLabel} />
	  </div>
	)
  }

ReactDOM.render(<App />, document.getElementById('root'));


