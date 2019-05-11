import React from 'react'
import NaviButton from './NaviButton'

//Listauselementti. Parametreillä voidaan määrittää piirretäänkö yksittäisille lista-objekteille navigointinappulat vai ei.
const Listing = ({item, showButton, handleButtonClick}) => {
    console.log('Listataan', item, 'Näytetäänkö nappula:', showButton)
	if (showButton) {
		return(
			<li>{item}  <NaviButton name={item} handleButtonClick={handleButtonClick}/></li>
		)
	}
	else {
		return(
			<li>{item}</li>
		)
	}  
} 

export default Listing