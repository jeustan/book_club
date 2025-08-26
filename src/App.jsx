import './App.css'
import Book from './components/Book.jsx'
import BookIcon from '/public/book.svg?react';

const books = [
  'home-place', 
  'shanty-boat',
  'october-country', 
  'cooking-gene', 
  'eight-years',
  'dog-stars'
].map((book, index) => (
  <Book title={book} />
));

function App() {
  return (
    <>
      <div className='w-full text-center text-xl lg:text-6xl py-2'>
        <h1>Leah & Justin Book Club</h1>
      </div>
      <div className='flex flex-wrap mx-auto px-4'>
        {books}
      </div>
    </>
  )
}

export default App
