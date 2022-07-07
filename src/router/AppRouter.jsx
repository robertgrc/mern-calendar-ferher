import { Routes, Route } from "react-router-dom"
import { CalendarPage } from "../calendar";
import { LoginPage } from "../auth";
import { Navigate } from "react-router-dom";



export const AppRouter = () => {

const authStatus = 'not-authenticated';

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
