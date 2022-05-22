import React from 'react';
import Header from "./Components/Home-Container/Header"
import Sliderbooks from './Components/Home-Container/Sliderbooks';
import Getbooks from "./Components/Home-Container/BooksApi"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Sliderbooks />
      {/* <Getbooks /> */}
    </div>
  );
}

export default App;
