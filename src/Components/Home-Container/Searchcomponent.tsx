import React, { Component, Fragment, useEffect, useState } from "react";
import Axios from "axios";
import "./Header.css";
import { JsxElement } from "typescript";
import Sliderbooks from "./Sliderbooks";
import ImageContainer from "../image-container";
import Slider from "react-slick";
interface Bookdetails {
  volumeInfo: {
    title: string;
    imageLinks: { thumbnail: string};
  };
}

export default function Searchcomponent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [bookData, setBookData] = useState<Bookdetails[]>([]);
  const booksUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  let elem: JSX.Element[] = [];
 
  //   let bookData: any = [];
  // const comicbookUrl = `https://www.googleapis.com/books/v1/volumes?q=comics&projection=full&key=AIzaSyDpN_xJFkm8MEXidlpq5hK7QV4piGts0D4`
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
     
  };

  function GetBooks(props: any) {
    Axios.get(props).then((response) => {
      setBookData(response.data.items);
    });
  }
  if (bookData.length > 0) {
    for (let i = 0; i < bookData.length; i++) {
      console.log(bookData[i].volumeInfo.title);

      let bookTitle: string = bookData[i].volumeInfo.title;
      let bookImg: string = bookData[i].volumeInfo.imageLinks?.thumbnail?bookData[i].volumeInfo.imageLinks.thumbnail:"";

      elem.push(<ImageContainer title={bookTitle} bookImg={bookImg} />);
      console.log(bookData);
    }
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setCategory(search);
    GetBooks(booksUrl);
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
 
  return (
    <Fragment>
        
      <div className="searchcomponent">
        <input
          onChange={handleSearch}
          className="search"
          type="text"
          placeholder="Search..."
        ></input>
        <button onClick={handleSubmit} className="submitBtn">
          Submit
        </button>
       
      </div>
      <div className="midBlock">
      <h1 className="category">{category}</h1>
          <div className="searchResult"> {elem}</div>
          </div>
       
    </Fragment>
  );
}
