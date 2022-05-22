import './style.css';
interface cardProps {
    title: string;
    bookImg: string;
  }

export default function ImageContainer({title,bookImg}:cardProps){
    return(<div className="container">
      <img src={bookImg}/>
      <p>{title}</p>
    </div>)
}