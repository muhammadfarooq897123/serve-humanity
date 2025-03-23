import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css'

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMobile(window.innerWidth <= 650)
  })
  return (
    <div className={styles.headerParent}>
      <div className={`${isMobile ? styles.mobile_headerContents : styles.headerContents}`}>
        <h1>Serve Humanity - Impacting Society</h1>
        <h3>
          "Together, we can make a difference."</h3>
        <button onClick={() => {
          router.push('/stats')
        }} className={styles.statsButton}>
          View our stats
        </button>
        <button onClick={() => {
          router.push('/ccases')
        }} className={styles.donationButton}>
          Give donation
        </button>
      </div>

    </div>
  )
}
