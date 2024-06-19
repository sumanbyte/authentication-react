import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const DashboardProtect = () => {
    const {loggedIn, loading} = useAuth();

    if(loading){
        return <div>Loading...</div>
    }

    return (
        loggedIn ? <Outlet /> : <Navigate to={'/'} />
    )
}

export default DashboardProtect