import { useContext } from "react";
import Usercontext from "./UserContext";
import { useUser } from "./UserContext";

import Testing from "./Testing";

function UserInfo() {
    const {user, changeUser} = useUser();
    //  context = custom hook, useContext(user, changeUser)
    return (
        <>
        <h1>Username {user.name}</h1>
        <h2>Age is {user.age}</h2>
        <h3> password i {user.password}</h3>
        <button onClick={changeUser} >Change the name</button>
        </>
    )
}

export default UserInfo;

// you need a create button, and you'll be calling changeUser() from UserProvider,