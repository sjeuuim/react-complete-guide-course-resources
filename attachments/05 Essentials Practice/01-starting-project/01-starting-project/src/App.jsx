import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1;

  function changeHandler(inputIndentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue /* +추가함으로서 문자열 값을 숫자 값으로 변환할 것을 강제 */
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={changeHandler} />
      {inputIsValid ? <Results input={userInput} /> : <p className="center">Please enter a duration greater than zero.</p>}
    </>
  )
}

export default App
