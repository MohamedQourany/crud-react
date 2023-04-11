import React from 'react'
import {useState,useContext} from 'react'
import BookEdit from './BookEdit'
import BooksContext from '../context/books'
const  BookShow = ({book}) => {
  const [showEdit,setShowEdit] = useState(false)
  const {deleteBookById} = useContext(BooksContext)
  const handleDeleteClick = ()=>{
    deleteBookById(book.id)
  }
  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }
  const handleSubmit = () => {
    setShowEdit(false)
  }
  let content = <h3>{book.title}</h3>
  if (showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book}/>
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt="books" />
      <span>{content}</span>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className='button' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default  BookShow