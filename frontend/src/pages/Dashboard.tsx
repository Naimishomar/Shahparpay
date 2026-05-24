import { useAuth } from "../context/AuthContext";

const Dashboard = ()=>{
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-black text-white pt-20 flex justify-center items-center">
            <h1 className="text-6xl">Welcome, {user?.email}</h1>
        </div>
    )
}

export default Dashboard;