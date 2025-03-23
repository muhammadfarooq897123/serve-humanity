import React from 'react';
import styles from '../styles/Footer.module.css';
import wa from '../public/images/wa.svg';
import gmail from '../public/images/gmail.svg';


export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          
          {/* Company Info Section */}
          <div className={styles.footer_section}>
            <h2 className={styles.footer_title}>About Us</h2>
            <p className={styles.footer_text}>
             We are dedicated to provide the best from our side in the society. We prioritize needy people needs satisfaction and quality in all our offerings.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className={styles.footer_section}>
            <h2 className={styles.footer_title}>Quick Links</h2>
            <ul className={styles.footer_links}>
              <li><a href="/">Home</a></li>
              <li><a href="/teams">Team</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/ccases">Donate</a></li>
              <li><a href="/join">Join us</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className={styles.footer_section}>
            <h2 className={styles.footer_title}>Contact Us</h2>
            <ul className={styles.footer_contact}>
             
              <li>
                
                <img className= {styles.f_img} src={wa.src} alt="whatsapp" />
              <a href={`https://wa.me/+923089431073`}>+92 3089431073 - Anas Naveed</a></li>
              <li>
                <img className= {styles.f_img} src={wa.src} alt="whatsapp" />
              <a href={`https://wa.me/+923097852424`}>+92 3097852424 - Junaid Rashid</a></li>

              <li>
                <img className= {styles.f_img} src={wa.src} alt="whatsapp" />
              <a href={`https://wa.me/+923430868800`}>+92 3430868800 - Nayyab Ali</a></li>

              <li>
                <img className= {styles.f_img} src={wa.src} alt="whatsapp" />
              <a href={`https://wa.me/+923077670789`}>+92 3077670789 - Basit Iqbal</a></li>

              <li><strong>Address:</strong> University of Enginnering and Technology, Taxila </li>
            </ul>
          </div>

        
        </div>

        {/* Legal Section */}
        <div className={styles.footer_legal}>
          <p>&copy; 2025 Serve Humanity. All Rights Reserved.</p>
          <ul className={styles.footer_legal_links}>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            
          </ul>
          <br />
          <h3>Find us on Map</h3>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.7308449468915!2d72.82072417424777!3d33.767620473265474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa436e082015d%3A0xf729c78e5ac28d57!2sUniversity%20of%20Engineering%20and%20Technology%20(UET)%2C%20Taxila!5e0!3m2!1sen!2sus!4v1737689309157!5m2!1sen!2sus" 
        width="70%" 
        height="250px" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
        </div>
      </footer>
    </>
  );
}
