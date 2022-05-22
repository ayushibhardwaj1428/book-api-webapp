import React,{useEffect, useState} from 'react'
import "./Header.css"
import GetBooks from './BooksApi'
import Searchbooks from "../Searched-Container/Searchbooks"


function Header() {
	const [books , setBooks] = useState([]);
	const [search , setSearch] = useState('');
	const booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}`
	const allbookUrl = `https://www.googleapis.com/books/v1/volumes?q=comics&projection=full&key=AIzaSyDpN_xJFkm8MEXidlpq5hK7QV4piGts0D4`
	// useEffect(() => {GetBooks(allbookUrl);},[])
	GetBooks(allbookUrl)

	const handleSearch = (e:any) => {
		// console.log(e.target.value);
		setSearch(e.target.value)

	}

	const handleSubmit = (e:any) => {
		if(search===null||search===''){
			return;
		}
		e.preventDefault();
		GetBooks(booksUrl);
		// setBooks(data.items)

	}
	// setBooks()
	
	return (
		<React.Fragment>
			<header className='headerDiv'>All Books
			
				<input onChange={handleSearch}	className='search' type="text" placeholder='Search...'></input>
				<button onClick={handleSubmit} className='submitBtn'>Submit</button>
			</header>
			

		</React.Fragment>
	)
}

export default Header;