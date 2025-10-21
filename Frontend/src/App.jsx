import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from 'axios'
import Markdown from "react-markdown"
import './App.css'

function App() {
  const [review, setReview] = useState(``)
  const [code, setCode] = useState(`//Write your code here and click the review button for detail review`)
  useEffect(() => {
    prism.highlightAll()
  })

  async function reviewCode() {
    const responce = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(responce.data)
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
          <div className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
          <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
