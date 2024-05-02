import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate ,useParams ,Link } from "react-router-dom";
import { numberList } from "../data/data";
import { setSelectedQuestion } from "../store/questionSlice";

const PickNumberPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  //to get numberlist data from api
  const data = numberList

  //to get questions data from store
  const { questions: ques } = useSelector((state) => state.question);

  const randomNum = Math.floor((Math.random() * 9) + 1)
 
  //to get selected question name
  const selectedQuestion = ques.find((q) => q.questionNo == id);
  const selectedName = selectedQuestion.questionName

  useEffect(() => {
    dispatch(setSelectedQuestion(selectedQuestion.questionNo))
  },[])
  
  return (
    <div className="flex justify-center px-4 pb-8">
      <div className="">
        <h1 className="md:text-lg text-center pb-6">{selectedName}</h1>

        <div className="flex justify-center pt-8">
          <ul className="grid grid-cols-9 gap-1 md:w-[400px]">
            {data.map((item, index) => (
              <Link key={index} to={`/answer/${randomNum}`}>
                <li className="bg-amber-900 text-white px-2 py-2 text-[.8rem] rounded-md text-center">
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="bg-amber-900 text-white px-4 py-3 mt-12 rounded-xl float-right"
        >
          နောက်သို့
        </button>
      </div>
    </div>
  );
}

export default PickNumberPage
