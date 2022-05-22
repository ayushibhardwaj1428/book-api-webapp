import React , {useState} from 'react'
import Axios from "axios"
import Header from './Header';

function GetBooks (props:any){
    // const [searchBook , setSearchbook] = useState([]);
    Axios.get(props).then(
       (response) => {
            // console.log(response);
            var data = response.data.items
            console.log(data);
            // setSearchbook(props.data.body.items)

        });
        
}

export default GetBooks;