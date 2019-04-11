import React from 'react'

const Header = ({name}) => 
	{
		console.log('Otsikko printattu')
		return <h1>{name}</h1>;
	}

const Content = (props) =>{
	console.log('Contentille passataan:',props)
	return(
		<div>
			{props.parts.map(part => <Part key={part.id} part={part}/>)}
		</div>
	)
}

const Part = (props) => {
	console.log('printattava osa:', props)
	return (<p>{props.part.name} {props.part.exercises}</p>)
}

const Total =({ parts }) => {
	console.log('Laskuriin tuleva:', parts)
	const exercises = parts.map(part => part.exercises)
	console.log('harjoitusmäärät:', exercises)
	const sum = exercises.reduce((accumulator, currentValue) => {
		console.log('akkumulaattori:', accumulator, 'nykyinen arvo:',currentValue)
		return (accumulator+currentValue)
	})
	return(
		<div>yhteensä {sum} tehtävää</div>
	)
}

const Course = ({course}) => {
	console.log(course)
	
	return(
		<div>
			<Header name={course.name}/>
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
		</div>
	)
}

export default Course