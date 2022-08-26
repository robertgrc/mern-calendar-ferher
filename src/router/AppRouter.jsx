import { Routes, Route } from "react-router-dom"
import { CalendarPage } from "../calendar";
import { LoginPage } from "../auth";
import { Navigate } from "react-router-dom";
import { getEnvVariables } from "../helpers";



export const AppRouter = () => {

const authStatus = 'authenticated';

// console.log(getEnvVariables());

  return (
    <div>
        <Routes>
            { 
             ( authStatus === 'not-authenticated')
                ? <Route path="/auth/*" element={<LoginPage />} />
                : <Route path="/*" element={<CalendarPage />} />
            }

            <Route path="/*" element={<Navigate to="/auth/login"/>}/>
        </Routes>
    </div>
  )
}
