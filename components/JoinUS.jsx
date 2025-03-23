import React from 'react'
import styles from '../styles/Join.module.css'
import logo from '../public/images/logo.png'
import { useState, useEffect } from 'react';

export default function JoinUS() {
   const [isMobile, setIsMobile] = useState(false);
       
           useEffect(()=>{
               setIsMobile(window.innerWidth <= 650)
           })
  const openWhatsApp = ()=>{
    const phoneNumber = '923097852424';
    const message = "I want to join you as volunteer...";
    const text = `Hello, ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;
    window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
  }
  return (
    <div className = {styles.joinMain}>
      <div className = {`${isMobile ? styles.mobile_joinContent : styles.joinContent}`}>
        <img src={logo.src} alt="logo" /> <br />
     <p> Join Serve Humanity as a volunteer and make a meaningful impact! {isMobile ? null :  <p>We assist low-income students, provide food supplies to families in need, and support individuals facing health challenges.</p>} Your time and dedication can bring hope and relief through event organization, supply distribution, and then raising awareness. Together, let’s foster kindness and create a caring society. Join us today!</p>

      <button onClick={openWhatsApp}>Connect Our Member To Proceed</button>
      </div>
    </div>
  )
}
