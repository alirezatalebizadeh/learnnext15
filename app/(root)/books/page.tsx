import React from 'react'

const Books = async () => {
    const response = await fetch("http://localhost:3000/api/books");

    if (!response.ok) {
        throw new Error(`خطا در دریافت داده: ${response.status}`);
    }

    const text = await response.text();
    const books = text ? JSON.parse(text) : [];
    return (
        <div>
            <code>
                {JSON.stringify(books, null, 2)}
            </code>
        </div>
    )
}

export default Books
