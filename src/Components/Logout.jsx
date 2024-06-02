import React from 'react'
import { useAuth } from '../content/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout = () =>{
        try{
               setAuthUser({
                ...authUser,
                user:null
               })
               localStorage.removeItem("Users");
               toast.success("Logout Successfully");
               //document.getElementById("my_model_3").close()
               setTimeout(() => {
            //document.getElementById("my_model_3").close()
            window.location.reload();
            localStorage.setItem("Users",JSON.stringify(res.data.user));
          },100);
        }
        catch(error)
        {
              toast.error("Error:"+error.message);
              setTimeout(()=>{},3000);
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Logout

