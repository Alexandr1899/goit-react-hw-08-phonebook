import { current } from "../Redux/Auth/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Contacts } from "./Contacts";
import { LogIn } from "./LogIn/login";
import { Layout } from "./pages/Layout";
import { PrivateRoute } from "./RouteTypes/PrivateRoute";
import { PublicRoute } from "./RouteTypes/PublicRoute";
import { SignUp } from "./SignUp/signUp";



export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
  }, [dispatch])
  
  return (
    <div style={{marginLeft: `20px`}}>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={
              <PublicRoute restricted><LogIn /></PublicRoute>} />
            <Route path="sign_up" element={
              <PublicRoute restricted><SignUp /></PublicRoute>} />
            <Route path="contacts" element={
              <PrivateRoute><Contacts /></PrivateRoute>} />
          </Route>
      </Routes>
    </div>
  );
};