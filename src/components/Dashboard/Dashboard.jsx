import { useEffect } from "react"
import { useState } from "react"

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const getProfileData = async () => {
    const response = await fetch("http://localhost:3000/api/user/getuser", {credentials: "include"});
    const data = await response.json();
    console.log(data)
    if(data.user){
      setUser(data.user)
    }
    
  }

  useEffect(()=> {
    getProfileData();
  }, [])
  return (
    <div>
        <h1>Your Profile</h1>
        {
          user ? <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div> : <div>Loading...</div>  
        }
    </div>
  )
}

export default Dashboard