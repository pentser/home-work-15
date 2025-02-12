import React from 'react'

function Post({title, info}) {
  return (
    <div className='bg-gray-200 p-4 my-4 flex flex-col' >
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  )
}

export default Post
