import React, { useState, useEffect } from 'react'

// Services
import { getAllPosts } from '../services/postService'

// Components
import PostCard from '../components/Post/PostCard'
import Header from '../components/misc/Header'

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
      <Header />
      {posts?.map((post) => (
        <PostCard
          post={post}
          key={post._id}
        />
      ))}
    </div>
  )
}

export default PostList