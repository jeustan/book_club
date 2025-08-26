const Book = ( { title }) => {
    return (
       
            <img src={`/public/assets/books/${title}.jpg`} className="aspect-2/3 h-70 object-cover" />
        
    )
}

export default Book;