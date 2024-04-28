import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Start from "./pages/Start";
import Question from "./pages/Question";
import Score from "./pages/Score";
import Review from "./pages/Review";
import User from "./pages/User";
import axios from "axios";
import QuestionNew from "./pages/QuestionNew";
import AddQuestion from "./pages/AddQuestion";

function App() {
  const [display, setDisplay] = useState("user");
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState({});
  const [answare, setAnsware] = useState({});
  const [user, setUser] = useState({});
  const [questions, setQuestion] = useState([]);
  const [cheating, setCheating] = useState(0);

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    try {
      const data = await fetch("http://127.0.0.1:8000/test/6");
      const result = await data.json();

      const covertQuestion = result.Questions.map((item) => ({
        id: item.id,
        question: item.question,
        options: {
          A: item.option_a,
          B: item.option_b,
          C: item.option_c,
          D: item.option_d,
        },
        answer: item.answer,
      }));

      setQuestion(covertQuestion);
    } catch (error) {
      console.log({ error });
    }
  }

  const handleReset = () => {
    setIndex(0);
    setAnsware({});
    setScore({});
    setUser({});
    setDisplay("start");
  };

  return (
    <div className="h-screen flex flex-col">
      {display !== "user" && display !== "new" && display !== "add" && (
        <Header display={display} />
      )}
      <div className="w-full bg-charcoal flex-1">
        {display === "add" && <AddQuestion />}
        {display === "user" && (
          <User setUser={setUser} setDisplay={setDisplay} user={user} />
        )}
        {display === "start" && <Start setDisplay={setDisplay} />}
        {display === "review" && (
          <Review
            answare={answare}
            questions={questions}
            index={index}
            setDisplay={setDisplay}
            setIndex={setIndex}
          />
        )}
        {display === "score" && (
          <Score
            user={user}
            score={score}
            setIndex={setIndex}
            setDisplay={setDisplay}
          />
        )}
        {display === "question" && (
          <Question
            setDisplay={setDisplay}
            answare={answare}
            setAnsware={setAnsware}
            index={index}
            setIndex={setIndex}
            setScore={setScore}
            score={score}
            questions={questions}
            cheating={cheating}
            setCheating={setCheating}
          />
        )}
        {/* Feature start */}
        {display === "new" && (
          <QuestionNew
            setIndex={setIndex}
            setCheating={setCheating}
            answare={answare}
            questions={questions}
            setAnsware={setAnsware}
            setScore={setScore}
            setDisplay={setDisplay}
            cheating={cheating}

          />
        )}
        {/* Feature end */}
      </div>

      {display !== "user" && display !== "new" && display !== "add" && (

      
        <Footer
          setAnsware={setAnsware}
          setIndex={setIndex}
          setScore={setScore}
          handleReset={handleReset}
          setDisplay={setDisplay}
          setUser={setUser}
          setCheating={setCheating}
        />
      )}

      {/* create question */}
    </div>
  );
}

export default App;
