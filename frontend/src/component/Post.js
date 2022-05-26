import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Post = ({ match }) => {
  const id = match.params.id
  console.log('id', match.params.id)
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `http://worker-typescript-template.rishiv.workers.dev/api/posts/${id}`,
      ).then((res) => res.json())
      const postResp = resp
      setPost(postResp)
    }
    getPost()
  }, [id])

  if (!Object.keys(post).length) return <div />

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p>
        <em>Published {new Date(post.published_at).toLocaleString()}</em>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  )
}

export default Post
