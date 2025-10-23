import Button from '../components/button.jsx'
import Card from '../components/Card.jsx'
import StatCard from '../components/statCard.jsx'
import { Mail, RefreshCw, Plus, Calendar, Send, TrendingUp, Inbox } from 'lucide-react';
import { useNavigate } from "react-router-dom";



const Dashboard=()=> {
  const navigate=useNavigate();

  
  const handleClickCreate = () => {
   
    setTimeout(() => {
      navigate("/create ");
    }, 800);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold">MailScheduler</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </Button>
              <Button onClick={handleClickCreate} className="bg-blue-900 text-white hover:bg-blue-700 flex items-center gap-2">
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
            count="0"
            subtitle="Waiting to be sent"
          />
          <StatCard
            icon={<Send className="w-5 h-5" />}
            title="Sending"
            count="0"
            subtitle="Currently in progress"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Sent"
            count="0"
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
            <Button className="bg-blue-900 text-white hover:bg-blue-700 flex items-center gap-2">
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