import { useContext } from "react"
import Usercontext from "./UserContext"

function Testing() {

    const userName = useContext(Usercontext)
    return (
        <h1>Testing with  {userName}</h1>
    )
}

export default Testing;

// Testing with bhavy