import React,{useEffect, useState} from 'react'
import "./Header.css"
import Searchcomponent from './Searchcomponent'




function Header() {
	
	return (
		<React.Fragment>
			<header className='headerDiv'>All Books
			<Searchcomponent />
			</header>
		</React.Fragment>
			
	)
}
			
				
			


export default Header;