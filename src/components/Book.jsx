const Book = ( { title }) => {
    return (
        <img src={`https://golden-empanada-1c708f.netlify.app/assets/books/${title}.jpg`} className="aspect-2/3 h-40 object-cover" />
    )
}

export default Book;