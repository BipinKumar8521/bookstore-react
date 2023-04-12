import React from 'react'
import Books from '../Books'

export default function Recommendation() {
  return (
    <section id="Our-Recommendations">
    <h1 className="heading">Our Recommendations</h1>
    <div className="search">
      <input
        type="search"
        name="search"
        id="searchBox"
        placeholder="Type here to search"
      />
      <div className="searchBtn">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </div>
    <div className="grid" style={{marginTop: "20vh"}}>
           {/* book 1 */}
    <Books
          imgsrc="/bookstore-react/img/book7.jpg"
          title="Something I Never Told You"
          author="Shravya Bhinder"
          />
           {/* book 2 */}
           <Books
          imgsrc="/bookstore-react/img/book2.webp"
          title="The Power Of Your Subconscious Mind"
          author="Joseph Murphy"
          />
           {/* book 3 */}
    <Books
          imgsrc="/bookstore-react/img/book8.jpg"
          title="The Woman in the Window"
          author="A.J. Finn"
          />
           {/* book 4 */}
           <Books
          imgsrc="/bookstore-react/img/book4.webp"
          title="The Retreat"
          author="Sarah Pearse"
          />
           {/* book 5 */}
    <Books
          imgsrc="/bookstore-react/img/book9.jpg"
          title="Chanakya Neeti"
          author="Radhakrishnan Pillai"
          />
           {/* book 6 */}
    <Books
          imgsrc="/bookstore-react/img/book10.jpg"
          title="Think and Grow Rich"
          author="Napoleon Hill"
          />
           {/* book 7 */}
           <Books
          imgsrc="/bookstore-react/img/book8.jpg"
          title="The Woman in the Window"
          author="A.J. Finn"
          />
           {/* book 8 */}
    <Books
          imgsrc="/bookstore-react/img/book7.jpg"
          title="Something I Never Told You"
          author="Shravya Bhinder"
          />
    </div>
  </section>

  )
}
