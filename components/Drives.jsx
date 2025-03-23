import React from 'react'
import styles from '../styles/Drives.module.css'
import { useState, useEffect } from 'react';
export default function Drives() {
 
  const our_drives = [
    {
        'name':'Winter Drive',
        'status':'Opens in Winter',
        'desc':'In this we provide winter clothes and in this season, we are going to provide shoes or jacket to a needy student up to 8th class. ',
    },
    {
        'name':'Ramadan Drive',
        'status':'Always Open',
        'desc':'Opens in the month of Ramdan, in which we manage meals for the fast of needy people.',
    },
    {
        'name':'Ration Drive',
        'status':'Always Open',
        'desc':'In this drive we provide ration to needy people to manage their day to day expenses related to basic needs.',
    },
    {
        'name':'Palestine Drive',
        'status':'Always Open',
        'desc':'In this drive we collect the donations and send them to Palestine for the help of people effected by war circumstances.',
    },
]

 const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(window.innerWidth <= 650)
    })

return (
<div className = {`${isMobile ? styles.mobile_driveParent: styles.driveParent}`}>
    <h1>Drives</h1>
    <div className = {styles.drives}>
    {
            our_drives.map((drive , index)=>{
             return <div key={index} className = {`${isMobile ? styles.mobile_drive : styles.drive}`}>
              <h2>{drive.name}</h2>
              <strong>Status: {drive.status}</strong>
              <p>
                {drive.desc}
              </p>
             </div>
            })
        }
    </div>
</div>
)
}
