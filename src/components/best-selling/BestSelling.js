import React from 'react'
import Books from '../Books'

export default function BestSelling() {
  return (
    <section id="Best-selling-books">
        <h1 className="heading">Best Selling Books</h1>
        <div className="grid">

          {/* book 1 */}
          <Books
          imgsrc="/bookstore-react/img/book1.webp"
          title="All The Light We Cannot See"
          author="Anthony Doerr"
          />
           {/* book 2 */}
          <Books
          imgsrc="/bookstore-react/img/book2.webp"
          title="The Power Of Your Subconscious Mind"
          author="Joseph Murphy"
          />
           {/* book 3 */}
          <Books
          imgsrc="/bookstore-react/img/book3.webp"
          title="The Psychology Of Money"
          author="Morgan Housel"
          />
           {/* book 4 */}
          <Books
          imgsrc="/bookstore-react/img/book4.webp"
          title="The Retreat"
          author="Sarah Pearse"
          />
           {/* book 5 */}
          <Books
          imgsrc="/bookstore-react/img/book5.webp"
          title="Atomic Habits"
          author="James Clear"
          />
           {/* book 6 */}
          <Books
          imgsrc="/bookstore-react/img/book6.webp"
          title="Think Like a Monk"
          author="Jay Shetty"
          />
           {/* book 7 */}
          <Books
          imgsrc="/bookstore-react/img/book4.webp"
          title="The Retreat"
          author="Sarah Pearse"
          />
           {/* book 8 */}
          <Books
          imgsrc="/bookstore-react/img/book1.webp"
          title="All The Light We Cannot See"
          author="Anthony Doerr"
          />
        </div>
      </section>
  )
}
