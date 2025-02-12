import React from 'react'
import "./pages.css"
import Post from '../components/Post'



function Exercise1() {
  const posts= [
    {title: 'Post 1', info: 'lorem ipsum dolor sit amet 1'},
    {title: 'Post 2', info: 'This lorem ipsum dolor sit amet 2'},
    {title: 'Post 3', info: 'lorem ipsum dolor sit amet 3'},
    {title: 'Post 4', info: 'This is post 4'},
  ]


  return (
    <>
     <h2 className='text-2xl text-amber-600'>My Posts:</h2>
     {posts.map((post, index) => {
        return (
          <div key={index} className='bg-gray-200 p-4 my-4 flex flex-col' >
            <Post title={post.title} info={post.info} />
          </div>
     )}
    )}
    </>
  )
}

export default Exercise1
