
import "./LessonCard.css"

const LessonCard = (props) => {
   const{image, name, hour} = props;

  return (
    <div className="card">
       <img src={image}  alt="carding"/>
       <div className="lesson">
        <p className="lessName">Lesson Name : <span>{name}</span></p>
        <p className="lessName">lesson Hour : <span>{hour}</span></p>
       </div>


      
    </div>
  )
}

export default LessonCard
