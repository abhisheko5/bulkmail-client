import Button from '../components/button.jsx'
import Card from '../components/Card.jsx'
import StatCard from '../components/statCard.jsx'
import { Mail, RefreshCw, Plus, Calendar, Send, TrendingUp, Inbox } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import {useEffect,useState} from 'react';
import axios from 'axios'



const Dashboard=()=> {
  const navigate=useNavigate();
  const [waitingJobs,setWaitingJobs]=useState(0);
  const [activeJobs,setActiveJobs]=useState(0);
  const [completedJobs,setCompletedJobs]=useState(0);
  let count=0;

  
  const handleClickCreate = () => {
   
    setTimeout(() => {
      navigate("/create ");
    }, 800);
  };

 
  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/job/get-jobs");
        const counts = res.data.counts;

        setWaitingJobs(counts.waiting);
        setActiveJobs(counts.active);
        setCompletedJobs(counts.completed);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    getJobs();

    // Optional: refresh every 10 seconds to stay updated
    const interval = setInterval(getJobs, 10000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
             <div className="flex items-center gap-2.5">
    <svg className="w-10 h-10" viewBox="0 0 170 150" xmlns="http://www.w3.org/2000/svg">
      <circle cx="85" cy="75" r="75" fill="#1e3a8a"/>
      <text x="60" y="105" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#ffffff">S</text>
      <circle cx="105" cy="75" r="10" fill="#60a5fa"/>
    </svg>
    <h1 className="text-2xl font-semibold">Mailvio</h1>
  </div>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
              <Button onClick={handleClickCreate} className="bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Email Campaigns</h2>
          <p className="text-gray-600">Manage and monitor your scheduled email campaigns</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Calendar className="w-5 h-5" />}
            title="Scheduled"
            count={waitingJobs || "0"}
            subtitle="Waiting to be sent"
          />
          <StatCard
            icon={<Send className="w-5 h-5" />}
            title="Sending"
            count={activeJobs ||"0"}
            subtitle="Currently in progress"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Sent"
            count={count+completedJobs || "0"}
            subtitle="Successfully delivered"
          />
        </div>

        {/* All Campaigns Section */}
        <div className="bg-white border border-gray-400 rounded-xl p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">All Campaigns</h3>
            <p className="text-gray-600">View and manage your email campaigns</p>
          </div>
          
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Inbox className="w-12 h-12 text-gray-400" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-700">No campaigns yet</h4>
            <p className="text-gray-500 mb-6">Create your first email campaign to get started</p>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Campaign
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Dashboard;