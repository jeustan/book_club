const Book = ( { title }) => {
    return (
        <div>
            <img src={`https://golden-empanada-1c708f.netlify.app/assets/books/${title}.jpg`} className="aspect-2/3 h-50 object-cover" />
        </div>
    )
}

export default Book;