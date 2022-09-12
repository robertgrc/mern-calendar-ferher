import { Routes, Route } from "react-router-dom"
import { CalendarPage } from "../calendar";
import { LoginPage } from "../auth";
import { Navigate } from "react-router-dom";
import { getEnvVariables } from "../helpers";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";



export const AppRouter = () => {


  const {status, checkAuthToken} =  useAuthStore();

  //const authStatus = 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, [])
  


  if ( status === 'checking'){
    return(
      <h3>Cargando...</h3>
    )
  }

  return (
    <div>
        <Routes>
            { 
             ( status === 'not-authenticated')
                ? (
                  <>
                    <Route path="/auth/*" element={<LoginPage />} />
                    <Route path="/*" element={<Navigate to="/auth/login"/>}/>
                  </>
                )
                : (
                  <>
                    <Route path="/" element={<CalendarPage />} />
                    <Route path="/*" element={<Navigate to="/"/>}/>
                  </>
                )
            }

        </Routes>
    </div>
  )
}
