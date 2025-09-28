import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ArrowRight, Users, Zap, Palette } from 'lucide-react';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            AI-Powered
            <span className="text-pink-400 block">Collaborative</span>
            Diagramming
          </h1>
          <p className="text-2xl text-pink-200 mb-10 leading-relaxed drop-shadow-md">
            Create, collaborate, and perfect diagrams in real-time with the help of AI.
            Work together seamlessly with your team to build beautiful, professional diagrams.
          </p>

          {currentUser ? (
            <div className="space-y-6">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-10 py-5 bg-pink-500 text-white text-xl font-bold rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/70 hover:scale-105"
              >
                Go to Dashboard
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
          ) : (
            <div className="space-x-6">
              <Link
                to="/register"
                className="inline-flex items-center px-10 py-5 bg-pink-500 text-white text-xl font-bold rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/70 hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="ml-3" size={24} />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center px-10 py-5 bg-transparent text-pink-400 text-xl font-semibold rounded-lg hover:text-pink-300 transition-all duration-300 border-2 border-pink-400 hover:border-pink-300 hover:scale-105"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/50">
              <Users className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-time Collaboration</h3>
            <p className="text-pink-200 text-lg leading-relaxed">
              Work together with your team in real-time. See who's online, track changes, and collaborate seamlessly.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/50">
              <Zap className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Cleaning</h3>
            <p className="text-pink-200 text-lg leading-relaxed">
              Let AI automatically align, format, and improve your diagrams for professional results.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/50">
              <Palette className="text-white" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional Templates</h3>
            <p className="text-pink-200 text-lg leading-relaxed">
              Start with beautiful templates and customize them to match your brand and style.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-16 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Transform Your Diagramming?
          </h2>
          <p className="text-2xl text-pink-200 mb-10 drop-shadow-md">
            Join thousands of teams already using our collaborative diagramming tool.
          </p>
          {!currentUser && (
            <Link
              to="/register"
              className="inline-flex items-center px-12 py-6 bg-pink-500 text-white text-xl font-bold rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/70 hover:scale-105"
            >
              Start Creating Today
              <ArrowRight className="ml-3" size={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

