// import React from 'react'

const Footer = () => {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          <img src="../../img/logo_light.png" alt="NewsGrid" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            voluptas placeat quas? Distinctio autem modi harum illo architecto
            blanditiis suscipit.
          </p>
        </div>
        <div>
          <h3>Email Newsletter</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <form>
            <input type="email" placeholder="Enter Email..." />
            <input
              type="submit"
              defaultValue="Subscribe"
              className="btn btn-primary"
            />
          </form>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <a href="#">Help &amp; Support</a>
            </li>
            <li>
              <a href="#">Privecy Policy</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Join Our Club</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatem, illo!
          </p>
          <a href="#" className="btn btn-secondary">
            Join Now
          </a>
        </div>
        <div>
          <p>Copyright © 2019, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
