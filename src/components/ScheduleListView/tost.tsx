import React, { useState, useRef } from 'react'

interface ToastProps {}

const Toast: React.FC<ToastProps> = () => {
  const [showToast, setShowToast] = useState(false)
  const parentRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    setShowToast(true)

    // Auto-hide the toast after a certain duration (e.g., 3 seconds)
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  const getToastStyle = (): React.CSSProperties => {
    if (parentRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect()
      const positionStyle: React.CSSProperties =
        parentRect.bottom + 10 + 200 > window.innerHeight
          ? { bottom: window.innerHeight - parentRect.top + 10 + 'px' }
          : { top: parentRect.bottom + 10 + 'px' }

      return {
        position: 'fixed',
        left: parentRect.left + 'px',
        background: '#333',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        ...positionStyle,
      }
    }

    // Default style if parentRef is not available
    return {
      position: 'fixed',
      top: '10px',
      left: '10px',
      background: '#333',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <div ref={parentRef}>
        {/* Your parent element */}
        <button onClick={handleClick}>Click me</button>
      </div>
      {showToast && <div style={getToastStyle()}>Toast Message</div>}
    </div>
  )
}

export default Toast
