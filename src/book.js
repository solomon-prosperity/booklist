import React from 'react';

export const Book = (props) => {
    const {title , author, image } = props
  return (
    <article className = "book">
      <img src={image} alt = ""></img> 
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
  }
  