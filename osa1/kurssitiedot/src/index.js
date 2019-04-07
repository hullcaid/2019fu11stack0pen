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
			<Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
			<Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
			<Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
		</>
	)
}

const Total = (props) => {
	console.log("tulosta kokoniastehtävämäärä")
	return(
		<p>Yhreensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
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
	const course = {
		name: 'Half Stack -sovelluskehitys',
		parts: [
			{
				name: 'Reactin perusteet',
				exercises: 10
			},
			{
				name: 'Tiedonvälitys propseilla',
				exercises: 7
			},
			{
			name: 'Komponenttien tila',
			exercises: 14
			}
		]
	}
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	)
}


ReactDOM.render(<App />, document.getElementById('root'));

