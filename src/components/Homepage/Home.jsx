import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

const Home = () => {
    const {setLoggedIn} = useAuth();
    const handleLogout = async () => {
        const response = await fetch("http://localhost:3000/api/auth/logout", {credentials: "include"});
        const data = await response.json();
        if(data.message){
            setLoggedIn(false);
        }
    }

    return (
        <div>
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
            <br />
            <Link to={'/signup'}>
                <button>
                    Signup
                </button>
            </Link>
            <Link to={'/dashboard'}>
                <button>
                    Dashboard
                </button>
            </Link>
            <Link onClick={handleLogout}>
                <button>
                    Logout
                </button>
            </Link>
        </div>
    )
}

export default Home