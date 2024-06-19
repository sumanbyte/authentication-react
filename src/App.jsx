import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Home from './components/Homepage/Home'
import AuthRouteProtect from "./RouteProtection/AuthRouteProtect"
import Dashboard from "./components/Dashboard/Dashboard"
import DashboardProtect from "./RouteProtection/DashboardProtect"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<AuthRouteProtect />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
        <Route element={<DashboardProtect />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
