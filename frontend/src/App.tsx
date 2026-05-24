import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./pages/ProtectedRoute"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import { useAuth } from "./context/AuthContext"
import { Navigate } from "react-router-dom"

function App() {
  const { user } = useAuth();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={user ? <Navigate to="/dashboard"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/dashboard"/> : <Register/>}/>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
