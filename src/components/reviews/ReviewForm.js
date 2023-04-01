import React from 'react'

export default function ReviewForm() {
  return (
    <div className="review-form">
    <form action="">
      <h1>Review Form</h1>
      <hr />
      <div className="rewiew-form-content">
        <p>
          Name:
          <span className="input">
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter your name"
              required
          /></span>
        </p>
        <p>
          Mobile No. :
          <span className="input">
            <input
              type="text"
              name="Mob"
              id="Mob"
              placeholder="Enter your 10-digit mobile number"
          /></span>
        </p>
        <p>
          Email:
          <span className="input">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="xyz@example.com"
              required
          /></span>
        </p>
        <p>
          Your Feedback Message: <br />
          <span className="input">
            <textarea
              id="message"
              cols="35"
              rows="5"
              placeholder="What's your opinion?"
              required
            ></textarea>
          </span>
        </p>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
}
