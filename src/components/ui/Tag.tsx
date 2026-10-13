import React, { HTMLAttributes } from 'react'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
}

export const Tag: React.FC<TagProps> = ({ label, className = '', ...props }) => {
  return (
    <span className={`tag ${className}`} {...props}>
      {label}
    </span>
  )
}