import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [postition, setPostition] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPostition({x: e.clientX, y: e.clientY})

    }
    document.addEventListener('click', updateMouse)
    return () => {
      document.removeEventListener('click', updateMouse)
    }
  })

  return (
    <h1>x :{postition.x}, y: {postition.y}</h1>
  )
}

export default MouseTracker
