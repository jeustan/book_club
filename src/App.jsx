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
      <div className='flex flex-wrap mx-auto px-4'>
        <div className='flex items-center justify-center w-full py-2 pt-12'>
          <div className='text-center text-xl lg:text-6xl'>
            <h1>Leah & Justin Book Club</h1>
          </div>
          <div className='pl-2'>
            <BookIcon />
          </div>
        </div>

        <div className='flex flex-wrap w-full pt-4 justify-center'>
          {books}
        </div>
      </div>
  )
}

export default App
