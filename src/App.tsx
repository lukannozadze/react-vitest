import { useState } from "react";
import ButtonsContainer from "./components/ButtonsContainer";
import EnableButton from "./components/EnableButton";

function App() {
  const [isDisabled,setIsDisabled] = useState(false);
  return (
    <>
    <ButtonsContainer isDisabled={isDisabled}/>
     <EnableButton isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
    </>
  )
}

export default App
