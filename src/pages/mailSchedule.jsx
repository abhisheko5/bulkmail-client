import { Mail, ArrowLeft, Upload, Eye, Calendar } from 'lucide-react';
import Button from '../components/button.jsx'
import * as XLSX from 'xlsx';
import { GoogleLogin } from '@react-oauth/google';
import { FaFileExcel } from "react-icons/fa";
import axios from 'axios'
import { useRef, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCampaign() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null); // Store refresh token
  const [isGmailConnected, setIsGmailConnected] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [campaignName, setCampaignName] = useState(null);
  const [subject, setSubject] = useState(null);
  const [emailBody, setEmailBody] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = [
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      if (!allowedTypes.includes(file.type)) {
        setMessage("Please upload an Excel file");
        return;
      }
      setSelectedFile(file);
      setMessage("File uploaded successfully");

      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);

        const recipientList = jsonData.map((row, index) => ({
          id: index + 1,
          name: row.Name || row.name || '',
          email: row.Email || row.email || '',
          status: 'pending'
        }));

        setRecipients(recipientList);
        setShowPreview(true);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  useEffect(() => {
  const savedToken = localStorage.getItem("gmail_refresh_token");
  const savedEmail = localStorage.getItem("user_email");

  if (savedToken) {
    setRefreshToken(savedToken);
    setUserEmail(savedEmail);
    setIsGmailConnected(true);
  }
}, []);


  const handleClickDashboard = () => {
    navigate("/dashboard");
  };

  const handleCampaignName = (e) => {
    setCampaignName(e.target.value);
  };

  const handleEmailSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailBody = (e) => {
    setEmailBody(e.target.value);
  };

  // Google OAuth Success Handler
  const handleGoogleSuccess = async (response) => {
  try {
    console.log("Google OAuth response:", response);

    // response.credential is auth code if flow="auth-code"
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/gmail-oauth`,
      { code: response.credential },
      { withCredentials: true }
    );

    console.log("Backend response:", res.data);

    // Store refresh token & email
    setRefreshToken(res.data.refreshToken);
    setUserEmail(res.data.email);
    setIsGmailConnected(true);

    localStorage.setItem('gmail_refresh_token', res.data.refreshToken);
    localStorage.setItem('user_email', res.data.email);

    alert("Gmail connected successfully!");

  } catch (error) {
    console.error("OAuth error:", error);
    alert(error.response?.data?.message || "Failed to connect Gmail");
  }
};




  const handleSend = async () => {
    // Validation
    if (!selectedFile) {
      alert("Please upload an Excel file");
      return;
    }
    
    if (!subject || !emailBody) {
      alert("Please fill in subject and email body");
      return;
    }
    
    if (!refreshToken) {
      alert("Please connect your Gmail account first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("subject", subject);
      formData.append("html", emailBody);
      formData.append("refreshToken", refreshToken); // Send refresh token instead

      console.log("Sending campaign...");

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/email/send-bulk`,
        formData,{withCredentials:true}
      );
      
      console.log(res.data);
      alert(res.data.message);
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 200);
      
    } catch (error) {
      console.error("Send error:", error);
      
      if (error.response?.status === 401) {
        alert("Gmail authentication expired. Please reconnect your account.");
        setIsGmailConnected(false);
        setRefreshToken(null);
        localStorage.removeItem('gmail_refresh_token');
      } else {
        alert(error.response?.data?.message || "Error sending emails");
      }
    }
  };

  const handleSubject = async () => {
    if (!subject) {
      alert("Please enter subject");
      return;
    }
    
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/ai/subject`,
        { subject }
      );
      setSubject(res.data);
    } catch (error) {
      console.error("AI subject error:", error);
      alert("Failed to enhance subject");
    }
  };

  const handleMessage = async () => {
    if (!emailBody) {
      alert("Please enter message");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/ai/enhancedMessage`,
        { emailBody }
      );
      setEmailBody(res.data);
    } catch (error) {
      console.error("AI message error:", error);
      alert("Failed to enhance message");
    }
  };

  useEffect(() => {
  /* global google */
  const client = google.accounts.oauth2.initCodeClient({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
 scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://mail.google.com/"
  ].join(" "),
      ux_mode: "popup",
    redirect_uri: "postmessage",
    callback: async (response) => {
  console.log("Google Auth Response:", response);
  const authCode = response.code;   // FIXED

  const res = await axios.post(
    `${import.meta.env.VITE_BACKEND_URL}/api/auth/gmail-oauth`,
    { code: authCode },
    { withCredentials: true }
  );

  console.log(res);

  // Store refresh token
  setRefreshToken(res.data.refreshToken);
  setUserEmail(res.data.email);
  setIsGmailConnected(true);

  localStorage.setItem('gmail_refresh_token', res.data.refreshToken);
  localStorage.setItem('user_email', res.data.email);

  alert("Gmail connected successfully!");
    }
  });

  document.getElementById("connectGmailBtn").onclick = () => {
    client.requestCode();   // opens Google popup
  };
}, []);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - keep as is */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button onClick={handleClickDashboard} className="text-gray-700 hover:text-gray-900 hover:underline flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10" viewBox="0 0 170 150" xmlns="http://www.w3.org/2000/svg">
                <circle cx="85" cy="75" r="75" fill="#1e3a8a"/>
                <text x="60" y="105" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#ffffff">S</text>
                <circle cx="105" cy="75" r="10" fill="#60a5fa"/>
              </svg>
              <h1 className="text-2xl font-bold">Create Campaign</h1>
            </div>
            <div className="w-40"></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Upload Recipients Section - keep as is */}
        <div className="bg-white border border-gray-400 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <Upload className="w-6 h-6 text-blue-900 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Upload Recipients</h2>
              <p className="text-gray-600">Upload an Excel file with two columns: Name and Email</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-2">Drop your Excel file here</p>
            <p className="text-gray-500 mb-6">or</p>
            <div>
              <Button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={handleButtonClick}>
                Browse Files
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            {selectedFile && (
              <div className="mt-4 flex justify-center items-center text-gray-700">
                <FaFileExcel className="text-green-600 mr-2" size={24} />
                Selected file: <strong>{selectedFile.name}</strong>
              </div>
            )}
            {message && <p className="mt-2 text-green-600">{message}</p>}
          </div>
        </div>

        {/* Recipient Preview - keep as is */}
        {showPreview && recipients.length > 0 && (
          <div className="mt-8 bg-white border border-gray-300 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Recipient Preview</h3>
            <div className="overflow-auto max-h-96 border border-gray-200 rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recipients.slice(0, 20).map((recipient) => (
                    <tr key={recipient.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{recipient.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{recipient.email}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="12" cy="12" r="3" fill="currentColor"/>
                          </svg>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              Showing {Math.min(20, recipients.length)} of {recipients.length} recipients
            </div>
          </div>
        )}

        {/* Gmail Configuration Section - UPDATED */}
        <div className="bg-white border border-gray-400 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <Mail className="w-6 h-6 text-blue-900 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Gmail Configuration</h2>
              <p className="text-gray-600 mb-4">
                Connect your Gmail account to send emails securely using OAuth 2.0
              </p>

              {/* OAuth Status */}
              {isGmailConnected ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="text-green-800 font-medium">Gmail Connected</p>
                      <p className="text-green-700 text-sm">{userEmail}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <p className="text-blue-800 text-sm">
                    Click the button below to connect your Gmail account
                  </p>
                </div>
              )}

              {/* Google Login Button */}
              <button id="connectGmailBtn"
  className="px-4 py-2 bg-red-500 text-white rounded">
  Connect Gmail
</button>

            </div>
          </div>
        </div>

        {/* Rest of the form - keep as is */}
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
                  onChange={handleCampaignName}
                  type="text"
                  placeholder="e.g., Newsletter - January 2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Internal name for this campaign
                </p>
              </div>

              <div>
                <div className="flex justify-between">
                  <label className="inline-block text-sm font-medium text-gray-900 mb-2">
                    Email Subject
                  </label>
                  <button
                    onClick={handleSubject}
                    className="text-md bg-purple-800 text-white border rounded-sm px-3 hover:cursor-pointer">
                    ai...
                  </button>
                </div>
                <input
                  onChange={handleEmailSubject}
                  value={subject || ""}
                  type="text"
                  placeholder="Enter your email subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email Body
                </label>
                <textarea
                  onChange={handleEmailBody}
                  value={emailBody || ""}
                  rows="10"
                  placeholder="Write your email message here..."
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none
                    ${emailBody ? "bg-green-100" : "bg-white"}`}
                />
                <button
                  onClick={handleMessage}
                  className="bg-purple-500 border rounded-xl p-2 text-white hover:cursor-pointer mt-2">
                  Enhance Message
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  Use {'{name}'} to personalize with recipient name
                </p>
              </div>
            </div>
          </div>

          {/* Email Preview Section - keep as is */}
          <div className="bg-white border border-gray-400 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-6">
              <Eye className="w-6 h-6 text-gray-900 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-2">Email Preview</h2>
                <p className="text-gray-600">How your email will look</p>
              </div>
            </div>

            <div className="flex justify-center bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 py-10 px-4">
              <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg shadow-xl border border-white/40 rounded-xl p-6">
                <div className="mb-5">
                  <p className="text-xs text-gray-600 font-semibold uppercase">From</p>
                  <p className="font-mono text-sm text-gray-900">
                    {userEmail || campaignName || "your.email@gmail.com"}
                  </p>
                </div>

                <div className="mb-5">
                  <p className="text-xs text-gray-600 font-semibold uppercase">Subject</p>
                  <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {subject || "Your email subject"}
                  </p>
                </div>

                <hr className="my-5 border-gray-300/50" />

                <div className="leading-relaxed text-gray-800 whitespace-pre-line">
                  {emailBody || "Your email message will appear here..."}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4">
          <Button onClick={() => navigate('/dashboard')} className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
            Cancel
          </Button>
          <Button 
            onClick={handleSend}  
            className="px-8 py-3 bg-blue-900 text-white hover:bg-blue-800 font-medium flex items-center gap-2"
            disabled={!isGmailConnected}
          >
            <Calendar className="w-5 h-5" />
            {isGmailConnected ? 'Schedule Campaign' : 'Connect Gmail First'}
          </Button>
        </div>
      </main>
    </div>
  );
}