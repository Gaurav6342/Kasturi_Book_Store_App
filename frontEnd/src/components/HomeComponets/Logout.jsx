import React from 'react'
import { useAuth } from '../CoureseComponents/AuthUserOfContext'
import toast from 'react-hot-toast'

function Logout() {
    const[authUser,setAuthUser] = useAuth()
    const handleLogOut = () => {
       try {
        setAuthUser({
             ...authUser,
             user:null,
        });

        localStorage.removeItem("Users");
        toast.success("Logout Succefully");

        setTimeout(() => {
          window.location.reload(); // reload page automatocally
        }, 3000);
       } catch (error) {
        
         toast.error("Error: " + error);
         setTimeout(() => {}, 2000);
       }
    };
  return (
    <div>
        <button 
        className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
        onClick={handleLogOut}
        >
            Logout
        </button>
    </div>
  );
}

export default Logout