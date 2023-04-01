import React from 'react'

export default function IntroSection() {
  return (
    <section id="intro-section">
        <div className="intro">
          <div className="intro-heading"><h2>The Last Chapter</h2></div>

          <div>
            <p className="intro-content">
              Welcome to The Last Chapter, your one-stop-shop for all things
              literary! Our bookstore is a haven for book lovers, where you can
              indulge in your passion for reading and explore a diverse range of
              genres. Whether you're an avid reader or a casual browser, we have
              something for everyone. Our cozy and inviting atmosphere, complete
              with comfortable reading nooks and knowledgeable staff, is the
              perfect setting to discover your next favorite book. So come on
              in, take a browse through our shelves, and get lost in a world of
              literature at The Last Chapter.
            </p>
            <button className="btn" onclick="location.href='#Our-Recommendations';">
              Discover
            </button>
          </div>
        </div>
      </section>
  )
}
