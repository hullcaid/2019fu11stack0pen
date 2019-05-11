import React from 'react'

//Navigointinappulaelementti
const NaviButton = ({name, handleButtonClick}) => {
    console.log('Piirretään napula', name, 'funktio:', handleButtonClick)
    return(
      <button onClick={() =>handleButtonClick({name})}>show</button>
    )
}

export default NaviButton