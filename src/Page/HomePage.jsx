import { useSelector } from "react-redux"
import Questions from "../components/Questions"
import SearchBar from "../components/SearchBar"
import ScrollUpButton from "../utils/ScrollUpButton";

const HomePage = () => {
  const { questions: ques } = useSelector((state) => state.question);

  return (
    <div className="">
      <SearchBar question={ques} />
      <Questions />
      
      <ScrollUpButton/>
    </div>
  )
}

export default HomePage
