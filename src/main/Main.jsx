import "../main/Main.css"
import {data} from "../helper/data"
import LessonCard from "../lessonCard/LessonCard"

const Main = () => {
  return (
    <div className='main'>

{data.map((a) => (
     <LessonCard {...a}/>
))} 

     
    </div>
  )
}

export default Main
