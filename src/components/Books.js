import React, { useState } from 'react'

export default function Books({imgsrc, title, author}) {
  const[addbtn, setAddbtn] = useState("Add+")
  const[added, setAdded]= useState(false)
  const addbtnfn =()=> {
        if (addbtn==="Add+") {
          setAddbtn("Added")
          setAdded(true)
        } else {
          setAddbtn("Add+")
          setAdded(false)
        }
      }
  return (
      <div className="grid-item">
            <div className="card">
              <img className="card-img" src={imgsrc} alt={title} />
            </div>
            <div className="card-content">
              <h1 className="card-header">{title}</h1>
              <h2 className="author">Author - {author}</h2>
              <div className="price">
                <span>Price -</span> <span className="new-price">&#8377;</span
                ><span className="new-price">399 </span
                ><span className="old-price">&#8377;</span
                ><span className="old-price">499</span>
                <span className="discount">20% off</span>
              </div>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                labore voluptatibus, suscipit voluptatum commodi doloribus
              </p>
              <button className={added? "card-btn active" : "card-btn"} onClick={addbtnfn}>{addbtn}</button>
            </div>
          </div>
  )
}
