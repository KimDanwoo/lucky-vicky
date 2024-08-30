'use client'

import { useEffect, useRef, useState } from 'react'

type DynamicTextareaProps = {
  name?: string
  placeholder?: string
  className?: string
}

export const DynamicTextarea = ({
  name,
  placeholder,
  className,
}: DynamicTextareaProps) => {
  const [content, setContent] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [content])

  return (
    <textarea
      ref={textareaRef}
      name={name}
      placeholder={placeholder}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className={`w-full p-3 border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500 text-blue-800 bg-slate-100 ${className}`}
      required
      rows={1}
    />
  )
}
