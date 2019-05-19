import React from 'react'

const RemoveButton = ({person, removeName}) =>{
	console.log('button', person);
	return(
		<button type="button" onClick={()=>removeName({person})}>poista</button>
	)
}

export default RemoveButton