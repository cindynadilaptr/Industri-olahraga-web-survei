import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoAplikasi from '../assets/logo.png';
import backgroundAplikasi from '../assets/landingpage.png';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const getDashboardPath = () => {
    if (!user) return '/login';
    switch (user.peran) {
      case 'Admin': return '/dashboard-admin';
      case 'Surveyor': return '/dashboard-surveyor';
      case 'Instansi': return '/dashboard-instansi';
      default: return '/login';
    }
  };

  const navLinks = [
    { name: 'Credits', path: '/credits' },
    { name: 'Kelola Survei', path: getDashboardPath() },
  ];

  return (
    <>
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}
      </style>
      <div 
        className="relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${backgroundAplikasi})` }}
      >
        <div className="absolute top-0 -left-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#14BBF0', animation: 'blob 7s infinite'}}></div>
        <div className="absolute top-0 -right-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#ff0101fa',animation: 'blob 7s infinite ease-in-out reverse'}}></div>
        <div className="absolute bottom-0 -left-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#A80151', animation: 'blob 7s infinite ease-in-out'}}></div>
        <div className="absolute bottom-0 -right-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#FFAD01', animation: 'blob 7s infinite reverse'}}></div>
        <header className="relative z-20">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <Link to="/">
                <img src={logoAplikasi} alt="Logo Aplikasi" className="h-14 w-auto" />
              </Link>
            </div>
            
            <div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 rounded-md text-[#202262] bg-transparent hover:bg-[#14BBF0] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="bg-white text-gray-800 shadow-lg absolute right-6 mt-2 w-56 rounded-md origin-top-right z-30">
              <div className="py-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#14BBF0] hover:text-white" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        <main className="relative z-10 flex items-center justify-center" style={{minHeight: 'calc(100vh - 88px)'}}>
          <div className="text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#202262]">
              Sport Impact<br/>Smart Nation
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 font-semibold text-[#202262]">
              Platform survei untuk mengukur dampak ekonomi dari event olahraga.
            </p>
            <Link to="/login" className="bg-[#14BBF0] text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-300 shadow-lg">
              Mulai Survei
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default LandingPage;