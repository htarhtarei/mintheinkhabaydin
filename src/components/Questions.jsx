
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { questions } from "../data/data";
import { setQuestions } from "../store/questionSlice";

const Questions = () => {
  const data = questions
  const dispatch = useDispatch(); 

    //to store question data in question slice
    useEffect(() => {
      dispatch(setQuestions(data));  
     },[data])
  
    return (
      <div className="pt-12 px-4 sm:px-8 md:px-20 lg:px-28" >
        <ul>
          {data.map((item, index) => (
            <Link to={`pick/number/${item.questionNo}`} key={index}>
              <li className="flex pb-4 hover:text-amber-900 md:text-lg">
                <span className="pe-2">{item.questionNo}.</span>
                <p className="">{item.questionName}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
}

export default Questions
