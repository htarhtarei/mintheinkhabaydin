import { useState } from "react";
import SearchList from "./SearchList";

const SearchBar = ({ question }) => {
  const [input, setInput] = useState("");
  const [ searchQuestion , setSearchQuestion ] = useState([])

  const filterInput = (value) => {
    const filterQuestion = question.filter((que) => que.questionName.toLowerCase().includes(value.toLowerCase()));
    setSearchQuestion(filterQuestion)
  }
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" rounded-t-lg flex justify-between items-center bg-white w-[380px] sm:w-[410px] md:w-[500px]">
        <input
          className="py-2 px-4 bg-transparent w-full border-none outline-none"
          type="text"
          placeholder="သိလိုသော မေးခွန်းကိုရှာဖွေပါ"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            filterInput(e.target.value);
          }}
        />
        <i className="ri-search-line text-lg bg-amber-900 text-white px-5 py-3 rounded-e-lg"></i>
      </div>
      {searchQuestion.length > 0 && input.length > 0 && <SearchList searchQuestion={searchQuestion} />}
    </div>
  );
};

export default SearchBar
