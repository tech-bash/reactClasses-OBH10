import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function handleLogin() {
        navigate("/home");
    }

    return (
        <div>
            <h1> Login </h1>
            <button onClick={handleLogin}>sign in</button>
        </div>
    )
}


export default Login;