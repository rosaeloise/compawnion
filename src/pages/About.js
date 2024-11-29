import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import "../css/about.css";

class About extends React.Component {
  render() {
    return (
      <>
        <NavigationBar active="about" />

        <section id="aboutsection">
          <div>
            <h1 id="aboutpage">
              About <span>Us</span>
            </h1>

            <p id="description">
              At BarkCode, we are dedicated to providing a seamless, paperless
              pet adoption platform that connects people with their future furry
              friends. Our mission is to modernize the adoption process by
              eliminating the need for paperwork, making it faster, more
              efficient, and more accessible to everyone involved. We aim to
              bridge the gap between potential pet parents and shelters,
              fostering a simple and user-friendly experience that promotes
              responsible pet ownership.
              <br />
              <br />
              Our team is committed to creating a platform that not only
              simplifies pet adoption but also champions eco-friendly practices.
              By eliminating physical paperwork, we reduce our carbon footprint
              and contribute to a greener planet. What sets us apart is our
              unwavering focus on user experience and the welfare of animals,
              ensuring that every adoption is straightforward and meets the
              highest standards of care.
              <br />
              <br />
              We take pride in our dedication to innovation and community
              impact. With every successful adoption, we help more pets find
              loving homes, supporting shelters in their mission to save lives
              and promote animal welfare. Our goal is to empower individuals and
              families to make informed decisions and embrace the joy of pet
              ownership with ease.
              <br />
              <br />
              Our mission is to build a world where adopting pets is as simple
              as a few clicks. We strive to make pet adoption more accessible,
              efficient, and enjoyable for everyone involved, creating a lasting
              impact on the lives of pets and their new families. Join us as we
              make pet adoption simpler, greener, and more meaningful—because
              every pet deserves a loving home, and every adopter deserves a
              simple, hassle-free experience.
            </p>
          </div>
        </section>
        <Footer active="about" />
      </>
    );
  }
}

export default About;
