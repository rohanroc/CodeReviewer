import React from 'react'
import heroPic from '../../assets/hero.png'
import { Link } from "react-router-dom"

const DashBoard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111827] text-gray-200 flex flex-col">
            {/* Navbar */}
            <nav className="flex justify-between items-center py-6 px-6 sm:px-10 md:px-16 lg:px-20 border-b border-gray-800 backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
                    CodeReviewer.AI
                </span>

                <button className="px-5 py-2 text-sm sm:text-base font-medium bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:scale-105 transition-transform duration-200">
                    Sign In
                </button>
            </nav>

            {/* Hero Section */}
            <main className="flex flex-col-reverse md:flex-row items-center justify-between flex-1 px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16">
                {/* Left Text Section */}
                <div className="text-center md:text-left md:w-1/2">
                    <p className="text-sm uppercase tracking-widest text-cyan-400/80 mb-2 sm:mb-4">
                        AI-Powered Code Review Platform
                    </p>

                    <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                            Unlimited Code
                        </span>{' '}
                        Reviewer
                    </h1>

                    <p className="max-w-lg mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 mx-auto md:mx-0 leading-relaxed">
                        Experience the next generation of AI-assisted code reviews.
                        Write, analyze, and optimize your code with instant insights.
                    </p>

                    <div className="relative inline-flex items-center justify-center mt-8 sm:mt-10 group">
                        <div className="absolute transition-all duration-300 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 opacity-75 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-cyan-500/40"></div>
                        <Link
                            to="/App"
                            className="relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-[#0a0a0a] border border-transparent rounded-full transition-all duration-200 hover:scale-105"
                            role="button"
                        >
                            🚀 Start Exploring
                        </Link>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <div className="relative group">
                        {/* Glow effect behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <img
                            src={heroPic}
                            alt="Hero Illustration"
                            className="relative z-10 w-4/5 sm:w-3/5 md:w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 text-center border-t border-gray-800 text-gray-500 text-sm">
                © {new Date().getFullYear()} CodeReviewer.AI — Built with 💙 by <a href="https://github.com/rohanroc" >Arijit</a>
            </footer>
        </div>
    )
}

export default DashBoard
