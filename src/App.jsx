import './App.css'
import Book from './components/Book.jsx'

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
      {books}
    </div>
  )
}

export default App
