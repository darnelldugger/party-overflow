import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import '../../styles/Create.css'

// Components
import PostForm from './PostForm'
import Header from '../../components/misc/Header'

//Services
import { createPost } from '../../services/postService'

const CreatePost = (props) => {
  const navigate = useNavigate()
  const [toggleCode, setToggleCode] = useState(false)
  const [question, setQuestion] = useState('')
  const [codeblock, setCodeblock] = useState('')

  const formData = {
    question: question, // question input
    codeblock: codeblock, // codeblock input
    added_by: props.user.profile, // who created the post
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()
    try {
      const newPost = await createPost(formData)
      console.log(newPost) //<= verify new post data
      navigate('/posts')
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="layout">
      <Header />
      <PostForm
        codeblock={codeblock}
        setCodeblock={setCodeblock}

        toggleCode={toggleCode}
        setToggleCode={setToggleCode}

        question={question}
        setQuestion={setQuestion}

        handleCreatePost={handleCreatePost}
      />
    </div>
  )
}

export default CreatePost