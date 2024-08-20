import React from "react";
import Navigation from "../navbar/navbar";
import LogoutBar from "../logoutbar/logoutbar";
import { useEffect,useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Authcontext/AuthContext';
import axios from "axios";
import searchIcon from "../assets/Images/images/dashboard/Search.png";
import GreaterThan from "../assets/Images/images/dashboard/greaterthan.png";
import profileimg from "../assets/Images/images/profile/profileImage.png";
const myhistory = () => {
  const [userName, setUserName] = useState("");
  const [globalRank, setGlobalRank] = useState("");
  const [globalScore, setGlobalScore] = useState("");
  const [noOfQuizzes, setNoOfQuizzes] = useState("");
  const [noOfMinutes, setNoOfMinutes] = useState("");
  const [noOfAttempts, setNoOfAttempts] = useState("");
  const [simpleCount, setSimpleCount] = useState("");
  const [moderateCount, setModerateCount] = useState("");
  const [complexCount, setComplexCount] = useState("");
  const [passCount, setPassCount] = useState("");
  const [FailCount, setFailCount] = useState("");
  const [quizDetails, setQuizDetails] = useState([]);
  const [NoOfScore, setNoOfScore] = useState("");
  const [historyData, setHistoryData] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const navigate = useNavigate();
  const { isAuthenticated, authToken } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 25;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = quizDetails.slice(indexOfFirstRow, indexOfLastRow);
  
  const handleNext = () => {
    if (indexOfLastRow < quizDetails.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() =>{
    if(!isAuthenticated) {
      navigate('/login');
    }
    const fetchQuizData = async () =>{
      try{
        const response = await fetch(`https://dev.quizifai.com:8010/history_Page/`,{
          method: "POST",
          headers: {
            "content-Type" : "application/json",
            "Authorization" : `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            user_id:userId,
          }),
        });
        if(!response.ok){
          throw new Error("Failed to fetch history quiz data");
        }
        const result =await response.json();
        console.log("History data :",result);
        
        const data=result.data;
        setUserName(data.user_name || "");
      setNoOfQuizzes(data.total_no_of_quizzes);
      setNoOfAttempts(data.total_no_of_attempts);
      setGlobalRank(data.global_score_rank);
      setGlobalScore(data.global_score);
      setNoOfMinutes(data.total_duration);
      setSimpleCount(data.simple_count);
      setModerateCount(data.moderate_count);
      setComplexCount(data.complex_count);
      setPassCount(data.pass_count);
      setFailCount(data.fail_count);

      // Set quiz details if needed
      setQuizDetails(data.quiz_details);

      }catch(error){
        console.error("Error fetching history quiz data:",error);
        
      }
    };
    fetchQuizData();
  },[authToken,isAuthenticated, navigate,userId]);
  return (
    <>
    <div className="flex w-full">
   < Navigation/>
    <div className="w-full p-[10px] text-[14px] font-Poppins text-[#214082] font-bold">
      <div className="flex justify-center p-[5px] text-[24px]">
       <h1 className="text-[#F17530]">My History</h1>
      </div>
      
      <div className=" flex justify-between py-[20px] my-[10px]">
      <div className="flex flex-col gap-5">

<div className="flex gap-3">
  <img className="h-14 w-14" src={profileimg} alt="profile icon"/>
  <div className="mt-2">
<span className="text-[13px]">Welcome </span>
<span className="text-[13px]">{userName || ""}</span><br/>
<span className="text-[13px]">User id : </span>
<span className=" font-normal text-[12px]">{userId}</span>
</div>
</div>        

<div>
<span>Total no.of  Attempts : </span>
<span className=" font-normal">{noOfAttempts}</span>
</div>

<div className="-mt-4">
<span>Total no.of Quizzes </span>
<span className="pl-[14px]">: {noOfQuizzes}</span>
</div>

<div className="-mt-4">
<span>Total no.of min </span>
<span className="pl-[41px]">: {noOfMinutes}</span>
</div>

<div className="-mt-4">
<span>Total no.of score </span>
<span className="pl-[30px]">: {globalScore}</span>
</div>

      </div>
      <div>
  <div  className="flex flex-col gap-5 relative right-[300px]">
<div className="mt-20">
<span>Global Rank </span>
<span className="pl-1">: {globalRank}</span>
</div>

<div className="-mt-4">
<span>Global score </span>
<span className="pl-[2px]">: {globalScore}</span>
</div>
</div>

<div className="flex flex-col gap-5 -mt-[47px] mr-6">
<div className="flex">
<span>Complexity </span>
<span className=" font-normal"><p className="text-normal"><span className="pl-1 font-bold">:</span> Simple <span className="pl-[20px]">-{simpleCount}</span></p>
<p className="pl-3">Moderate -{moderateCount}</p>
<p className="pl-3">Complex <span className="pl-[6px]">-{complexCount}</span></p>
</span>
</div>
<div className="flex">
<span className="pl-5">Pass/Fail : </span>
<span className=" font-normal pl-1"><p> Pass-{passCount}</p>
<p className="">Fail-{FailCount}</p>

</span>
</div>
      </div>

      </div>
      </div>
      <div className=" flex  justify-between p-[5px] mb-3">
        <div>
        <h1 className="text-[#F17530]">Quizzes History : </h1>
        </div>
       
<div className="flex gap-[5px] justify-center items-center">
<input type="search" 
       className="p-1 border-2 border-black rounded-lg bg-[url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27currentColor%27%3e%3cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z%27 /%3e%3c/svg%3e')] bg-no-repeat bg-left-3 bg-center" 
       placeholder="search"/>

<span className="text-[#F17530]">Sort by : </span>
<span>
    <select name="" id="">
        <option value="latest">Latest</option>
        <option value="ThisMonth">ThisMonth</option>
        <option value="ThisWeek">ThisWeek</option>

    </select>
</span>
</div>
      </div>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-100 border border-gray-200 rounded-lg border-spacing-y-2">
        <thead className="bg-[#CBF2FB]">
          <tr className="text-[14px]">
            <th className="py-2 px-4 border-b">Seq</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Quiz Title</th>
            <th className="py-2 px-4 border-b">Duration</th>
            <th className="py-2 px-4 border-b">Rank</th>
            <th className="py-2 px-4 border-b text-nowrap">Pass %</th>
            <th className="py-2 px-4 border-b">Grade</th>
            <th className="py-2 px-4 border-b">Pass/Fail</th>
          </tr>
        </thead>
        <tbody className="space-y-4">
          {currentRows.map((quiz, index) => (
            <tr key={index} className="bg-white hover:bg-green-200 text-[12px]">
              <td className="py-2 px-4 border-b text-center">{indexOfFirstRow + index + 1}</td>
              <td className="py-2 px-2 border-b text-cente text-nowrap">{quiz.month}</td>
              <td className="py-2 px-4 border-b text-center text-nowrap">{quiz.time}</td>
              <td className="py-2 px-4 border-b text-center">{quiz.quiz_name}</td>
              <td className="py-2 px-4 border-b text-center">{quiz.attempt_duration_mins} min</td>
              <td className="py-2 px-4 border-b text-center">{quiz.score_rank}</td>
              <td className="py-2 px-4 border-b text-center">{quiz.attained_percentage}%</td>
              <td className="py-2 px-4 border-b text-center">{quiz.quiz_grade}</td>
              <td className="py-2 px-4 border-b text-center">{quiz.pass_flag}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
      <button
          className="flex gap-1 items-center"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <img className="h-3 w-3 rotate-180" src={GreaterThan} alt="Previous icon"/>
          <h1 className="-mt-[5px]">Previous</h1>
        </button>

      <button
          className="flex gap-1 items-center"
          onClick={handleNext}
          disabled={indexOfLastRow >= quizDetails.length}
        >
          <h1 className="-mt-[5px]">Next</h1>
          <img className="h-3 w-3" src={GreaterThan} alt="Next icon"/>
        </button>
      </div>
</div>
    </div>
    <LogoutBar/>
    </div>
    </>
  );
};

export default myhistory;