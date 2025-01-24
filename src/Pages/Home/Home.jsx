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

    {/* <!-- Feature List Inside spa-content --> */}
    {/* <div className="spa-features">
      <h3>Our Spa Features</h3>
      <div className="features-list">
        <div className="feature-item">
          <h4>Relaxing Massages</h4>
          <p>Experience ultimate relaxation with our range of massage therapies.</p>
        </div>
        <div className="feature-item">
          <h4>Luxury Facials</h4>
          <p>Rejuvenate your skin with our premium facial treatments.</p>
        </div>
        <div className="feature-item">
          <h4>Jacuzzi & Sauna</h4>
          <p>Unwind in our state-of-the-art jacuzzi and rejuvenating sauna.</p>
        </div>
        <div className="feature-item">
          <h4>Personalized Packages</h4>
          <p>Choose from a variety of packages tailored to your needs.</p>
        </div>
      </div>
    </div> */}
  </div>
</section>

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
        src="/images/spa/spa-3.webp" // Ensure this image corresponds to both spa and buffet experiences
        alt="Spa & Buffet Deluxe Package"
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
    </div>
  );
};

export default Home;