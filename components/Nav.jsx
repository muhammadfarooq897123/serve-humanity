import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/Nav.module.css'
import { useRouter } from 'next/router';

export default function Nav() {
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 650);
    })

   

  return (
    <div className = {styles.navParent}>
        <div className= {styles.nav}>
          <h1>Serve Humanity</h1>
          <h3>Inspiring Action, Transforming Communities</h3>
        </div>
        <div className = {styles.navigation}>
            <button onClick={()=>router.push('/')} className = {styles.navButton}>Home</button>
            {/* <button className = {styles.navButton}>Projects</button> */}
            <button onClick={()=>router.push('/teams')} className  = {styles.navButton}>Team</button>
            <button onClick={()=>router.push('/about')} className = {styles.navButton}>About us</button>
            <button onClick={()=>router.push('/ccases')} className = {styles.navButton}>Donate</button>
            <button onClick={()=>router.push('/ccases')} className = {styles.navButton}>current cases</button>
            <button onClick={()=>router.push('/projects')} className = {styles.navButton}>Projects</button>
            <button onClick={()=>router.push('/educate')} className = {styles.navButton}>Educate Humanity</button>
            <button onClick={()=>router.push('/join')} className = {styles.navButton}>Join us</button>
            <button onClick={()=>router.push('/contact')} className = {styles.navButton}>Contact us</button>
            
        </div>
    </div>
  )
}
