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
            <a href="/dashboard" className="btn-secondary">View Bookings</a>
              <a href="#about" className="btn-primary">Explore More</a>
              
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
         <div className="image-section">
        <br />
        <img src="/images/landing-2.jpeg" alt="LuxStay Experience" />
      </div>
      </div>
     
    </div>


  </div>
</section>

{/* spa section */}
<section id="spa">
  <div className="container">
    <div className="spa-content">
      <div className="text-section">
        <h2>Relax & Rejuvenate at Our Spa</h2>
        <p>
          Escape to tranquility at our world-class spa, where luxury meets relaxation. 
          Indulge in a variety of treatments, from soothing massages and rejuvenating facials 
          to invigorating body therapies. Our experienced therapists ensure a personalized and 
          peaceful experience that leaves you refreshed and revitalized.
        </p>
      </div>
      <div className="image-section">
        <img src="/images/spa.jpg" alt="Luxury Spa Experience" />
      </div>
    </div>
  </div>
</section>

{/* buffet section */}
<section id="buffet">
  <div className="container">
    <h2 className="section-heading">Experience Our Exclusive Buffet</h2>
    <div className="buffet-row">
      <div className="text-section">
        <h3>Global Delicacies</h3>
        <p>
          Savor the tastes of the world with our specially curated menu featuring 
          dishes from every corner of the globe. Indulge in the ultimate dining experience 
          that caters to every palate.
        </p>
      </div>
      <div className="image-section">
        <img src="/images/dining/global-cuisine.jpg" alt="Global Cuisine" />
      </div>
    </div>

    <div className="buffet-row reverse">
    <div className="text-section">
        <h3>Dessert Heaven</h3>
        <p>
          Indulge your sweet tooth with our exquisite collection of desserts, from 
          creamy cheesecakes to artisan pastries and more.
        </p>
      </div>
      <div className="image-section">
        <img src="/images/dining/dessert.jpg" alt="Dessert Corner" />
      </div>
      
    </div>

    <div className="buffet-row">
      <div className="text-section">
        <h3>Fresh Seafood</h3>
        <p>
          Enjoy freshly caught seafood, expertly prepared to preserve its natural flavors. 
          Our seafood station is a highlight of your dining experience.
        </p>
      </div>
      <div className="image-section">
        <img src="/images/dining/seafood.jpg" alt="Seafood Buffet" />
      </div>
    </div>
  </div>
</section>


{/* hotel Packages section */}
<section id="hotel-packages">
  <div className="container">
    <h2 className="section-title">Explore Our Premium Hotel Packages</h2>
    <p className="section-description">
      Elevate your stay with our thoughtfully curated packages. Whether you're planning a romantic getaway, a family adventure, or a luxurious retreat, we offer tailored options to make your experience truly exceptional.
    </p>
   <div className="packages-grid">
  {/* Package 1 */}
  <div className="package-card">
    <div className="package-image-wrapper">
      <img
        src="/images/package-1.jpg"
        alt="Luxury Suite"
        className="package-image"
      />
    </div>
    <div className="package-info">
      <h3 className="package-title">Luxury Suite</h3>
      <p className="package-description">
        Experience the ultimate indulgence with elegant interiors, premium amenities, <br />and stunning views for an unforgettable retreat. Pamper yourself with a rejuvenating spa treatment.
      </p>
      <p className="package-price">$450 <span className="per-night">/ Night</span></p>
      <button className="btn-book">Reserve Now</button>
    </div>
  </div>
  {/* Package 2 */}
  <div className="package-card">
    <div className="package-image-wrapper">
      <img
        src="/images/dining/dining-4.webp"
        alt="Family Getaway"
        className="package-image"
      />
    </div>
    <div className="package-info">
      <h3 className="package-title">Family Retreat & Adventure</h3>
      <p className="package-description">
        Create cherished memories with your loved ones in spacious accommodations designed for fun, comfort,and togetherness,<br />  Pamper yourself with a rejuvenating spa treatment.
      </p>
      <p className="package-price">$350 <span className="per-night">/ Night</span></p>
      <button className="btn-book">Reserve Now</button>
    </div>
  </div>
  {/* Package 3 */}
  <div className="package-card">
    <div className="package-image-wrapper">
      <img
        src="/images/spa/spa-3.webp" alt="Spa & Buffet Deluxe Package"
        className="package-image"
      />
    </div>
    <div className="package-info">
      <h3 className="package-title">Spa & Buffet Deluxe</h3>
      <p className="package-description">
        Pamper yourself with a rejuvenating spa treatment, followed by an all-you-can-eat buffet with a wide variety of gourmet dishes. Unwind in luxury and savor every moment of your stay with this all-inclusive indulgence.
      </p>
      <p className="package-price">$380 <span className="per-night">/ Night</span></p>
      <button className="btn-book">Reserve Now</button>
    </div>
  </div>
</div>
  </div>
</section>


<footer id="footer">
  <div className="container">
    <div className="footer-content">
      {/* <!-- Logo & Description --> */}
      <div className="footer-left">
        <h3>Dreamyvilla</h3>
        <p>Luxury experience, designed just for you.</p>
      </div>

      {/* <!-- Quick Links --> */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#hotel-packages">Packages</a></li>
        </ul>
      </div>

      {/* <!-- Contact Info --> */}
      <div className="footer-contact">
        <div className="contact-details">
        <h4>Contact Details</h4>
        <p>
          <strong>Email:</strong> <a href="mailto:info@dreamyvilla.com">info@dreamyvilla.com</a> <br />
          <strong>Phone:</strong> +1 234 567 8900 <br />
          <strong>Address:</strong> 123 Luxury Lane, Dream City, USA
        </p>
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="37" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
          </a>
        </div>
      </div>
      </div>
    </div>

    {/* <!-- Footer Bottom Section --> */}
    <div className="footer-bottom">
      <p>&copy; 2025 dreamyvilla. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Home;