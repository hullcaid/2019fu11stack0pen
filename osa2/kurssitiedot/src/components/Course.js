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

const Course = ({course}) => {
	console.log(course)
	
	return(
		<div>
			<Header name={course.name}/>
			<Content parts={course.parts}/>
		</div>
	)
}

export default Course