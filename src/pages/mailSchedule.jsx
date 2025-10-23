import { Mail, ArrowLeft, Upload, Eye, Calendar } from 'lucide-react';
import Button from '../components/button.jsx'
import { useNavigate } from "react-router-dom";

export default function CreateCampaign() {
  const navigate=useNavigate();

  const handleClickDashboard = () => {
   
    setTimeout(() => {
      navigate("/dashboard ");
    }, 200);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={handleClickDashboard} className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold">Create Campaign</h1>
            </div>
            <div className="w-40"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Upload Recipients Section */}
        <div className="bg-white border border-gray-400 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <Upload className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Upload Recipients</h2>
              <p className="text-gray-600">Upload an Excel file with two columns: Name and Email</p>
            </div>
          </div>

          {/* File Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-2">Drop your Excel file here</p>
            <p className="text-gray-500 mb-6">or</p>
            <Button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50">
              Browse Files
            </Button>
          </div>
        </div>

        {/* Gmail Configuration Section */}
        <div className="bg-white border border-gray-400 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <Mail className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Gmail Configuration</h2>
              <p className="text-gray-600">
                Enter your Gmail credentials to send emails. <a href="#" className="text-purple-600 hover:underline">Learn how to create an app password</a>
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Gmail Address
              </label>
              <input
                type="email"
                placeholder="your.email@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                App Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter 16-character app password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Use a 16-character app password, not your regular Gmail password
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Compose Email & Email Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Compose Email Section */}
          <div className="bg-white border border-gray-400 rounded-xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Compose Email</h2>
              <p className="text-gray-600">Write your email message</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Newsletter - January 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Internal name for this campaign
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter email subject line"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Body
                </label>
                <textarea
                  rows="10"
                  placeholder="Write your email message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Use {'{name}'} to personalize with recipient name
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-2">
                  When should this campaign be sent?
                </p>
              </div>
            </div>
          </div>

          {/* Email Preview Section */}
          <div className="bg-white border border-gray-400 rounded-xl p-8">
            <div className="flex items-start gap-3 mb-6">
              <Eye className="w-6 h-6 text-gray-900 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Email Preview</h2>
                <p className="text-gray-600">How your email will look</p>
              </div>
            </div>

            {/* Email Preview Box */}
            <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 min-h-96">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">From:</p>
                  <p className="font-mono text-sm">your.email@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Subject:</p>
                  <p className="font-semibold">Your email subject</p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-600 mb-2">Message:</p>
                  <p className="text-gray-700">Your email message will appear here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
            Cancel
          </Button>
          <Button  className="px-8 py-3 bg-blue-900 text-white hover:bg-blue-700 font-medium flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Schedule Campaign
          </Button>
        </div>
      </main>
    </div>
  );
}