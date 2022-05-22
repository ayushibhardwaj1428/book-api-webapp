import React, { Component, useEffect, useState } from 'react'
import Axios from 'axios'
import './Header.css'
import { JsxElement } from 'typescript';
import Sliderbooks from './Sliderbooks'
interface Bookdetails {
    title: string;
    picture: { thumbnail: string };
}

export default function Searchcomponent() {
    const [books, setBooks] = useState<Bookdetails[]>([]);
    const [search, setSearch] = useState('');
    const booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}`
    let elem: JSX.Element[] = [];
    // const comicbookUrl = `https://www.googleapis.com/books/v1/volumes?q=comics&projection=full&key=AIzaSyDpN_xJFkm8MEXidlpq5hK7QV4piGts0D4`
    const handleSearch = (e: any) => {
        // console.log(e.target.value);
        setSearch(e.target.value)

    }
    function GetBooks(props: any) {

        Axios.get(props).then(
            (response) => {

                var data = response.data.items
                console.log(data);
                setBooks(data);
                // console.log(books);


            });

    }
    // console.log(books);

    const handleSubmit = (e: any) => {
        if (search === null || search === '') {
            return;
        }
        e.preventDefault();
        GetBooks(booksUrl);


    }

    // for (let r of books) {
    //     let bookTitle = ''
    //     bookTitle = r.title
    //     let bookImg = r.picture.thumbnail
    //     elem.push(
    //         <Sliderbooks 
    //         title={bookTitle} 
    //         bookImg={bookImg} />
    //     );
    // }
        return (
            <div className='searchcomponent'>
                <input onChange={handleSearch} className='search' type="text" placeholder='Search...'></input>
                <button onClick={handleSubmit} className='submitBtn'>Submit</button>

            </div>
        );
    
}   
