import "./home.styles.scss";
const Home = () => {
  return (
    <div id="home">
      {/* home section */}
      <div className="img-wra">
        <img src="/images/landing-1.jpeg" alt="Landing" />
        <div className="overlay">
          <div className="content">
            <h1>Welcome to DreamyVilla</h1>
            <p>
              Discover endless possibilities and solutions tailored to your
              needs.
            </p>
            <div className="cta-buttons">
            <a href="/rooms" className="btn-secondary">Get Started</a>
              <a href="#contact" className="btn-primary">contact us</a>
              
            </div>
          </div>
        </div>
      </div>

{/* about section */}
      <section id="about">
  <div className="container">
    <div className="about-content">
      <div className="text-section">
        <h2>About DreamyVilla</h2>
        <p>
          At LuxStay, we redefine the travel experience by offering a curated selection of luxury hotels
          and unique stays that cater to your every need. Whether you're looking for a quiet retreat or a
          vibrant city experience, we ensure comfort, elegance, and first-class service every step of the way.
        </p>
      </div>
      <div className="image-section">
        <br />
        <img src="/images/landing-2.jpeg" alt="LuxStay Experience" />
      </div>
    </div>

    {/* <div className="mission-values">
      <div className="mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to offer unparalleled comfort and convenience to every traveler, ensuring that each stay
          is memorable, seamless, and filled with luxury. We partner with the best hotels worldwide to bring you
          exquisite service, exquisite locations, and unforgettable experiences.
        </p>
      </div>

      <div className="values">
        <h3>Our Core Values</h3>
        <div className="value-list">
          <div className="value-item">
            <h4>Exclusivity</h4>
            <p>We provide access to exclusive hotels and unique accommodations that you won’t find anywhere else.</p>
          </div>
          <div className="value-item">
            <h4>Personalized Service</h4>
            <p>Our team ensures that every guest receives a tailored experience, making each stay feel exceptional.</p>
          </div>
          <div className="value-item">
            <h4>Quality & Comfort</h4>
            <p>We ensure that all our partners maintain the highest standards of comfort, luxury, and quality.</p>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</section>


      {/* Services Section */}
<section id="services">
  <div className="container">
    <h2 className="section-title">
      Our <span>Services</span>
    </h2>
    <p className="section-description">
      Discover the wide range of services we provide to make your stay unforgettable.
    </p>
    <div className="services-grid">
      <div className="service-card">
        <div className="image-wrapper">
          <img src="/images/landing-1.jpeg" alt="Luxury Stays" />
        </div>
        <h3>Luxury Stays</h3>
        <p>
          Experience unmatched comfort in our handpicked luxury hotels and accommodations.
        </p>
      </div>
      <div className="service-card">
        <div className="image-wrapper">
          <img src="\images\dining\dining-2.jpg" alt="Fine Dining" />
        </div>
        <h3>Fine Dining</h3>
        <p>
          Savor world-class cuisines prepared by renowned chefs in stunning settings.
        </p>
      </div>
      <div className="service-card">
        <div className="image-wrapper">
          <img src="\images\spa\spa-4.webp" alt="Spa & Wellness" />
        </div>
        <h3>Spa & Wellness</h3>
        <p>
          Rejuvenate your mind and body with our premium spa and wellness packages.
        </p>
      </div>
    </div>
  </div>
</section>


<section id="contact">
  <div className="container">
    <h2 className="section-title">
      Get in <span>Touch</span>
    </h2>
    <p className="section-description">
      Have questions or want to book your stay? Reach out to us—we'd love to hear from you!
    </p>
    <div className="contact-content">
      <div className="contact-form">
        <h3>Contact Us</h3>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-details">
        <h3>Contact Details</h3>
        <p>
          <strong>Email:</strong> contact@luxstay.com <br />
          <strong>Phone:</strong> +1 234 567 8900 <br />
          <strong>Address:</strong> 123 Luxury Lane, Dream City, USA
        </p>
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<footer id="footer">
  <div class="container">
    <div class="footer-content">
      {/* <!-- Logo & Description --> */}
      <div class="footer-left">
        <h3>Dreamyvilla</h3>
        <p>Luxury experience, designed just for you.</p>
      </div>

      {/* <!-- Quick Links --> */}
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/* <!-- Contact Info --> */}
      <div class="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:info@dreamyvilla.com">info@dreamyvilla.com</a></p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </div>

    {/* <!-- Footer Bottom Section --> */}
    <div class="footer-bottom">
      <p>&copy; 2025 dreamyvilla. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;