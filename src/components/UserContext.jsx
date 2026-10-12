import {useContext ,createContext, useState} from 'react';

const Usercontext = createContext(null);

export default function UserProvider({children}) {
    const [user, setUser] = useState({
        name: "Bhavy",
        age: "20",
        password: "Raghav"
    });

    const [age, setAge] = useState(20);

    // changing the state of the page
    function changeUser() {
        setUser("Raghav");
    }


    return (
        <Usercontext.Provider value={{user, changeUser}}> // passing state as value so state will be our context
           {children}
        </Usercontext.Provider>
    )
};

export function useUser() {
    const context = useContext(Usercontext);
    // useContext(user, changeUser)

    if(context === null) {
        throw new ERR("context not found");   
    }

    return context;
};

// 1.start using link inside the todo apps
// 2.we are listing todos right in the home page, create another page where todos will be visible, updated, 
// delelted or added
//3. create context for the todos, navbar -> settings -> listTodos and call it in the page you created 