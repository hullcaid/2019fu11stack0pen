import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
	<div>
		<button onClick={props.handleClick}>{props.text}</button>
	</div>
)

const Anecdote = ({text}) => (
	<div>{text}</div>
)

const Votes = ({amount}) => (
	<div>has {amount} votes</div>
) 

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const [points, setPoints] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))

	//const points = Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0)
	console.log(points)

	const random = () => {
		var min=0; 
    	var max=5;  
		var random =Math.floor(Math.random() * (+max - +min)) + +min;
		console.log(random) 
		setSelected(random)
	}
	
	const vote = (selected) => {
		console.log(selected)
		const copy ={ ...points}
		copy[selected] += 1
		setPoints(copy)
	}
	
	return (
	  <div>
		<Anecdote text={props.anecdotes[selected]} />
		<Votes amount={points[selected]} />
		<Button text='vote' handleClick={()=> vote(selected)} />
		<Button text='next anecdote' handleClick={() => random()} />
		
	  </div>
	)
  }
  
  const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
