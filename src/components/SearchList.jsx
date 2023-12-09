import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const SearchList = ({ searchQuestion }) => {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);
    
  
  useEffect(() => {
      const onScroll = () => {
          setVisible(window.scrollY > scroll)
          setScroll(window.scrollY)
      }
    window.addEventListener("scroll", onScroll);
    
    return () => window.removeEventListener("scroll", onScroll); 
  }, []);

  return (
    <div className={`${ visible ? "hidden" : ""} relative`}>
      <ul
        className={`bg-white absolute top-1 -left-[15.5rem] w-[380px] max-h-[280px] z-40 overflow-y-scroll sm:w-[410px] md:w-[500px] pt-2  border-t-2 rounded-b-lg`}
      >
        {searchQuestion.map((que, index) => (
          <Link key={index} to={`pick/number/${que.questionNo}`}>
            <li className="py-2 px-3 text-[.7rem] text-left">
              {que.questionName}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SearchList
