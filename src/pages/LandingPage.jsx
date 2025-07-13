import React, { useState } from 'react';

// --- Ikon-ikon SVG ---
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
  </svg>
);
const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
);
const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6"/>
    </svg>
);

import logo from '../assets/logo.png';

const ProfileSection = ({ name, identity, imageUrl, quote, socials, portfolioUrl, flipped = false }) => {
    const [hoveredPanel, setHoveredPanel] = useState(null);
    const namePosition = flipped ? 'md:right-1/3 md:translate-x-1/2' : 'md:left-1/3 md:-translate-x-1/2';
    const textAlign = flipped ? 'md:text-right' : 'md:text-left';
    const socialAlign = flipped ? 'md:justify-end' : 'md:justify-start';
    const bluePanelOrder = flipped ? 'md:order-last' : '';

    const bluePanelClasses = `w-full md:w-4/12 bg-[#FFAD01] text-[#202262] flex flex-col p-8 md:p-12 ${bluePanelOrder} transition-all duration-500 ease-in-out ${hoveredPanel && hoveredPanel !== 'blue' ? 'md:saturate-50 md:scale-95' : 'md:saturate-100 md:scale-100'}`;
    const whitePanelClasses = `w-full md:w-8/12 bg-white flex flex-col transition-all duration-500 ease-in-out ${hoveredPanel && hoveredPanel !== 'white' ? 'md:saturate-50 md:scale-95' : 'md:saturate-100 md:scale-100'}`;

    return (
        <div className="w-full h-full font-sans relative">
            <div className={`absolute top-1/4 ${namePosition} z-20 transform -translate-y-1/2 hidden md:block ${textAlign}`}>
                <p className="text-lg font-light text-[#202262]">HELLO</p>
                <h2 className="text-7xl font-black text-[#202262] pointer-events-none">I'm <br/> {name.split(' ')[0]}</h2>
            </div>
            
            <div className="w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
                <div className={bluePanelClasses} onMouseEnter={() => setHoveredPanel('blue')} onMouseLeave={() => setHoveredPanel(null)}>
                    <div className="flex-grow md:hidden">
                        <p className="text-lg font-light text-[#202262]">HELLO</p>
                        <h2 className="text-5xl font-black text-[#202262] mt-1">I'm <br/> {name.split(' ')[0]}</h2>
                    </div>
                    <div className="flex-grow hidden md:block"></div>
                    <p className={`mt-8 text-lg text-[#202262] pt-4`}>{name}</p>
                    <p className={`mt-8 text-lg text-[#202262] border-t border-[#202262] pt-4`}>{identity}</p>
                </div>

                <div className={whitePanelClasses} onMouseEnter={() => setHoveredPanel('white')} onMouseLeave={() => setHoveredPanel(null)}>
                    <div className="relative h-80 md:flex-1 md:min-h-0">
                        <img 
                            src={imageUrl} 
                            alt={`Foto profil ${name}`} 
                            className="absolute inset-0 w-full h-full object-cover object-top"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/900x600/e2e8f0/4a5568?text=Image+Not+Found'; }}
                        />
                    </div>
                    <div className="p-6">
                        <blockquote className="text-lg italic text-gray-600">"{quote}"</blockquote>
                        <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                            <div className={`flex items-center space-x-5 text-gray-400 ${socialAlign}`}>
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors"><LinkedinIcon /></a>
                                <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900 transition-colors"><GithubIcon /></a>
                                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition-colors"><InstagramIcon /></a>
                            </div>
                            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto text-center px-8 py-3 bg-[#202262] text-white font-bold rounded-md shadow-lg hover:bg-[#FFAD01] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-all duration-300">
                                Kunjungi
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function CreditsPage() {
    const teamMembers = [
        { name: 'Cindy Nadila Putri', identity: 'Teknik Informatika ITERA 2022 - Project Manager & Full-Stack Developer', imageUrl: '/cindy.jpg', quote: 'Trying to be a better version of myself every day.', socials: { linkedin: 'https://www.linkedin.com/in/cindy-nadila-putri-3321a1294/', github: 'https://github.com/cindynadilaptr', instagram: 'https://www.instagram.com/cindynadilaptrr', }, portfolioUrl: 'https://www.linkedin.com/in/cindy-nadila-putri-3321a1294/', },
        { name: 'Giulia Puspo Negoro', identity: 'Teknik Informatika ITERA 2022 - Back-End Developer', imageUrl: '/jiyu.jpg', quote: 'Be nice be kind.', socials: { linkedin: 'https://www.linkedin.com/in/giuliapusponegoro/', github: 'https://github.com/jiyurubyjane', instagram: 'https://www.instagram.com/jiyuulia', }, portfolioUrl: 'https://www.linkedin.com/in/giuliapusponegoro/', },
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
            <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                <div className="relative text-center snap-start h-screen flex flex-col justify-center items-center bg-gray-100 overflow-hidden">
                    <a href="/" aria-label="Go back" className="absolute top-8 left-8 text-gray-500 hover:text-gray-900 transition-colors z-30">
                        <BackIcon />
                    </a>

                    <img src={logo} alt="Logo" className="absolute top-8 left-1/2 -translate-x-1/2 h-10 z-30"/>

                    <div className="absolute top-0 -left-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#14BBF0', animation: 'blob 7s infinite'}}></div>
                    <div className="absolute top-0 -right-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#ff0101fa',animation: 'blob 7s infinite ease-in-out reverse'}}></div>
                    <div className="absolute bottom-0 -left-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#A80151', animation: 'blob 7s infinite ease-in-out'}}></div>
                    <div className="absolute bottom-0 -right-4 w-48 h-48 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-l opacity-95" style={{backgroundColor: '#FFAD01', animation: 'blob 7s infinite reverse'}}></div>

                    <div className="relative z-10 p-4">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#202262] tracking-tight">Development Credits</h1>
                        <p className="mt-4 text-xl text-gray-600">Scroll ke bawah untuk melihat tim kami.</p>
                    </div>

                    <div className="absolute bottom-8 text-gray-500 animate-bounce z-10">
                        <ChevronDownIcon />
                    </div>
                </div>
                
                {teamMembers.map((member, index) => (
                    <div key={member.name} className="h-screen w-full snap-start">
                        <ProfileSection
                            name={member.name}
                            identity={member.identity}
                            imageUrl={member.imageUrl}
                            quote={member.quote}
                            socials={member.socials}
                            portfolioUrl={member.portfolioUrl}
                            flipped={index % 2 !== 0}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}