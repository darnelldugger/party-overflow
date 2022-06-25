import React from 'react'
import '../../styles/Card.css' // <= Card Styling

const PostCard = (props) => {
  return (
    <div className="post-card">

      <div className="card-header"></div>

      <div className="question-container">
        <p>{props.post.question}</p>
      </div>

      <div className="code-container">
        <p>{props.post.codeblock}</p>
      </div>

      <div className="comment-link"></div>

    </div>
  )
}

export default PostCard