import React from 'react'

export default function SingleReview({userimg, username, reviewmsg}) {
  return (
    <div className="swiper-slide">
    <div className="reviews">
      <div className="slide">
        <div className="user">
          <img src={userimg} alt="" className="client-image" />
          <div className="details">
            <span className="name">{username}</span>
          </div>
          <p>
         {reviewmsg}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}
