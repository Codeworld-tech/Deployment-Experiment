import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect } from "react";

const Body = () => {
  const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
  const user = false
    async function fetchProfile(){
        try {
            if(user) return;
            
            const result = await axios.get('http://localhost:3000/user/getUser', {
                withCredentials: true,
            });
            console.log(result.data);
        } catch (error) {
            if(error.response && error.response.status === 401){
                navigate('/login');
            }
            console.error("Error fetching profile:", error);
        }
       
    }

    useEffect(() => {
      fetchProfile()
    }, [])
    
  return (
    <div>
      <Navbar />
      <div className="h-screen">

      <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Body;