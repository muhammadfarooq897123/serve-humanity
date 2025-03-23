import React from 'react'
import style from '../styles/Teams.module.css'
import nayab from '../public/images/nayab.png'
import taha from '../public/images/taha.jpg'
import anas from '../public/images/anas.png'
import basit from '../public/images/basit.jpg'
import { useState, useEffect } from 'react'

export default function Team() {
 const [isMobile, setIsMobile] = useState(false);
    
        useEffect(()=>{
            setIsMobile(window.innerWidth <= 650)
        })
    const team = [
        {
            'Name': 'Engr. Nayab Ali ',
            'Desig.': 'Founder serve humanity',
            'Contact': '+923430868800',
            'image': nayab

        },
        {
            'Name': 'Engr. Basit Iqbal',
            'Desig.': 'Co-Founder Serve Humanity',
            'Contact': '+923077670789',
            'image': basit
        },
        {
            'Name': 'Mr. Taha Yasin',
            'Desig.': 'Co-founder Serve Humanity ',
            'Contact': '+923108323340',
            'image': taha

        },
        {
            'Name': 'Mr. Anas Naveed',
            'Desig.': 'President serve humanity',
            'Contact': '+923089431073',
            'image': anas

        },
    ]

    const handleLaunchWhatsApp  = (phone)=>{
       
        const text = 'hello Sir'
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
        window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
    }
    return (
        <div className = {style.team_main}>
            <br />
          {isMobile ?  <h1>Team Leads</h1> :  <h1>Our Team Leads</h1>} <br />
           <p>There are many other members in team as well, who are working as volunteers in this revolutionary society. Below are the main team leads or heads who are acting under senior management roles. We are grateful to each member of our team and recognise their efforts as well.</p>
         <div className = {style.teams}>
         {team.map((member, index)=>{
             return <div className = {style.member}>
                <img src={member.image.src} alt="" />
                <h2>{member.Name}</h2>
                <h6>{member['Desig.']}</h6>
                <button onClick={()=>handleLaunchWhatsApp(member.Contact)}>Contact me</button>
             </div>
            })}
         </div>
        </div>
    )
}
