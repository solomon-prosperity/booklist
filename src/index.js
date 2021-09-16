import React from 'react';
import reactDom from 'react-dom';

//CSS
import './index.css';

import {Books} from './books'
import {Book} from './book'


function Booklist () {
  return (
    <section className= "booklist"> 
    {
      Books.map((book) => {
        return <Book key = {book.id} {...book}/>
      })
    }
  
  </section>
  )
}



reactDom.render(<Booklist/> , document.getElementById('root'))