import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from 'axios'
import Markdown from "react-markdown"
import './App.css'
import { use } from 'react'

function App() {
  const [review, setReview] = useState(``)
  const [code, setCode] = useState(`//Write your code here and click the review button for detail review`)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    prism.highlightAll()
  })

  async function reviewCode() {
    // const responce = await axios.post('https://codereviewer-backend-p96t.onrender.com/ai/get-review', { code })
    // setReview(responce.data)
    setLoading(true)
    try {
      const response = await axios.post('https://codereviewer-backend-p96t.onrender.com/ai/get-review', { code })
      setReview(response.data)
    } catch (error) {
      console.log(error)
      setReview("⚠️ Error fetching review. Please try again.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            {loading ? "Reviewing..." : "Review"}
          </div>
        </div>
        <div className="right">
          {loading ? (
            <div className="spinner">Loading...</div>
          ) : (
            <Markdown>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  )
}

export default App
