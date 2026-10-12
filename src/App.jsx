import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Simple from "./components/Simple";
import UserInfo from "./components/UserMenu";
import UserProvider  from "./components/UserContext";
import { useRef } from "react";


function App() {

  const inputRef = useRef(null);

  return (
    <>
    <input  ref={inputRef}  defaultValue="Hello I'm bhavy" />
    <button onClick={() => {
      inputRef.current.select()
    }}>Select Text</button>

    <button onClick={()=> {
      inputRef.current.value ="";
      inputRef.current.focus()

    }}>Clear Input</button>
    </>
  );
}

// UserContext is a parent component for creation of context, inside it the component
// which you are binding your context with should be the parent compnent of the child
// for which you want  your context to be used in

export default App;