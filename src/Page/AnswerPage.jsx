import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AnswerPage = ({answers}) => {
  const navigate = useNavigate();
  const { number } = useParams();

  const { selectQuestionNo: num } = useSelector((state) => state.question);

  const previewResult = answers.filter((answer) => answer.questionNo === num);
  const finalResult = previewResult.filter(
    (result) => result.answerNo == number
  );
  const result = finalResult[0].answerResult

  return (
    <div className="px-4">
      <h1 className="md:text-lg text-center pb-8">{result }</h1>

      <div className="px-8 flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-amber-900 me-8 text-white px-4 py-3 mt-12 rounded-xl "
        >
          နောက်သို့
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-amber-900 text-white px-4 py-3 mt-12 rounded-xl "
        >
          နောက်တခုထပ် မေးရန်
        </button>
      </div>
    </div>
  );
}

export default AnswerPage
