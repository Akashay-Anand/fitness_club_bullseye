import React from 'react'
import {Icon} from 'react-icons'


export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.isbn)}>
                <p>Del</p>
            </td>           
        </tr>                
))
}
