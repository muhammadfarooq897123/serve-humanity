import React from 'react'
import style from '../styles/CurrentCases.module.css'
import { useState, useEffect } from 'react';
export default function CurrentCases() {

   const [isMobile, setIsMobile] = useState(false);
       
           useEffect(()=>{
               setIsMobile(window.innerWidth <= 650)
           })

   const cases = [

      {

         "title": "Fee case",
         "description": "A student of UET Taxila is suffering from financial crisis and unable to pay his semester fee.Kindly donate for educational Cause",
         "AmountRequired": "30k",
         "AmountCollected": "6k",
         "Deadline": "20 feb",
         "Account1": "03196092861   (Abdul Rehman ) jazzcash",
         "Account2": "03006844332 (Muhammad Junaid Rashid) Easypaisa",
         "Account3": "00300110953386 (Abdul Rehman)  Meezan Bank Account",
          "contact": "+923049790694"
      },
      {

         "title": "Medical Camp case",
         "description": "Serve Humanity in collaboration with Kaar-e-Kamal Taxila Chapter is conducting it's very first medical camp on 15th of February 2025 at Rehbar Colony. To make this Kaar e Khair successful we need your support so we humbly request everyone to participate in making this happen so we can reach out to those in need",
         "AmountRequired": "50k",
         "AmountCollected": "10k",
         "Deadline": "15 feb",
         "Account1": "03196092861   (Abdul Rehman ) jazzcash",
         "Account2": "03006844332 (Muhammad Junaid Rashid) Easypaisa",
         "Account3": "00300110953386 (Abdul Rehman)  Meezan Bank Account",
         "contact": "+923049790694"

      },
   ]

   const getDocuments = (case_val, case_contact)=>{
      const text = 'I need documents for '+case_val;
      const phone = case_contact;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
      window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
   }
         return (
         <div className={`${isMobile ? style.mobile_cases_main : style.cases_main}`}>
            <br />
            <h1>Current Cases</h1> <br />
            <p className = {style.para}>Our team, along with dedicated volunteers, is working tirelessly to drive this revolutionary effort forward. Below are the cases that are currently active, while many others have already been successfully resolved. We appreciate the commitment of everyone involved and acknowledge their valuable contributions.</p>
            <div className={`${isMobile ? style.mobile_cases : style.cases}`}>
               {cases.map((ccase, index) => {
                  return <div className={`${isMobile ? style.mobile_ccase : style.ccase}`}>
                     <h1>{ccase.title}</h1>
                     <h6>{ccase.description}</h6> <br />
                     <p className = {style.required}>Amount Required: {ccase.AmountRequired}</p>
                     <p className = {style.collected}>Amount Collected: {ccase.AmountCollected}</p>
                     <p className = {style.deadline}>Deadline: {ccase.Deadline}</p>
                     <p>Account 1: {ccase.Account1}</p>
                     <p>Account 2: {ccase.Account2}</p>
                     <p>Account 3: {ccase.Account3}</p> <br />
                     <button onClick={()=>{
                         getDocuments(ccase.title, ccase.contact);
                     }}>Ask for documents</button>
                    <br />
                  </div>
               })}
            </div>
         </div>
         )

}
