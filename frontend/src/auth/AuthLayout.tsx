import { useAuthState } from "./useAuthState";
import { auth } from "./firebase";


import React, { useEffect} from "react";
import { useNavigate } from "react-router";


//no idea what type children has to have to work
type RequireAuthLayoutProps = {
    children: any;
  };

export default function RequireAuthLayout({ children }: RequireAuthLayoutProps) {
  const [user, loading, error] = useAuthState(auth, {});
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/signup"); 
    }
  }, [loading, user, navigate]);

  if (loading) {
    return null; // Render nothing during loading
  }

  if (error) {
    //todo: implement error strategy
    console.error("Authentication Error:", error);
    return null; 
  }

  // Provide `user` to children as a prop
  return React.cloneElement(children, { user });
}
