import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav/Nav'

//Services

//Pages + Components

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Routes>
        
        <Route path='/'
          element={<h1>Landing</h1>}
        />

        <Route path='/signin'
          element={<h1>Sign In</h1>}
        />

        <Route path='/signup'
          element={<h1>Sign Up</h1>}
        />

        <Route path='/posts'
          element={<h1>Posts</h1>}
        />

      </Routes>
    </div>
  )
}

export default App