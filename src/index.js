import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css'
import img1 from './Images/book_1.jpg'
import img2 from './Images/book_2.jpg'
const books=[
    {
    author:'James Clear',
    title:'Atomic Habits: The life-changing Book for common men',
    img_src: img1,
    id:1
    },
    {
        author:'Perana Ludho',
        title:'Shark Tank India:The future Startup Culture of India',
        img_src:img2,
        id:2
    }
]


function BookList(){
    const findBook=(id)=>{
        const book=books.find((book)=> book.id===id)
        console.log(book);
    }
    return(
        <section className="booklist">
           
            {
                books.map((book)=>{
                    return <Book img_src={book.img_src} title={book.title} author={book.author} id={book.id} findBook={findBook} />
                })
            }
        </section>
    )
}

const Book =(props)=> {
    const getSingleBook=()=>{
        props.findBook(props.id)
    }

    return(
        <section className="book">
        <img src={props.img_src} alt="" />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
        <button onClick={getSingleBook}>CLick Here</button>
        <span className="product-id">{props.id}</span>
        </section>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)
