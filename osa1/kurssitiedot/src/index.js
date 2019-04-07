import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
	console.log("tulosta kurssin nimi")
	return (
		<h1>{props.name}</h1>
	)
}

const Content = (props) => {
	console.log("tulosta osat")
	return (
		<>
			<Part name={props.part1} exercises={props.exercises1} />
			<Part name={props.part2} exercises={props.exercises2} />
			<Part name={props.part3} exercises={props.exercises3} />
		</>
	)
}

const Total = (props) => {
	console.log("tulosta kokoniastehtävämäärä")
	return(
		<p>Yhreensä {props.exercises1 + props.exercises2 + props.exercises3}</p>
	)
}

const Part = (props) => {
	console.log("tulosta " + props.name)
	return (
		<p>
			{props.name} {props.exercises}
		</p>
	)
}

const App = () => {
	const course = 'Half Stack -sovelluskehitys'
	const part1 = {
		name: 'Reactin perusteet',
		exercises: 10
	}
	const part2 = {
		name: 'Tiedonvälitys propseilla',
		exercises: 7
	}
	const part3 = {
		name: 'Komponenttien tila',
		exercises: 14
	}
	return (
		<div>
			<Header name={course} />
			<Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
			<Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));

