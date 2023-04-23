// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SingleReview from './SingleReview';

export default () => {
  return (
    <section id="Review-Section">
    <h1 className="heading">Review Section</h1>
    <div className="review">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <SingleReview
              userimg="/bookstore-react/img/user1.jpg"
              username="Ava Elizabeth Wilson"
              reviewmsg="This is my go-to bookstore for all my reading needs!
              The website is easy to navigate and has a wide selection
              of books from different genres. I appreciate the
              detailed descriptions and reviews for each book, which
              helps me make an informed decision before purchasing.
              The delivery is always prompt, and the packaging is
              excellent. Highly recommended! "
              /> </SwiperSlide>
      <SwiperSlide>  <SingleReview
              userimg="/bookstore-react/img/user3.jpg"
              username="Alexander Joseph Kim"
              reviewmsg="I stumbled upon this bookstore website while searching
              for a specific book, and I am glad I did! The website
              has a vast collection of books, and I was able to find
              the book I was looking for easily. The ordering process
              was simple, and the customer service was excellent. I
              received the book within a few days, and it was in
              perfect condition. I will definitely be coming back to
              this website for my future book purchases! "
              /> </SwiperSlide>
      <SwiperSlide> <SingleReview
              userimg="/bookstore-react/img/user2.jfif"
              username="Sophia Isabella Thomas"
              reviewmsg="I had a fantastic experience shopping on this bookstore
              website. The website is user-friendly, and the search
              bar makes it easy to find books by title, author, or
              genre. The prices are competitive, and the shipping is
              fast. I also appreciate the option to leave a review for
              the books I purchase, which helps other readers make an
              informed decision. I highly recommend this website to
              anyone looking for a hassle-free book shopping
              experience!"
              /> </SwiperSlide>
      <SwiperSlide> <SingleReview
              userimg="/bookstore-react/img/user4.jfif"
              username="Noah Matthew Lee"
              reviewmsg="I am an avid reader and have shopped at many online
              bookstores, but this one stands out from the rest. The
              website has an impressive collection of books, and I
              have found some rare editions that I couldn't find
              anywhere else. The website is easy to use, and the
              checkout process is straightforward. The books are
              packaged well, and the delivery is always on time. I
              have recommended this website to my fellow bookworms,
              and they have all been satisfied with their purchases."
              /> </SwiperSlide>
    </Swiper>
    </div>
    </section>
  );
};