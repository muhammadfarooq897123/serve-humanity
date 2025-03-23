import React from 'react'
import { useState, useEffect } from 'react'
import styles from '../styles/Domain.module.css'
import health from '../public/images/health.jpg'
import ration from '../public/images/ration.jpeg'
import orphan from '../public/images/orphan.png'
import uet from '../public/images/uet.jpeg'
export default function Domain() {

    const our_domains = [
        {
            'name':'Medical/Health cases',
            'image':health,
            'status':'Always Open',
            'desc':'Covers any expenses related to health and medicine without any boundary.',
        },
        {
            'name':'Monthly ration cases',
            'image':ration,
            'status':'Always Open',
            'desc':'We cover basic living expenses (food, clothes, bills, rents) of the needy people in this domain.',
        },
        {
            'name':'Orphan Students fee',
            'image':uet,
            'status':'Always Open',
            'desc':'This domain is always open to cover fees expenses of the students, if any at Uet, Taxila.',
        },
        {
            'name':'Orphan Marriage cases',
            'image':orphan,
            'status':'Always Open',
            'desc':'This domain is all about covering the expenses of the orphan marriages as much as we can.',
        },
    ]

     const [isMobile, setIsMobile] = useState(false);
    
        useEffect(()=>{
            setIsMobile(window.innerWidth <= 650)
        })

  return (
    <div className = {`${isMobile ? styles.mobile_domainParent : styles.domainParent}`}>
        <h1>Domains</h1>
        <div className = {styles.domains}>
        {
                our_domains.map((domain , index)=>{
                 return <div key={index} className = {`${isMobile ? styles.mobile_domain : styles.domain}`}>
                    <img src={domain.image.src} alt="health" />
                  <h2>{domain.name}</h2>
                  <strong>Status: {domain.status}</strong>
                  <p>
                    {domain.desc}
                  </p>
                 </div>
                })
            }
        </div>
    </div>
  )
}
