import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="container">
      <div className="about-us">
        <h3>About Us</h3>
        <p>
          Our bookstore offers a wide range of books, from the latest
          bestsellers to timeless classNameics. Our staff are passionate readers
          themselves and always happy to offer recommendations. We support
          local authors and independent publishers. We believe reading is not
          just a hobby but a way of life, and we welcome readers of all ages
          and backgrounds.
        </p>
      </div>

      <div id="Contact-us">
        <h3>Contact Us</h3>
        <p>
          123 Main Street<br />Anytown, USA 12345<br /><br />Phone:
          <a href="tel:555-555-5555">555-555-5555</a> <br />Email:
          <a href="mailto:info@thelastchapter"> info@thelastchapter.com</a>
        </p>
      </div>
    </div>
    <div className="row">
      <div>
        <hr />

        <ul className="social-media">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="fa fa-facebook"
            ></a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="fa fa-twitter"
            ></a>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/"
              target="_blank"
              className="fa fa-linkedin"
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="fa fa-instagram"
            ></a>
          </li>
        </ul>
        <p className="text-center">
          <a href="#privacy">Privacy Policy</a> <b> | </b>
          <a href="#terms">Terms and Conditions</a>
        </p>

        <p className="text-center">
          &copy; 2023 thelastchapter.com. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}
