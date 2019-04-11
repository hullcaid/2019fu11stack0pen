import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

const App = () => {
	console.log('App toimii')
	const course = {
	  name: 'Half Stack -sovelluskehitys',
	  parts: [
		{
		  name: 'Reactin perusteet',
		  exercises: 10,
		  id: 1
		},
		{
		  name: 'Tiedonvälitys propseilla',
		  exercises: 7,
		  id: 2
		},
		{
		  name: 'Komponenttien tila',
		  exercises: 14,
		  id: 3
		},
		{
		  name: 'ploo',
		  exercises: 44,
		  id: 4
		}
	  ]
	}
  
	return (
	  <div>
		<Course course={course} />
	  </div>
	)
  }

ReactDOM.render(<App />, document.getElementById('root'));