import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Simple from "./components/Simple";
import UserInfo from "./components/UserMenu";
import UserProvider  from "./components/UserContext";


function App() {
  // props drilling 

  // context => makes the resource shared so that all the components or files can access them, 
  return (
    <>
    <UserProvider> // creating this context 
    <Navbar />
    {/* any component inside the UserContext can access the username */}
    </UserProvider>

    </>
  );
}

// UserContext is a parent component for creation of context, inside it the component
// which you are binding your context with should be the parent compnent of the child
// for which you want  your context to be used in

export default App;