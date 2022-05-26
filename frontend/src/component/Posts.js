import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      console.log('hello')
      //   serverless-api.signalnerve.workers.dev/api/posts
      const resp = await fetch(
        'https://worker-typescript-template.rishiv.workers.dev/api/posts',
      ).then((res) => res.json())
      console.log('response', resp)
      const postsResp = resp
      setPosts(postsResp)
    }

    getPosts()
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Posts
