import { useState, useEffect } from 'react'




const GetUserData = () => {
    const [userData, setUserData] = useState([]);
    const [error,setError]=useState(null)
    
    useEffect(() => {
        async function getUsers() {
            try {
                const data = await fetch('https://reqres.in/api/users?page=2')
                const json = await data.json()
                setUserData(json.data)
            }
            catch (err) {
                setError(err)           }
            
        }
        getUsers()
    },[])
    return { userData, error }
}



export default GetUserData