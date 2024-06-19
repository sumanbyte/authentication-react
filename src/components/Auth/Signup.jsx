import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/api/auth/signup", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        navigate("/login");
        console.log(name, email, password)
    }
    return (
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <br />
                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                <button>Signup</button>

            </form>
        </div>
    )
}

export default Signup