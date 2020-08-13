import React, { useState,useEffect } from 'react'

const Like: React.FC = () => {
  const [like, setLike] = useState(0)
  useEffect(() => {
    document.title = `点击了${like}`
  })
  return (
    <button onClick={() => {
      setLike(item => item + 1)
    }}>
    {like} 👍
    </button>
  )
}

export default Like
