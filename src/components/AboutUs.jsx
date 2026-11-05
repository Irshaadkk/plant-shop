import React from 'react';
import './App.css';

function AboutUs() {
  return (
    <div className="about-page">
      <header>
        <h1>About Paradise Nursery</h1>
      </header>

      <main>
        <section className="about-content">
          <p>
            At Paradise Nursery, we're passionate about bringing nature home.
            Since 2010, we've been supplying healthy, thriving plants to families
            across the city. Whether you're looking for indoor greenery or outdoor
            landscaping, we have the perfect plant for every space.
          </p>

          <h3>Our Mission</h3>
          <p>
            To make plant parenting easy and enjoyable for everyone, providing
            high-quality plants, expert advice, and exceptional customer service.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>Quality plants grown with care</li>
            <li>Expert gardening advice</li>
            <li>Secure online shopping</li>
            <li>Fast and reliable delivery</li>
            <li>30-day satisfaction guarantee</li>
          </ul>
        </section>

        <section className="contact-info">
          <h3>Contact Us</h3>
          <p>📍 123 Green Street, Plant City</p>
          <p>📞 (555) 123-4567</p>
          <p>✉️ info@paradisenursery.com</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;