import React, { useState, useEffect } from 'react'

// Services
import { getAllPosts } from '../services/postService'

// Components


const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData) // <= Set State
    }
    fetchAllPosts()
    return () => { setPosts([]) } // Cleanup Function
  }, [])

  return (
    <div>
      <h1>Posts!</h1>
    </div>
  )
}

export default PostList