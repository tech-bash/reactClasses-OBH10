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
