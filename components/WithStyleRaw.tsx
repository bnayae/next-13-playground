import React from 'react'

interface IProps {
    className?: string;
}

export const WithStyleRaw = ({className}: IProps) => {
  return (
    <div className={className}>Not the default</div>
  )
}
