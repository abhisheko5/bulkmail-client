import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        
        {/* Left Section */}
        <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-800 p-12 text-white flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-bold text-2xl">S</span>
            </div>
            <span className="text-3xl font-semibold">Mailvio</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            {isLogin ? 'Effortless Bulk Email Scheduling' : 'Start Your Email Campaign Today'}
          </h1>
          <p className="text-lg opacity-90 mb-10 leading-relaxed">
            {isLogin 
              ? 'Upload your recipient list, compose your message, and schedule emails to be sent at the perfect time. Simple, powerful, and built for scale.'
              : 'Join thousands of users who trust Mailvio for their email marketing needs. Get started in minutes.'
            }
          </p>
          
          {isLogin ? (
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold mb-1">10,000+</div>
                <div className="text-sm opacity-90">Emails Sent</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-sm opacity-90">Delivery Rate</div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <span>Unlimited campaigns</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <span>Advanced scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">✓</span>
                </div>
                <span>Real-time analytics</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Right Section - Login/Signup Form */}
        <div className="p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-gray-600 mb-8">
            {isLogin ? 'Sign in to continue to Mailvio' : 'Get started with Mailvio'}
          </p>
          
          <div className={isLogin ? "space-y-6" : "space-y-5"}>
            {/* Full Name - Only for Signup */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
              />
            </div>
            
            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
              />
            </div>
            
            {/* Confirm Password - Only for Signup */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition"
                />
              </div>
            )}
            
            {/* Remember Me / Terms - Toggle based on login/signup */}
            {isLogin ? (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <button className="text-sm font-semibold text-blue-700 hover:text-blue-800">
                  Forgot password?
                </button>
              </div>
            ) : (
              <div className="flex items-start">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded mt-1" />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the <button className="text-blue-700 font-semibold">Terms of Service</button> and <button className="text-blue-700 font-semibold">Privacy Policy</button>
                </span>
              </div>
            )}
            
            {/* Submit Button */}
            <button 
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-lg hover:shadow-xl"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>
          
          {/* Toggle Login/Signup */}
          <div className={isLogin ? "mt-8 text-center" : "mt-6 text-center"}>
            <span className="text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
            </span>
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AuthPage;