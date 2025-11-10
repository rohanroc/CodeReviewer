import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from 'axios'
import Markdown from "react-markdown"

function App() {
  const [review, setReview] = useState(``)
  const [code, setCode] = useState(`// Write your code here and click the "Review" button for a detailed AI review.
`)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [code])

  async function reviewCode() {
    setLoading(true)
    try {
      const response = await axios.post('https://codereviewer-backend-p96t.onrender.com/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      console.error(error)
      setReview("⚠️ Error fetching review. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111827] text-gray-200 flex flex-col items-center p-4 sm:p-6 md:p-8">

      {/* Header */}
      {/* <header className="w-full max-w-7xl flex justify-between items-center mb-6">
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          CodeReviewer.AI
        </h1>
        <button className="px-5 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:scale-105 transition-transform duration-200">
          Sign In
        </button>
      </header> */}

      {/* Main Section */}
      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Side – Code Editor */}
        <div className="flex flex-col bg-[#1a1a1a] rounded-2xl shadow-xl border border-gray-800 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-gray-800">
            <div className="flex gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <p className="text-sm text-gray-400">Code Editor</p>
          </div>

          <div className="p-4 sm:p-6 flex-1 overflow-auto">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                backgroundColor: "transparent",
                color: "white",
                minHeight: "60vh"
              }}
            />
          </div>

          <div className="flex justify-center items-center py-4 bg-[#0f0f0f] border-t border-gray-800">
            <button
              onClick={reviewCode}
              disabled={loading}
              className={`px-8 py-2 text-base font-medium rounded-full transition-all duration-300 ${loading
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer"
                }`}
            >
              {loading ? "Reviewing..." : "Review"}
            </button>
          </div>
        </div>

        {/* Right Side – Review Output */}
        <div className="bg-[#1a1a1a] rounded-2xl shadow-xl border border-gray-800 p-6 overflow-auto">
          <h2 className="text-lg font-semibold mb-4 text-gray-300">
            AI Review Result
          </h2>
          {loading ? (
            <div className="flex justify-center items-center h-60 text-gray-400">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-400 mr-3"></div>
              Analyzing your code...
            </div>
          ) : (
            <div className="prose prose-invert max-w-none text-gray-300">
              <Markdown>{review}</Markdown>
            </div>
          )}
        </div>
      </main>
      <hr className='my-5' />
      <footer className="py-6 text-center border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} CodeReviewer.AI — Built with 💙 By <a href="https://github.com/rohanroc" >Arijit</a>
      </footer>
    </div>
  )
}

export default App
