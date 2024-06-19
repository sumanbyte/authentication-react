import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();
    const { setLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password }),
            credentials: "include"
        });

        const data = await response.json();
        if (data.message) {

            setLoggedIn(true);
        }
        navigate("/dashboard")

    }
    return (
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login