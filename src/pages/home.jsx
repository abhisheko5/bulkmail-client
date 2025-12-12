import { Upload, Mail, Calendar, TrendingUp, CheckCircle, Shield } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Button from '../components/button.jsx'
import Card from '../components/Card.jsx'

const HomePage = () => {
   const features = [
    {
      icon: <Upload className="w-6 h-6 text-blue-900" />,
      title: "Excel Upload",
      description: "Simply drag and drop your Excel file with recipient information. We'll validate emails and show you a preview instantly."
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-900" />,
      title: "Gmail Integration",
      description: "Connect your Gmail account securely using app passwords. Your credentials are encrypted and never shared."
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-900" />,
      title: "Smart Scheduling",
      description: "Choose the exact date and time for your emails to be sent. Schedule for optimal engagement rates."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-900" />,
      title: "Campaign Tracking",
      description: "Monitor your campaigns in real-time. See which emails are scheduled, sending, or successfully delivered."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-900" />,
      title: "Email Validation",
      description: "Automatic validation of email addresses ensures your messages reach the right inbox every time."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-900" />,
      title: "Secure & Private",
      description: "Your data is encrypted and secure. We follow industry best practices to protect your information."
    }
  ];
  const navigate=useNavigate();

  
  const handleClick = () => {
   
    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };
  
  return (
    <div className="flex flex-col min-h-screen">

     <header className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 border bg-white border-gray-300 z-50">
  <div className="flex items-center gap-2.5">
    <svg className="w-10 h-10" viewBox="0 0 170 150" xmlns="http://www.w3.org/2000/svg">
      <circle cx="85" cy="75" r="75" fill="#1e3a8a"/>
      <text x="60" y="105" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#ffffff">S</text>
      <circle cx="105" cy="75" r="10" fill="#60a5fa"/>
    </svg>
    <h1 className="text-2xl font-semibold">Mailvio</h1>
  </div>
  <nav className="space-x-4">
    <Button onClick={handleClick} className="bg-blue-900 text-white border rounded-lg hover:bg-blue-800">Get Started</Button> 
  </nav>
</header>

      <div className="flex flex-1">

<main className="flex-1 p-6 bg-white m-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Left Side - Text Content */}
  <div>
    <div className="text-7xl font-bold"> 
      <h2>Effortless Bulk Email</h2>
      <h2 className="text-blue-900"> Scheduling</h2>
    </div>
    <p className="text-gray-500 text-xl my-10">
      Upload your recipient list, compose your message, and schedule<br/> emails to be sent at the perfect time. Simple, powerful, and built<br/> for scale.
    </p>

    <div className="flex space-x-4">
      <Button onClick={handleClick} className="bg-blue-900 py-7 px-12 text-xl rounded-lg text-white hover:bg-blue-800">
        Start Scheduling Now
      </Button>
      <Button className="border border-gray-400 py-7 px-12 text-xl rounded-lg text-gray-800 hover:bg-gray-100">
        View Demo
      </Button>
    </div>

    <div className="flex items-center space-x-15 mt-8">
      <div className="text-center">
        <p className="text-4xl font-bold">10,000+</p>
        <p className="text-gray-700">Emails Sent</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">500+</p>
        <p className="text-gray-700">Active Users</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold">99.9%</p>
        <p className="text-gray-700">Delivery Rate</p>
      </div>
    </div>
  </div>

  {/* Right Side - Animated Email Mockup */}
  <div className="relative hidden lg:block ml-20  ">
    <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-500 hover:scale-105">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-lg overflow-hidden">
        {/* Browser-like header */}
        <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 bg-gray-100 rounded px-3 py-1.5 text-xs text-gray-500">
            mailvio.com/compose
          </div>
        </div>
        
        {/* Compose Area with Flying Emails */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 mb-5 overflow-hidden min-h-[180px]">
          {/* Flying Email Envelopes */}
          <div className="absolute top-8 -left-16 animate-[flyEmail_3s_ease-in-out_infinite]">
            <div className="w-12 h-8 bg-white border-2 border-blue-900 rounded shadow-md relative">
              <div className="absolute -top-0.5 left-0 w-full h-4 bg-blue-900" 
                   style={{clipPath: 'polygon(0 0, 50% 60%, 100% 0)'}}></div>
            </div>
          </div>
          <div className="absolute top-16 -left-16 animate-[flyEmail_3s_ease-in-out_infinite_1s]">
            <div className="w-12 h-8 bg-white border-2 border-blue-900 rounded shadow-md relative">
              <div className="absolute -top-0.5 left-0 w-full h-4 bg-blue-900" 
                   style={{clipPath: 'polygon(0 0, 50% 60%, 100% 0)'}}></div>
            </div>
          </div>
          <div className="absolute top-24 -left-16 animate-[flyEmail_3s_ease-in-out_infinite_2s]">
            <div className="w-12 h-8 bg-white border-2 border-blue-900 rounded shadow-md relative">
              <div className="absolute -top-0.5 left-0 w-full h-4 bg-blue-900" 
                   style={{clipPath: 'polygon(0 0, 50% 60%, 100% 0)'}}></div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white text-lg">
              ✉️
            </div>
            <div className="text-lg font-semibold text-gray-800">Composing Email...</div>
          </div>
          
          <div className="space-y-2 relative z-10">
            <div className="h-2 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-2 bg-gray-300 rounded w-4/5 animate-pulse delay-100"></div>
            <div className="h-2 bg-gray-300 rounded w-3/5 animate-pulse delay-200"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute bottom-2 left-0 w-full h-full pointer-events-none">
            <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-[particle_4s_linear_infinite] left-[20%]"></div>
            <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-[particle_4s_linear_infinite_0.5s] left-[40%]"></div>
            <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-[particle_4s_linear_infinite_1s] left-[60%]"></div>
            <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-[particle_4s_linear_infinite_1.5s] left-[80%]"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gray-300 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-900">1,250</div>
            <div className="text-xs text-gray-600 mt-1">Emails Sent</div>
          </div>
          <div className="bg-gray-300 p-4 rounded-xl text-center">
            <div className="text-2xl font-bold text-blue-900">98.5%</div>
            <div className="text-xs text-gray-600 mt-1">Delivered</div>
          </div>
        </div>

        {/* Send Button */}
        <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all hover:-translate-y-1 hover:shadow-xl">
          Send Campaign →
        </button>
      </div>
      
      {/* Decorative Blurs */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite_2s]"></div>
    </div>
  </div>
</main>
      </div>

     <div className="flex flex-col flex-1 items-center text-center space-y-4 mt-10">
  <h1 className="text-5xl font-semibold">
    Everything You Need
  </h1>
  <h3 className="text-gray-500 text-xl max-w-2xl">
    Powerful features designed to make bulk email scheduling effortless and efficient
  </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mt-12 px-6">
  {features.map((feature, index) => (
    <Card className="hover:bg-gray-50  border-gray-200"
      key={index}
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
    />
  ))}
</div>

{/* How It Works Section */}
<div className="w-full bg-gray-50 py-20 mt-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">How It Works</h2>
      <p className="text-gray-500 text-xl">Get started with your first campaign in minutes</p>
    </div>

    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-300 hidden md:block"></div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-25 h-25 rounded-full bg-blue-900 flex items-center justify-center text-white text-4xl font-bold mb-6 relative z-10">
            1
          </div>
          <Upload className="w-12  h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Upload Excel</h3>
          <p className="text-gray-600">Upload your recipient list with names and email addresses</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-25 h-25 rounded-full bg-blue-900 flex items-center justify-center text-white text-4xl font-bold mb-6 relative z-10">
            2
          </div>
          <Mail className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Configure Gmail</h3>
          <p className="text-gray-600">Securely connect your Gmail account with app password</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-25 h-25 rounded-full bg-blue-900 flex items-center justify-center text-white text-4xl font-bold mb-6 relative z-10">
            3
          </div>
          <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Compose Email</h3>
          <p className="text-gray-600">Write your message and preview how it will appear</p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-25 h-25 rounded-full bg-blue-900 flex items-center justify-center text-white text-4xl font-bold mb-6 relative z-10">
            4
          </div>
          <Calendar className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Schedule & Send</h3>
          <p className="text-gray-600">Choose when to send and let us handle the rest</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* CTA Section */}
<div className="w-full bg-gradient-to-br from-purple-50 to-blue-50 py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold mb-6">Ready to Schedule Your First Campaign?</h2>
    <p className="text-gray-600 text-xl mb-10">
      Join hundreds of users who are saving time and reaching more people with MailScheduler
    </p>
    <Button className="bg-blue-900 hover:bg-blue-800 text-white text-xl px-12 py-6 rounded-lg shadow-lg">
      Get Started Now
    </Button>
    <p className="text-gray-500 text-sm mt-6">
      No credit card required • Free to start • SSL Secure
    </p>
  </div>
</div>
</div>


      {/* ⚙️ Footer (optional) */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 170 150" xmlns="http://www.w3.org/2000/svg">
      <circle cx="85" cy="75" r="75" fill="#1e3a8a"/>
      <text x="60" y="105" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#ffffff">S</text>
      <circle cx="105" cy="75" r="10" fill="#60a5fa"/>
    </svg>
                <h3 className="text-xl font-semibold">Mailvio</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Effortless bulk email scheduling for everyone
              </p>
            </div>

            {/* Product Section */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Features</a></li>
                <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-600">Security</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600">Documentation</a></li>
                <li><a href="#" className="hover:text-purple-600">API</a></li>
                <li><a href="#" className="hover:text-purple-600">Support</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-purple-600">About</a></li>
                <li><a href="#" className="hover:text-purple-600">Blog</a></li>
                <li><a href="#" className="hover:text-purple-600">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} MailScheduler. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;