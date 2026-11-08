import "./App.css";
import Header from "./components/Header";
import QuestionSelector from "./components/QuestionSelector";
import Question from "./components/Questions";
import Answers from "./components/Answers";
import Navigationbtns from "./components/Navigationbtns";
import Performance from "./components/Performance";
import useQuestions from "./hooks/useQuestions";
import { useState , useEffect } from "react";

function App() {
  const questions = useQuestions();
  
  const [currentIndex,setCurrentIndex] = useState(0);

  const [typedtext, setTypedtext] = useState("");

  const [reset , setReset] = useState(0)

  const currentQuestion = questions[currentIndex];

let mistakes = 0
 if(currentQuestion) { 
    for (let i = 0; i < typedtext.length; i++) {
    if(typedtext[i]!=currentQuestion.answer[i]){
      mistakes = mistakes+1
    }
  }
}

let accuracy = 100;

if(typedtext.length > 0 && currentQuestion){
  accuracy = (typedtext.length-mistakes)/(typedtext.length)*100;
}

const [startTime , setStartTime] = useState(null);

const typingTime = (text) => {
  if(startTime === null && text.length >0){
    setStartTime(Date.now())
  }
  setTypedtext(text)
}

let wpm = 0;

if (startTime !== null) {
  const timetaken = (Date.now() - startTime) / 60000;

  if (timetaken > 0) {
    wpm = Math.round((typedtext.length / 5) / timetaken);
  }
}


console.log("Typed Text:", typedtext);
console.log("Mistakes:", mistakes);

  const handlerestart = () =>{
    setTypedtext("");
    setStartTime(null);
    setReset((previous) => previous + 1 );
  };

const handleQuestionChange = (newindex) =>{
  setCurrentIndex(newindex);
  setTypedtext("");
  setStartTime(null);
  setReset((previous)=> previous + 1)
}


  const totalQuestions = questions.length;

  const [completedQuestions, setCompletedQuestions] = useState([]);
useEffect(() => {
  if (
    currentQuestion &&
    typedtext === currentQuestion.answer &&
    !completedQuestions.includes(currentQuestion.id)
  ) {
    setCompletedQuestions((prev) => [
      ...prev,
      currentQuestion.id,
    ]);
  }
}, [typedtext, currentQuestion]);


  return (
    <div className="app-container">
      <Header />
      <QuestionSelector 
      questions ={questions}
      currentIndex={currentIndex}
      onSelect = {handleQuestionChange}
      />
      {currentQuestion ? (
  <>
    <Question currentQuestion={currentQuestion} />

    <Answers
      key={`${currentQuestion.id}-${reset}`}
      setTypedtext={setTypedtext}
      typedtext={typedtext}
      ontyping = {typingTime}
      currentQuestion={currentQuestion}
      onNext={() => handleQuestionChange(currentIndex + 1)}
    />
  </>
) : (
  <p>Loading questions...</p>
)}
      <Navigationbtns
      currentIndex={currentIndex}
      onRestart = { handlerestart}
      setCurrentIndex={setCurrentIndex}
      totalQuestions = {totalQuestions}
      handleQuestionChange = {handleQuestionChange}/>
    
      <Performance 
      mistakes = {mistakes}
      accuracy = {accuracy}
      wpm = {wpm}
      completed = {completedQuestions.length}
      />
    </div>
  
  );
}

export default App;
